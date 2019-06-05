import React from './node_modules/react';
import { Route, Switch } from './node_modules/react-router-dom';

import Main from './Main';
import About from './About';
import Skills from './Skills';
import MyLinks from './MyLinks';

class Content extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<Switch>
					<Route path='/' component={Main} />
					<Route path='/about' component={About} />
					<Route path='/skills' component={Skills} />
					<Route path='/links' component={MyLinks} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default Content;
