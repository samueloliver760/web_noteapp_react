import React from "react";
import { LocaleConsumer } from "../context/LocaleContext";
import ToggleTheme from "../toggle/ToggleTheme";
import usa from "../../images/usa.png";
import indo from "../../images/indonesia.png";
import lo from "../../images/logout.png";
import PropTypes from 'prop-types';


function Header({logout,name}) {

     return (
          <LocaleConsumer>
               {
                    ({locale, toggleLocale}) => {
                         return (
                              <div className="header">
                              <h1>{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</h1>
                              <button onClick={toggleLocale}>{locale==='id' ? <img alt="usa" src = {usa} width="50" height="50"/> : <img alt = "indo" src={indo} width="50" height="50"/> }</button> &nbsp;&nbsp;&nbsp;&nbsp;
                              <ToggleTheme/>
                              <button className= "logout" onClick={logout}><img alt="logout" src={lo} width="30" height="30"/> &nbsp; {name}</button>
                         </div>
                         )
                    }
               }
          </LocaleConsumer>
    
     )
}

Header.propTypes = {
     logout:PropTypes.func,
     name: PropTypes.string,
     locale: PropTypes.bool,
     toggleLocale: PropTypes.bool,
}
export default Header;