import Link from 'next/link'
import Image from 'next/image'
import emailjs from 'emailjs-com';
import Success from '../components/Success';
import { useState } from 'react';

const Contact = () => {
    const [send,setSend] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_pbsuukw', 'template_qxxyvb6', e.target, 'user_yskovloBjFTkRkks0jaL8')
            .then((result) => {
                console.log(result.text);
                if(result.text === "OK"){
                    setSend(!send);
                    setTimeout(() => {
                        setSend(false);
                    }, 3000);
                }
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className="contact">
            <div className="container">
                <div className="contact-container">
                    <div className="contact-header">
                        <h1>CONTACT US</h1>
                    </div>
                    <div className="contact-bread">
                        <Link href="/">
                            <a className="logo">Home / </a>
                        </Link>
                        <span>Contact us</span>
                    </div>
                    <div className="contact-content">
                        <div className="d-flex flex-column flex-lg-row">
                            <div className="col-12 col-lg-6">
                                <div className="contact-info">
                                    <h1>PHONE</h1>
                                    <h2>⁦+19548848284</h2>
                                    <h1>GENERAL SUPPORT</h1>
                                    <h2>⁦info@logicentp.com</h2>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="form">
                                    <div className="form-header">
                                        <h1>let's be in touch</h1>
                                    </div>
                                    <form onSubmit={sendEmail}>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" name="user_name" placeholder="Full name" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" name="user_email" placeholder="Email" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" name="contact_number" placeholder="Phone" />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" rows="5" placeholder="Message" name="message"/>
                                        </div>
                                        <button type="submit" className="btn btn-send">Send</button>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Success send={send}/>
        </div>
    )
}
export default Contact;