import React from "react";
import { showFormattedDate } from "../../utils/local-data";
import PropTypes from 'prop-types';

function DetailNote ({ title,createdAt,body}) {
     return (
          <div className="detail-item">
               <div className="detail-item-content">
                    <div className="detail-item_body">
                         <h3 className='detail-item_header'>{title} </h3>
                         <p className='detail-item_dibuat'>{showFormattedDate(createdAt)}</p>
                         <p className='detail-item_isi'>{body}</p>
                    </div>
               </div>
          </div>
     );
}

DetailNote.propTypes = {
     title: PropTypes.string.isRequired,
     createdAt: PropTypes.string.isRequired,
     body: PropTypes.string.isRequired,
}



export default DetailNote