import './Style.css';
import {Link} from "react-scroll";
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function Hero()
{
    const [text] = useTypewriter({
        words: ["DEVELOPER","ART DIRECTOR","TECH ENTHUSIAST"],
        loop:0,
        typeSpeed:80,
        deleteSpeed:100,
        delaySpeed:1500,
        // pauseFor:5000,
        onLoopDone: () => console.log(``)
      })
    return (
        <div id="hero" className="container-fluid d-flex align-items-center ">
            <div className="container text-center d-grid gap-3 pb-5">

                <div className="m-5">
                    <img id="heroImg" className="img-fluid rounded-circle" title="I'm Vinayak" src={process.env.PUBLIC_URL + '/Images/DP.jpeg'}/>
                </div>
                <h1  className="fw-bold mx-5">HELLO! I'M VINAYAK OULKAR <br/>{text}<Cursor cursorColor='red' /></h1>
                <h5>based in Karnataka, India.</h5>
                <div>
                <Link type="button" id="btnHome" className="btn btn-dark btn-lg px-5 py-3 fs-6 border border-3-dark" activeClass="active" to="AboutSection" spy={true} smooth={true} offset={-118} duration={500}>About Me</Link>
                </div>

                <div>
                <img id="arrow-down" className="img-fluid" title="I'm Vinayak" src={process.env.PUBLIC_URL + '/Images/arrow-down.png'}/>
                </div>

            </div>

        </div>
        
    );
}

export default Hero;