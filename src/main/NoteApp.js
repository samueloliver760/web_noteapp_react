import React from "react";
import Header from "../components/structure/Header";
import {Route, Routes} from 'react-router-dom';
import Footer from "../components/structure/Footer";
import ActiveNote from "../components/structure/ActiveNote";
import ArchivedNote from "../components/structure/ArchieveNote";
import DetailPage from "../components/notes/DetailPage";
import NoteError from "../components/notes/404Note";
import {getUserLogged, putAccessToken} from '../utils/network-data';
import Navigation from "../components/structure/Navigation";
import { LocaleProvider } from "../components/context/LocaleContext";
import { ThemeProvider } from '../components/context/ThemeContext';
import Login from '../components/register-login/Login';
import Register from '../components/register-login/Register';

class NoteApp extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               authedUser: null,
               initializing: true,
               localeContext: {
                    locale: localStorage.getItem('locale') || 'id',
                    toggleLocale: () => {
                         this.setState((prevState) => {
                              const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
                              localStorage.setItem('locale', newLocale);
                              return {
                                   localeContext: {
                                        ...prevState.localeContext,
                                        locale: newLocale
                                   }
                              }
                         })
                    }
               },

               theme: localStorage.getItem('theme') || 'light',
               toggleTheme: () => {
                    this.setState((prevState) => {
                         const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
                         localStorage.setItem('theme', newTheme);
                         return {
                              theme: newTheme
                         };
                    });
               }
          };

          this.onLoginSuccess = this.onLoginSuccess.bind(this);
          this.onLogOut = this.onLogOut.bind(this);
     }

     async onLoginSuccess({accessToken}) {
          putAccessToken(accessToken);
          const {data} = await getUserLogged();

          this.setState(() => {
               return {
                    authedUser: data,
               };
          });
     }

     async componentDidMount() {
          const {data} = await getUserLogged();
          document.documentElement.setAttribute('data-theme', this.state.theme);

          this.setState(() => {
               return {
                    authedUser: data,
                    initializing: false
               }
          });
     }

     onLogOut() {
          this.setState(() => {
               return {
                    authedUser: null
               }
          });

          putAccessToken('');
     }
     
     componentDidUpdate(prevProps, prevState) {
          if (prevState.theme !== this.state.theme) {
            document.documentElement.setAttribute('data-theme', this.state.theme);
          }
        }
     render() {

          if(this.state.initializing) {
               return null;
          }

          if (this.state.authedUser === null) {
               return (
                    <LocaleProvider value={this.state.localeContext}>
                         <ThemeProvider value={this.state}>
                            <div className="note-app">
                         <Header />
                         <Routes>
                              <Route path="/*" element={<Login loginSuccess={this.onLoginSuccess} />}/>
                              <Route path="/register" element={<Register/>}/>
                         </Routes>
                    </div>                  
                         </ThemeProvider>
                             
                    </LocaleProvider>
               )
          }
          return (
                    <LocaleProvider value={this.state.localeContext}>
                         <ThemeProvider value={this.state}>
                         <div className="note-app">
                    <Header logout={this.onLogOut} name={this.state.authedUser.name}/>
                    <Navigation/>
                    <Routes>
                         <Route path="/" element={<ActiveNote />} />
                         <Route path="/archieved" element={<ArchivedNote />}/>
                         <Route path="/notes/:id" element={<DetailPage/>}/>
                         <Route path="/search" element={<ActiveNote />}/>
                         <Route path="/*" element={<NoteError/>}/>
                         <Route path="/search/active" element={<ActiveNote/>}/>
                         <Route path="/search/archieve" element={<ArchivedNote/>}/>
                    </Routes>
                    
                    <Footer />
               </div>
                         </ThemeProvider>
               </LocaleProvider>
 
          )
     }
}

export default NoteApp;