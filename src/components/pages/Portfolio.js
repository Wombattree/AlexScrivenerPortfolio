import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Portfolio() 
{
	const [example1Hovered, SetExample1Hovered] = useState(false);
	const [example2Hovered, SetExample2Hovered] = useState(false);
	const [example3Hovered, SetExample3Hovered] = useState(false);
	const [example4Hovered, SetExample4Hovered] = useState(false);
	const [example5Hovered, SetExample5Hovered] = useState(false);
	const [example6Hovered, SetExample6Hovered] = useState(false);

	function ToggleExample1() { SetExample1Hovered(!example1Hovered); }
	function ToggleExample2() { SetExample2Hovered(!example2Hovered); }
	function ToggleExample3() { SetExample3Hovered(!example3Hovered); }
	function ToggleExample4() { SetExample4Hovered(!example4Hovered); }
	function ToggleExample5() { SetExample5Hovered(!example5Hovered); }
	function ToggleExample6() { SetExample6Hovered(!example6Hovered); }

	return (
		<div>
		<section className="section">
			<div className="columns is-mobile is-centered">
				<div className="column is-three-quarters-tablet">
					<div className="container is-vcentered">
						<div className="card mt-6">
							<div className="card-content">
								<div className="content">
									<h1 className="pageTitle">Portfolio</h1>
									<div className="columns is-full">
										<div className="column">
											<div className="portfolioContainer" onMouseEnter={ToggleExample1} onMouseLeave={ToggleExample1}>
												<img className={`portfolioImage ${example1Hovered ? "fadeOutImage" : "fullOpacity"}`} src="https://raw.githubusercontent.com/Wombattree/MerchantGame/main/public/images/screenshot.png" alt="Merchant Game"></img>
												<div className={`portfolioBlackBox ${example1Hovered ? "threeQuarterOpacity" : "zeroOpacity"}`}></div>
												<a className={`portfolioText portfolioTitle ${example1Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://ascrivener-merchant-game.herokuapp.com">Merchant Game</a>
												<a className={`portfolioText portfolioIcon ${example1Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://github.com/Wombattree/MerchantGame"><FontAwesomeIcon className="iconLarge" icon={faGithub}/></a>
												<p className={`portfolioText portfolioDescription ${example1Hovered ? "fullOpacity" : "zeroOpacity"}`}>A browser game where you travel the world trading items to make a profit.</p>
											</div>
										</div>
										<div className="column">
										<div className="portfolioContainer" onMouseEnter={ToggleExample2} onMouseLeave={ToggleExample2}>
												<img className={`portfolioImage ${example2Hovered ? "fadeOutImage" : "fullOpacity"}`} src="https://raw.githubusercontent.com/Wombattree/RecipePriceChecker/main/Assets/readMeImage.png" alt="Recipe Price Checker"></img>
												<div className={`portfolioBlackBox ${example2Hovered ? "threeQuarterOpacity" : "zeroOpacity"}`}></div>
												<a className={`portfolioText portfolioTitle ${example2Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://wombattree.github.io/RecipePriceChecker/">Recipe Price Checker</a>
												<a className={`portfolioText portfolioIcon ${example2Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://github.com/Wombattree/RecipePriceChecker"><FontAwesomeIcon className="iconLarge" icon={faGithub}/></a>
												<p className={`portfolioText portfolioDescription ${example2Hovered ? "fullOpacity" : "zeroOpacity"}`}>How much will your recipe cost? Find out with this recipe builder, or pick from one of the pre-made recipes for ideas!</p>
											</div>
										</div>
									</div>
									<div className="columns is-full">
										<div className="column">
											<div className="portfolioContainer" onMouseEnter={ToggleExample3} onMouseLeave={ToggleExample3}>
												<img className={`portfolioImage ${example3Hovered ? "fadeOutImage" : "fullOpacity"}`} src="https://raw.githubusercontent.com/Wombattree/TechBlog/main/public/images/screenshot.png" alt="Tech Blog"></img>
												<div className={`portfolioBlackBox ${example3Hovered ? "threeQuarterOpacity" : "zeroOpacity"}`}></div>
												<a className={`portfolioText portfolioTitle ${example3Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://ascrivener-tech-blog.herokuapp.com">Tech Blog</a>
												<a className={`portfolioText portfolioIcon ${example3Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://github.com/Wombattree/TechBlog"><FontAwesomeIcon className="iconLarge" icon={faGithub}/></a>
												<p className={`portfolioText portfolioDescription ${example3Hovered ? "fullOpacity" : "zeroOpacity"}`}>Post your thoughts on this framework for a tech blog.</p>
											</div>
										</div>
										<div className="column">
										<div className="portfolioContainer" onMouseEnter={ToggleExample4} onMouseLeave={ToggleExample4}>
												<img className={`portfolioImage ${example4Hovered ? "fadeOutImage" : "fullOpacity"}`} src="https://raw.githubusercontent.com/Wombattree/NoteTaker/main/public/assets/screenshot.png" alt="Note Taker"></img>
												<div className={`portfolioBlackBox ${example4Hovered ? "threeQuarterOpacity" : "zeroOpacity"}`}></div>
												<a className={`portfolioText portfolioTitle ${example4Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://alexscrivenernotetaker.herokuapp.com">Note Taker</a>
												<a className={`portfolioText portfolioIcon ${example4Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://github.com/Wombattree/NoteTaker"><FontAwesomeIcon className="iconLarge" icon={faGithub}/></a>
												<p className={`portfolioText portfolioDescription ${example4Hovered ? "fullOpacity" : "zeroOpacity"}`}>Jot down a few notes with this note taker.</p>
											</div>
										</div>
									</div>
									<div className="columns is-full">
										<div className="column">
											<div className="portfolioContainer" onMouseEnter={ToggleExample5} onMouseLeave={ToggleExample5}>
												<img className={`portfolioImage ${example5Hovered ? "fadeOutImage" : "fullOpacity"}`} src="https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d.jpg" alt="Social Network API"></img>
												<div className={`portfolioBlackBox ${example5Hovered ? "threeQuarterOpacity" : "zeroOpacity"}`}></div>
												<a className={`portfolioText portfolioTitle ${example5Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://www.youtube.com/watch?v=WhiW8BIAF-c">Social Network API</a>
												<a className={`portfolioText portfolioIcon ${example5Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://github.com/Wombattree/SocialNetworkAPI"><FontAwesomeIcon className="iconLarge" icon={faGithub}/></a>
												<p className={`portfolioText portfolioDescription ${example5Hovered ? "fullOpacity" : "zeroOpacity"}`}>The back end API for a social network site (not deployed, click the title to see a video demonstration)</p>
											</div>
										</div>
										<div className="column">
										<div className="portfolioContainer" onMouseEnter={ToggleExample6} onMouseLeave={ToggleExample6}>
												<img className={`portfolioImage ${example6Hovered ? "fadeOutImage" : "fullOpacity"}`} src="https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d.jpg" alt="ECommerce Back End"></img>
												<div className={`portfolioBlackBox ${example6Hovered ? "threeQuarterOpacity" : "zeroOpacity"}`}></div>
												<a className={`portfolioText portfolioTitle ${example6Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://www.youtube.com/watch?v=WeMWIyU2tpw">ECommerce Back End</a>
												<a className={`portfolioText portfolioIcon ${example6Hovered ? "fullOpacity" : "zeroOpacity"}`} href="https://github.com/Wombattree/ECommerceBackEnd"><FontAwesomeIcon className="iconLarge" icon={faGithub}/></a>
												<p className={`portfolioText portfolioDescription ${example6Hovered ? "fullOpacity" : "zeroOpacity"}`}>The back end for an ECommerce site (not deployed, click the title to see a video demonstration)</p>
											</div>
										</div>
									</div>
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