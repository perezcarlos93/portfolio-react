import React from 'react';
import './style.css';

const Statement = () => {
	return (
		<div id="statement">
			<h4 id="h4" className="oneday">
				Hello, and welcome to my page
			</h4>
			<br></br>

			<p className="ebrima p">
				I am a full-stack developer working primarily with Javascript and many
				of it's popular front and back end tools and extensions. I'm eager to
				start my journey as a developer and hope I can help you make your goals
				into realities.
			</p>
			<br></br>
			<p className="ebrima p">
				Thank you for visiting my page. My hope as you visit my portfolio is
				that you see the quality in my work that I continually refine and
				improve. To learn more about me, you can visit the{' '}
				<a className="link" href="/aboutme">
					<b>About Me</b>
				</a>{' '}
				page. To get more familiar with with my work, visit the{' '}
				<a className="link" href="/projects">
					<b>Projects</b>
				</a>{' '}
				page to see some of my best projects, with links to my github as well.
				Finally, if you'd like to chat, ask any questions, or offer and feedback
				on how I can be a better developer, head over to the{' '}
				<a className="link" href="/contactme">
					<b>Contact Me</b>
				</a>{' '}
				page. Thanks again for visiting!
			</p>
		</div>
	);
};

export default Statement;
