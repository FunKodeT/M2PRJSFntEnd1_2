import React from 'react';
import './footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<ul>
				<li>
					<a
						className="footerTxt"
						href="https://www.copyright.gov/title17/"
						rel="noreferrer"
						target="_blank">
						Copyright © 2024
					</a>
				</li>
				<li>
					|<br />|
				</li>
				<li>
					<a
						className="footerTxt"
						href="https://tooeletech.edu/"
						rel="noreferrer"
						target="_blank">
						Tooele Technical College
					</a>
				</li>
				<li>
					|<br />|
				</li>
				<li>
					<a
						className="footerTxt"
						href="https://github.com/FunKodeT"
						rel="noreferrer"
						target="_blank">
						Matthew L. Cootey
					</a>
				</li>
				<li>
					|<br />|
				</li>
				<li>
					<a
						className="footerTxt"
						href="https://tooeletech.edu/software-development/ "
						rel="noreferrer"
						target="_blank">
						Software Development
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
