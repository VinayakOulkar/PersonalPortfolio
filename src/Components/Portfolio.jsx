import EachProject from "./EachProject";
import Fade from 'react-reveal/Fade';


function Portfolio()
{
    const projects=[
        {
            name:"Web Page Builder",
            img:"WebPageBuilder.jpg"
        },
        {
            name:"Weather App",
            img:"Weather.png"
        },
        {
            name:"Element WebPage",
            img:"Element.png"
        },
        {
            name:"HostIt",
            img:"HostIt.png"
        },
        {
            name:"Todo List",
            img:"TodoList.png"
        },
        {
            name:"Temperature Prediction Model",
            img:"LinearRegression.png"
        }
    ];

    return (
        <div id="PortfolioSection">
            <Fade bottom>
                <div className="container">
                    <div className="text-center mb-4">
                        <h6 id="whatIDo"><span className="px-1">Portfolio</span></h6>
                        <h1 className="fw-bolder pb-4 mt-3" id="knowMeMore">Some of my most recent projects</h1>
                    </div>

                    <div className="row g-5">
                        <EachProject data={projects}/>
                    </div>
                    
                    <div className="text-center my-5">
                        <a id="viewCVBtn" className="btn fs-5 px-5 py-2 border border-dark border-2 rounded-0" href="https://github.com/VinayakOulkar" target="_blank" title="GitHub">More</a>
                    </div>
                </div>
            </Fade>
            
        </div>
    );
}

export default Portfolio;