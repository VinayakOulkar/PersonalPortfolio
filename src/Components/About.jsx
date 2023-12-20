import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';

function About()
{
    return (
        <div className="container my-5" id="AboutSection">
            <Fade bottom>
                <div className="pt-3">
                    <div className="text-center my-5">
                        <h6 id="aboutMe"><span className="px-1">About Me</span></h6>
                        <h1 className="fw-bolder pb-4" id="knowMeMore">Know Me More</h1>
                    </div>
                    <div className="row my-5 gx-5">
                        <div className="col-lg-8">
                            <h2>Hi, I'm <span className="fw-bold" id="aboutName">Vinayak Oulkar</span></h2>
                            <p className="fs-5 lh-lg">I am a designer & developer who is deeply passionate about Coding. I take pleasure in creating straightforward, polished applications that offer genuine value to the end user. Our commitment revolves around delivering projects on time and within budget while meeting the client's specific requirements.</p>
                        </div>
                        
                        <div className="col-lg-4 text-center">
                            <h2 id="aboutYearExperience" className="mt-2"><span className="px-3">05</span></h2>
                            <RubberBand delay={1600}><h2 className="mt-4 mb-5 rubberBand">Years of <span className="fw-bold ">Experiance</span></h2></RubberBand>
                        </div>
                        
                    </div>
                </div>
                
                <div id="aboutDetails" className="row fw-bold">
                    <div className="col-lg-3 col-sm-12 credits">
                        <h6>Name:</h6>
                        <p>Vinayak Oulkar</p>
                    </div>
                    <div className="col-lg-3 col-sm-12 credits">
                        <h6>Email:</h6>
                        <p>vinayakoulkardsce@gmail.com</p>
                    </div>
                    <div className="col-lg-3 col-sm-12 credits">
                        <h6>Date of birth:</h6>
                        <p>23 September, 2001</p>
                    </div>
                    <div className="col-lg-3 col-sm-12 credits">
                        <h6>From:</h6>
                        <p>Karnataka, India</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default About;