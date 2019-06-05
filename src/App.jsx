import React from 'react';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

class App extends React.PureComponent {
	render() {
		return (
			<div style={{ width: 'inherit', height: 'inherit' }}>
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
}

export default App;
