import { React } from 'react';
import logo from '../../public/Assets/logo.png';
import './style.css';

const NavBar = () => {
	return (
		<div class="flex-column justify-space-around" id="navDiv">
			<nav class="customNav row fixed">
				<div class="col-4">
					<a class="logo" href="/">
						<img class="logoImg" src={logo} alt="Cp"></img>
					</a>
				</div>
				<ul class="nav justify-content-end col-8" id="bootstrapNav">
					<li class="nav-item link">
						<a class="nav-link active link" href="/aboutme">
							About Me
						</a>
					</li>
					<li class="nav-item link">
						<a class="nav-link link" href="/projects">
							Projects
						</a>
					</li>
					<li class="nav-item link">
						<a class="nav-link link" href="/contactme">
							Contact Me
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
