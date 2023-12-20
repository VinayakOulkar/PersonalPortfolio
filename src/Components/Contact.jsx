import {Link} from "react-scroll";
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


function Contact()
{
    
    const notify = () => {
        toast("ThankYou for your submission! 🚀", {
          toastId: 1
        });
      }
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleTextChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({

            ...prev,
            [name]: value
        }));
    };
    
    const [state, handleSubmit] = useForm("mgegwvon");
    const clearForm=()=>{
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    }    

    if (state.succeeded) {
        
        notify();
        // console.log("Hi");
    }
    return (
        <div id="ContactSection">
            
            <div id="hireMe" className="container-fluid d-flex flex-column align-items-center justify-content-center">
                <Fade bottom><h2 className="fs-1 text-center text-light mt-4 fw-bold">Interested in working with me?</h2></Fade>
                <RubberBand delay={1000}><div className="my-5 rubberBand"> 
                    <Link id="hireMeBtn" className="btn border-2 px-4 py-2 rounded-0" to="ContactForm" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Hire Me!</Link>
                </div></RubberBand>
            </div>
            <div id="ContactForm" className="container py-5">
                <div className="row g-5 mb-5 pb-4 pt-2">
                    <Fade bottom>
                        <div className="col-lg-6 text-wrap">
                            <h2 className="fs-1 fw-bold py-5">Let's get in touch</h2>
                            <p id="ContactLeftPara" className="fs-5 mb-5 lh-lg">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                            <h5 className="fw-bold">Living In:</h5>
                            <p className="fs-6">Karnataka, India.</p>
                            <h5 className="fw-bold  ">Call:</h5>
                            <p className="fs-6">+91 797597####</p>
                        </div>
                    </Fade>

                    <Fade bottom delay={500}>
                        
                        <div className="col-lg-6">
                            {/* <ToastContainer position="top-center"/> */}
                            <h2 className="fs-1 fw-bold py-5">Estimate your Project?</h2>
                            <form id="ContactoForm" onSubmit={handleSubmit} method="POST">
                                <div className="mb-3">
                                    <label for="inputText" className="form-label">What is Your Name:</label>
                                    <input onChange={handleTextChange} value={formData.name} type="text" id="inputText" className="form-control" name="name" aria-describedby="passwordHelpBlock" required/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Your Email Address:</label>
                                    <input onChange={handleTextChange} value={formData.email} type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" required/>
                                </div>
                                <label for="exampleInputEmail1" className="form-label">How can I Help you?</label>
                                <div className="form-floating">
                                    <textarea onChange={handleTextChange} value={formData.message} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="message" required></textarea>
                                </div>
                                <button id="btnHome" type="submit" disabled={state.submitting} className="btn btn-dark px-5 py-3 mt-4 rounded-0">
                                    Send
                                    <img id="arrow-right" className="img-fluid ms-2" src={process.env.PUBLIC_URL + '/Images/arrow-right.png'}/>
                                    </button>
                            </form>
                        </div>
                    </Fade>

                </div>
            </div>
        </div>
        
    );
}

export default Contact;