import React from 'react';
import logo from '../../public/Assets/logo.png';
import sniff from '../../public/Assets/sniff.gif';
import './style.css';

const AboutMeMain = () => {
	return (
		<main>
			<div className="row">
				<h1 className="oneday" id="title">
					About Me
					<img id="logo" src={logo} alt="*"></img>
					<img id="sniff" src={sniff} alt="*"></img>
				</h1>
			</div>
			<br></br>
			<div className="content ebrima">
				<div id="quickBits">
					<h5 className="h5">the quick bits</h5>
					<br></br>
					<ul>
						<li>Born and raised in Los Angeles</li>
						<li>Second generation Mexican/Cuban</li>
						<li>Earned a B.A. in Psychology</li>
						<li>
							Worked in the professional events industry for over a decade
						</li>
					</ul>
				</div>
				<br></br>
				<div id="theDetails" className="ebrima">
					<h5 className="h5">the details</h5>
					<br></br>
					<p className="bio">
						From an early age, the world of computers, electronics, and
						technologies deeply fascinated me. Throughout my childhood, I
						increasingly loved the idea of learning to master electronics and
						computers. In my early teenage years I funneled that energy into a
						soundboard, volunteering with my church to run the tech side of
						Sunday services. At the start of my college career, I shifted my
						mindset towards the field of Psychology, earning a Bachelor of Arts,
						and making plans to move on and eventually earn my Doctorate. My
						fascination with computers and electronics continued on though and
						were reinforced while working with my University's event team,
						expanding my skills from being an audio technician, to working
						heavily with video and lighting equipment as well.
						<br></br>
						<br></br>
						After graduation, I tried to make use of my new degree to no real
						avail, rather, landing myself with an Audio-Visual company working
						out of a luxury hotel in Newport Beach, California. There I learned
						quickly, adding new technologies and equipment to my arsenal and
						being promoted to the property's Assistant-Director position within
						a year. One and a half years later, I had moved on to West Hollywood
						as a Director. In March of 2020, I saw clients cancelling one after
						another due to the global pandemic, Covid-19. At that time, I
						realized that my industry would be impacted in a way that would
						leave it crippled for years to come. This is when I decided to swim,
						rather than sink, and took it as an opportunity to lear something
						new that had always peaked my interest, web-development. Now, one
						year later, I am eager to funnel my love for computers, technology,
						and electronics into a new field as a full-stack web-developer.
						<br></br>
						<br></br>
						Thank's for reading,
						<br></br>
						<span className="oneday">
							<b>Carlos</b>
						</span>
					</p>
				</div>
			</div>
		</main>
	);
};

export default AboutMeMain;
