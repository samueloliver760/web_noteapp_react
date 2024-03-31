import React from "react";
import {Link} from 'react-router-dom';

class NoteError extends React.Component {
	render() {
		return (
			<div className="wrapper">
					<div className="note-error">
					<h3 className='error-item_header'>404 Error</h3>		
					<p className="error-item_subheader">Make sure the link entered is correct </p>
					<Link style={{textDecoration: 'none', fontSize: '30px', color: 'black'}}to="/">Back to home</Link>
			</div>

		</div>
 		)
	}

}

export default NoteError;