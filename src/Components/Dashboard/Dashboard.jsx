import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Dashboard extends Component {
	render() {
		return (
			<div style={{ display: 'flex' }}>
				<Nav />
				Dashboard
			</div>
		);
	}
}

export default Dashboard;
