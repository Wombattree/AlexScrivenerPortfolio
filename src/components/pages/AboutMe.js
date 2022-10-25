import React from 'react';

export default function AboutMe() 
{
	return (
		<div>
		<section className="section">
			<div className="columns is-mobile is-centered">
				<div className="column is-three-quarters-tablet">
					<div className="container is-vcentered">
						<div className="card mt-6">
							<div className="card-content">
								<div className="content">
									<h1 className="pageTitle">About Me</h1>
									<div className="columns">
										<div className="column is-three-quarters">
											<p>Hello! My name's Alex, I'm currently a student at the Adelaide Uni Coding Bootcamp, where I'm learning web development. I also like to make video games in Unity during my spare time.</p>
											<p>When I'm not learning to program I like to play video games, draw, listen to music and eat chocolate.</p>
										</div>
										<div className="column">
											<img className="avatar" src="https://www.rainforest.com.au/wp-content/uploads/2019/10/wombat-rainforestation-nature-park-kuranda.jpg" alt="Me"></img>
										</div>
									</div>
									<a href="https://github.com/Wombattree"><span className="icon is-large"><i className="fa-brands fa-github fas fa-2x"></i></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
	);
}