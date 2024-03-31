import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';
import { LocaleConsumer } from "../context/LocaleContext";

const NoteList = ({ notes, onDelete, onArchived }) => {

     return (
          <LocaleConsumer>
               {
                    ({locale}) => {
                         return (
                              <>
                              <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
                              <hr></hr>
                              {notes.length === 0 ? (
                                   <p className="empty">{locale === 'id' ? 'Tidak ada catatan yang ditemukan' : 'There is no notes founded'}</p>
                              ) : (<div className="note-list">
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

NoteList.propTypes = {
     notes: PropTypes.arrayOf(PropTypes.object).isRequired,
     onDelete: PropTypes.func.isRequired,
     onArchived: PropTypes.func.isRequired,
}
export default NoteList;