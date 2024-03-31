import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';
import { LocaleConsumer } from "../context/LocaleContext";

const NoteListArchived = ({ notes, onDelete, onArchived }) => {

     return (
          <LocaleConsumer>
               {
                    ({locale}) => {
                         return (
                              <>
                              <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archieved Note'}</h2>
                              <hr></hr>
                              {notes.length === 0 ? (
                                   <p className="empty">{locale === 'id' ? 'Tidak ada arsip catatan yang ditemukan' : 'There is no archived notes founded'}</p>
                              ) : (
                                   <div className="note-list">
                                        {
                                             notes.map((note) => (
                                                  <NoteItem key={note.id} note={note} onDelete={onDelete} onArchived={onArchived} />
                                             ))
               
                                        }
                                   </div>)}
                         </>           
                         )
                    }
               }
          </LocaleConsumer>
     )
}

NoteListArchived.propTypes = {
     notes: PropTypes.arrayOf(PropTypes.object).isRequired,
     onDelete: PropTypes.func.isRequired,
     onArchived: PropTypes.func.isRequired,
}
export default NoteListArchived;