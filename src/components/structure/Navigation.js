import React from "react";
import {Link} from 'react-router-dom';
import { LocaleConsumer } from "../context/LocaleContext"

function Navigation() {
	return (
		<LocaleConsumer>
			{
				({locale}) => {
					return (
						<nav className="navigation">
						<ul>
							<li><Link style={{textDecoration: 'none'}}to="/">{locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</Link></li>
							<li><Link style={{textDecoration: 'none'}} to="archieved">{locale === 'id' ? 'Catatan Arsip' : 'Archieved Note'}</Link></li>
						</ul>
					</nav>
					)
				}
			}
		</LocaleConsumer>

	);
}

export default Navigation;