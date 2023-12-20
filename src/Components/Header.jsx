import {Link} from "react-scroll";

function Header()
{
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link id="navBarName" className="navbar-brand fw-bolder fs-3  text-dark mx-auto" activeClass="active" to="hero" spy={true} smooth={true} offset={-118} duration={500} title="VKO">VKO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto fw-bold ps-2"  id="navBar">
                            <li className="nav-item">
                            <Link  activeClass="active" to="hero" spy={true} smooth={true} offset={-118} duration={500} className="nav-link" aria-current="page">HOME</Link>
                            </li>
                            <li className="nav-item">
                            <Link  activeClass="active" to="AboutSection" spy={true} smooth={true} offset={-118} duration={500} className="nav-link" aria-current="page">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                            <Link  activeClass="active" to="ServiceMain" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" aria-current="page">SERVICES</Link>
                            </li>
                            <li className="nav-item">
                            <Link  activeClass="active" to="ResumeSection" spy={true} smooth={true} offset={-118} duration={500} className="nav-link" aria-current="page">RESUME</Link>
                            </li>
                            <li className="nav-item">
                            <Link  activeClass="active" to="PortfolioSection" spy={true} smooth={true} offset={-110} duration={500} className="nav-link" aria-current="page">PORTFOLIO</Link>
                            </li>
                            <li className="nav-item">
                            <Link  activeClass="active" to="ContactSection" spy={true} smooth={true} offset={-70} duration={500} className="nav-link" aria-current="page">CONTACT</Link>
                            </li>
                            
                            
                        </ul>
                        
                    </div>

                    <div className="navbar-brand">
                        <ul id="socialMedia" className="nav me-auto mb-2 mb-lg-0 mx-auto fs-4">
                                <li className="nav-item">
                                <a id="linkedInIcon" className="nav-link ps-1" aria-current="page" href="https://www.linkedin.com/in/vinayak-o-116358222" target="_blank" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
                                </li>
                                <li className="nav-item">
                                <a id="instagramIcon" className="nav-link" aria-current="page" href="https://www.instagram.com/vinayak_oulkar?igshid=ZjI0YjNmOWM5OA==" target="_blank" title="Instagram"><i className="bi bi-instagram"></i></a>
                                </li>
                                <li className="nav-item">
                                <a id="twitterIcon" className="nav-link" href="#" title="Twitter"><i className="bi bi-twitter"></i></a>
                                </li> 
                        </ul>
                    </div>
                    
                    
                </div>
                </nav>

        </>

    );
}

export default Header;