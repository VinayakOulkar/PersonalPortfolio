import ResumeEduExpBlock from './ResumeEduExpBlock';
import EachSkill from './EachSkill';
import Fade from 'react-reveal/Fade';

function Resume()
{

    const edu=[{
        heading: "Master of Computer Application (MCA)",
        subHeading: "Dayananda Sagar College of Engineering (DSCE), Bengaluru / 2022 - 2024",
        para:"CGPA : 9.04"
    },
    {
        heading: "Bachelor of Computer Application (BCA)",
        subHeading: "KLS Gogte College of Commerce, Belagavi / 2019 - 2022",
        para:"CGPA : 9.22"
    },
    {
        heading: "XII",
        subHeading: "KLS Gogte PU College of Commerce, Belagavi / 2017 - 2019",
        para:"CGPA : 8.67"
    }];

    const exp=[
        {
            heading: "ReactJS Internship",
            subHeading:"InfyNow Pvt Ltd LLP / Nov 2023 - Dec 2023",
            para:"Thriving in the React internship, I found the experience to be a dynamic synthesis of challenges and growth, seamlessly blending innovation with a hands-on, collaborative learning environment."
        },
        {
        heading: "Full Stack Internship",
        subHeading: "InfyNow Pvt Ltd LLP / Mar 2022 - May 2022",
        para:"Engaging in the full stack internship was not just a learning experience; it was a transformative adventure that equipped me with a robust skill set and a profound understanding of end-to-end development."
        }
    
    ];

    const skills=[{
        name:"Web Development)",
        per:"90%"
    },
    {
        name:"RESTful APIs",
        per:"90%"
    },{
        name:"Relational Databases",
        per:"90%"
        
    },{
        name:"Android Development",
        per:"80%"
    },{
        name:"Artificial intelligence",
        per:"80%"
    },
    {
        name:"ServiceNow",
        per:"90%"
    },
    {
        name:" Data Structures",
        per:"90%"
    },
    {
        name:"Blockchain",
        per:"80%"
    }];

    return (

        <>
            <div className="container my-5" id="ResumeSection">
                <Fade bottom>
                    <div className="text-center mb-5">
                        <h6 id="whatIDo"><span className="px-1">Resume</span></h6>
                        <h1 className="fw-bolder pb-4 mt-3" id="knowMeMore">A summary of My Resume</h1>
                    </div>
                </Fade>
                <div className="row">
                    <Fade bottom>
                        <div className="col-lg-6  myEducationBlock">
                            <h3 className="fs-3 fw-bold my-4">My Education</h3>
                            <div id="ResumeLeftColor" className="pt-1">
                                <ResumeEduExpBlock data={edu}/>
                            </div>
                    
                        </div>
                    </Fade> 
                    <Fade bottom delay={300}>
                        <div className="col-lg-6  myExperienceBlock">
                            <h3 className="fs-3 fw-bold my-4">My Experience</h3>
                            <div id="ResumeLeftColor" className="pt-3 pb-1">
                                <ResumeEduExpBlock data={exp}/>
                            </div>
                            
                        </div>
                    </Fade>
                </div>

                {/* MySkill Section */}
                <Fade bottom delay={300}>
                    <div>
                        <h3 className="fs-3 fw-bold mt-5 mb-4">My Skills</h3>
                        <div className="row">
                            <EachSkill data={skills}/>
                        </div>
                        
                    </div>
                </Fade>

                <Fade bottom delay={300}>
                    <h3 className="fs-3 fw-bold mt-5 mb-4">Certifications:</h3>
                    <div id="Certifications" class="container">
                        <div class="row">
                            <div class="col text-center">
                                <img className="" src={process.env.PUBLIC_URL+"/Images/ServiceNow.svg"} title="Professional Application Developer by ServiceNow"/>
                            </div>
                            <div class="col text-center">
                                <img src={process.env.PUBLIC_URL+"/Images/PythonDataScienceIBM.png"} title="Python for Data Science Issued by IBM"/>
                            </div>
                        </div>
                    </div>
                    {/* Download CV */}
                    <div className="text-center my-5">
                        <a id="viewCVBtn" className="btn fs-5 px-5 py-2 border border-dark border-2 rounded-0" href={process.env.PUBLIC_URL+'/Resume/PersonalPortfolioResume.pdf'} target="_blank" controlsList="nodownload">View CV</a>
                    </div>

                </Fade>
            </div>
        </>

    );
}

export default Resume;