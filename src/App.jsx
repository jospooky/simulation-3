import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import './App.css';
import store from './Redux/Store';

const App = () => (
	<Provider store={store}>
		<HashRouter>
			<Routes />
		</HashRouter>
	</Provider>
);

export default App;
