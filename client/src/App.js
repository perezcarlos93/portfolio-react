import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './public/css/App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Container from './Components/Container';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Container>
				<Router>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/aboutme" component={AboutMe} />
					<Route exact path="/projects" component={Projects} />
				</Router>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
