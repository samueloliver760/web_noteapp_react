import React from "react";
import Note from "../../images/takingnote.gif";
import PropTypes from 'prop-types';
import { useState } from "react";
import { LocaleConsumer } from "../context/LocaleContext";

const AddNote = ({onSubmitEventHandler}) => {
     const [title,setTitle] = useState('');
     const [body, setBody] = useState('');

     const onSubmitForm = (event) => {
          event.preventDefault();
          onSubmitEventHandler({title,body});

          setTitle('');
          setBody('');
     };

     return (
          <LocaleConsumer>
               {
                    ({locale}) => {
                         return (
                              <div className="wrapper">
                              <div className="form-add">
                                   <img alt = "takingnote" id="taking_note" width="430" height="430" src={Note} />
                                   <form id="form-add" autoComplete="off" onSubmit={onSubmitForm}>
                                        <h2><b>{locale === 'id' ? 'Ayo tulis catatanmu sekarang !' : 'Start writing your notes now !'}</b></h2>
                                        <input type="text" id="form-title" placeholder={locale === 'id' ? 'Judul' : 'Title'} value={title} onChange={(event) => setTitle(event.target.value)} required></input>
                                        <textarea id="form-content" placeholder={locale === 'id' ? 'Tulis disini !' : 'Write here !'} value={body} onChange={(event) => setBody(event.target.value)} required></textarea>
                                        <button id="button_submit" type="submit">Submit</button>
                                   </form>
                              </div>
                         </div>
                         )
                    }
               }
 
          </LocaleConsumer>

     )

     
}

AddNote.propTypes = {
     onSubmitEventHandler: PropTypes.func.isRequired,
}

export default AddNote;