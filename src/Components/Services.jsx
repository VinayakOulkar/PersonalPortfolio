import Fade from 'react-reveal/Fade';

function Service()
{
    return(
        <div id="ServiceMain" className="py-5 bg-light">
            <div className="container">
                <Fade bottom>
                    <div className="text-center mb-5">
                        <h6 id="whatIDo"><span className="px-1">What I Do?</span></h6>
                        <h1 className="fw-bolder pb-4 mt-3" id="knowMeMore">How I can help your next project</h1>
                    </div>
                </Fade>

                <div className="row text-center g-5 pb-5" id="servieContentInfo">
                    <Fade bottom>
                    <div className="col-sm-4">
                        <i className="bi bi-palette-fill"></i>
                        <h4 className="fw-bold my-4">Graphic Design</h4>
                        <p className="px-3">A graphic designer merges creativity and technical proficiency, crafting visually stunning designs to communicate messages effectively and captivate the audience.</p>
                    </div>

                    <div className="col-sm-4">
                        <i className="bi bi-display"></i>
                        <h4 className="fw-bold my-4">Web Design</h4>
                        <p className="px-3">Crafting a cutting-edge web design that seamlessly integrates sleek aesthetics with intuitive functionality is essential for engaging user experiences in the digital age.</p>
                    </div>

                    <div className="col-sm-4">
                        <i className="bi bi-pencil-square"></i>
                        <h4 className="fw-bold my-4">UI/UX Design</h4>
                        <p className="px-3">In UI/UX design, I blend aesthetics and functionality, creating intuitive interfaces that enhance user experiences and align with contemporary trends.</p>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className="col-sm-4">
                        <i className="bi bi-brush-fill"></i>
                        <h4 className="fw-bold my-4">App Design & Develop</h4>
                        <p className="px-3">In app design and development, I merge aesthetic appeal with robust functionality, creating a seamless user experience across platforms and devices.</p>
                    </div>

                    <div className="col-sm-4">
                        <i className="bi bi-graph-up"></i>
                        <h4 className="fw-bold my-4">Business Analysis</h4>
                        <p className="px-3">Business analysis optimizes operations by assessing needs, identifying opportunities, and offering insights for informed decision-making and organizational success.</p>
                    </div>

                    <div className="col-sm-4">
                        <i className="bi bi-megaphone-fill"></i>
                        <h4 className="fw-bold my-4">SEO Marketing</h4>
                        <p className="px-3">SEO marketing boosts online visibility, utilizing strategies like keyword optimization to rank higher in search results and drive organic traffic.</p>
                    </div>
                    </Fade>
                </div>

            </div>
        </div>
    );
}

export default Service;