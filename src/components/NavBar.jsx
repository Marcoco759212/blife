import {useState} from 'react';

const NavBAr = () => {

	const [btnStyle, setBtnStyle] = useState(false);

    const changeBtnMenu = () => {
        setBtnStyle(!btnStyle)
    }

return(
    <>
        <div className="navbar-content">
            <div className="navbar-logo">
                <span>noon</span>
            </div>
            <div className="navbar-menu">
                <ul>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Featurs</a>
                    </li>
                    <li>
                        <a>Open sources</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
			<div className="navbar-signIn">
				<button>
					Sign in
				</button>
			</div>
        </div>
		<div className="navburguer-content">
			<div className="navbarburguer-bar">
				<div className="navburguer-logo">
					<span>noon</span>
				</div>
				<div className="navburguer-btn" onClick={ () => changeBtnMenu()}>
					<span></span>
				</div>
			</div>
            <div className="navburguer-menu" style={ !btnStyle ? { transform: 'translateX(150%)'} : {transform: 'translateX(0)'}}>
                <ul>
					<li>
						<button>
							Sign In
						</button>
					</li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Featurs</a>
                    </li>
                    <li>
                        <a>Open sources</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
)
}

export default NavBAr
