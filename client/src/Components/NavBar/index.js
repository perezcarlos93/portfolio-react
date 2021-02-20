import { React } from 'react';
import logo from '../../public/Assets/logo.png';
import './style.css';

const NavBar = () => {
	return (
		<div className="flex-column justify-space-around" id="navDiv">
			<nav className="customNav row fixed">
				<div className="col-4">
					<a className="logo" href="/">
						<img className="logoImg" src={logo} alt="Cp"></img>
					</a>
				</div>
				<ul className="nav justify-content-end col-8" id="bootstrapNav">
					<li className="nav-item link">
						<a className="nav-link active link" href="/aboutme">
							About Me
						</a>
					</li>
					<li className="nav-item link">
						<a className="nav-link link" href="/projects">
							Projects
						</a>
					</li>
					<li className="nav-item link">
						<a className="nav-link link" href="/contactme">
							Contact Me
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
