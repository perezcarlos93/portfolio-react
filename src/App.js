import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './public/css/App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Wrapper from './Components/Wrapper';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Wrapper>
				<Router>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/aboutme" component={AboutMe} />
				</Router>
			</Wrapper>
			<Footer />
		</div>
	);
}

export default App;
