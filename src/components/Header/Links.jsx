import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => (
	<nav>
		<Link to='/about'>
			<span>About</span>
		</Link>
		<Link to='/skills'>
			<span>Skills</span>
		</Link>
		<Link to='/links'>
			<span>Links</span>
		</Link>
	</nav>
);

export default Links;
