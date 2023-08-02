import Boton3 from "../assets/Boton3"
import GetStartedIcon from "../assets/GetStartedIcon"
import Group1 from "../assets/Group1"
import Group2 from "../assets/Group2"
import Group3 from "../assets/Group3"
import Group4 from "../assets/Group4"
import Group5 from "../assets/Group5"

const HomePage = () => {
	return(
		<section className='home-content'>
			<div className="home-init">
				<h1>Make it</h1>
				<h2>awsome.</h2>
				<h4>AI trained to generate realistic 3D objects.</h4>
				<button>Get started
					<span>
						<GetStartedIcon width="1rem" height="1rem" className={'getStartedIcon'}/>
					</span>
				</button>
			</div>
			<div className="home-desc">
				<div className="home-desc-head">
					<div>
						<span>
							<Group2 width="1rem" height="1rem" className={'getStartedIcon'}/>
						</span>
						<h4>AI trained to generate realistic 3D objects</h4>
					</div>
					<div>
						<Boton3></Boton3>
					</div>
				</div>
				<span className="home-desc-divider"></span>
				<div className="home-desc-content">
					<div className="home-desc-item">
						<span className="home-desc-icon">
							<Group3/>
						</span>
						<div>
							<span className="home-desc-title">Style</span>
							<span className="home-desc-sub">Choose your style</span>
						</div>
					</div>
					<div className="home-desc-item">
						<span className="home-desc-icon">
							<Group4/>
						</span>
						<div>
							<span className="home-desc-title">Material</span>
							<span className="home-desc-sub">Choose material</span>
						</div>
					</div>
					<div className="home-desc-item">
						<span className="home-desc-icon">
							<Group5/>
						</span>
						<div>
							<span className="home-desc-title">Creativity</span>
							<span className="home-desc-sub">High-level</span>
						</div>
					</div>
					<div className="home-desc-item">
						<span className="home-desc-icon">
							<Group1/>
						</span>
						<div>
							<span className="home-desc-title">AI model</span>
							<span className="home-desc-sub">Midjourney 5.0</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HomePage
