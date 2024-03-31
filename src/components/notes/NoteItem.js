import React from "react";
import { showFormattedDate } from "../../utils/local-data";
import Delete from "../../images/delete.svg";
import Undo from "../../images/undo.svg";
import Archived from "../../images/archive.svg";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NoteItem = ({ note, onDelete, onArchived }) => {
     return (
          <div className="note-item">
               <div className="note-item-content">
                    <div className="note-item_body">
                         <h3 className='note-item_header'>
                              <Link style={{textDecoration: 'none'}} to={`/notes/${note.id}`}>{note.title}</Link>
                         </h3>
                         <p className='note-item_dibuat'>{showFormattedDate(note.createdAt)}</p>
                         <p className='note-item_isi'>{note.body}</p>
                    </div>
               </div>

               <div className="note-item-action">
                    <button className="note-item_delete" onClick={() => onDelete(note.id)}><img alt="delete" src={Delete} width="35" height="35" /></button>
                    <button className="note-item_archieve" onClick={() => onArchived(note.id)}>{!note.archived ? <img alt="archived" src={Archived} width="35" height="35" /> : <img alt = "undo" src={Undo} width="35" height="35" />}</button>
               </div>
          </div>
     );
}

NoteItem.propTypes = {
     onDelete: PropTypes.func.isRequired,
     onArchived: PropTypes.func.isRequired,
     note: PropTypes.object.isRequired,
}


export default NoteItem