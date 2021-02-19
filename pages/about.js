import Link from 'next/link'
import Image from 'next/image'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-container">
                    <div className="about-header">
                        <h1>ABOUT US</h1>
                    </div>
                    <div className="about-bread">
                        <Link href="/">
                            <a className="logo">Home / </a>
                        </Link>
                        <span>About us</span>
                    </div>
                    <div className="about-content">
                        <div className="col-12 about-content-container">
                            <div className="text-center text-lg-center header-about">
                                <h1>Logic Enterprises </h1>
                            </div>
                            <div className="text-center text-lg-center d-flex flex-column desc-about">
                                <span>is an innovative startup company, located in South Florida. </span>
                                <span>We provide comprehensive web and commerce solutions with emphasis on thinking outside the box. </span>
                                <span>Our goal is to provide your brand with all the necessary online tools to become profitable and successful,over time.</span>
                                <span>
                                    <strong>
                                        Logic Enterprises is here for you!
                                    </strong>
                                </span>
                            </div>
                            <div className="text-center text-lg-center d-flex flex-column desc-about pt-5 pt-lg-5">
                                <span>
                                    <strong>
                                        Company Mission Statement
                                    </strong>
                                </span>
                                <span>Logic Enterprises inspires businesses and individual talents to achieve their full potential,</span>
                                <span>through the art of creativity and innovation.</span>
                            </div>
                        </div>
                    </div>
                    <div className="meet">
                        <div className="meet-container">
                            <div className="meet-header">
                                <h2>Meet our top service providers</h2>
                            </div>
                            <div className="meet-ceo d-flex justify-content-center">
                                <div className="col-12 col-lg-3 text-center meet-ceo-wrapper">
                                    <h2>Sagie</h2>
                                    <div className="ceo-circle">
                                        <Image src="/sagi.jpeg" className="ceo-circle" layout="fixed" width={200} height={200} />
                                    </div>
                                    <h2>CEO</h2>
                                </div>
                            </div>
                            <div className="meet-team">
                                <div className="d-flex flex-column flex-lg-row">
                                    <div className="col-12 col-lg-3">
                                        <div className="team-wrapper text-center">
                                            <h3>Alex</h3>
                                            <div className="team-circle">
                                                <Image src="/alex.jpg" className="team-circle" layout="fixed" width={200} height={200} />
                                                <h4>Fullstack developer</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3">
                                        <div className="team-wrapper text-center">
                                            <h3>Paul</h3>
                                            <div className="team-circle">
                                                <Image src="/tom.png" className="team-circle" layout="fixed" width={200} height={200} />
                                                <h4>Photographer</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3">
                                        <div className="team-wrapper text-center">
                                            <h3>John</h3>
                                            <div className="team-circle">
                                                <Image src="/jhon.jpeg" className="team-circle" layout="fixed" width={200} height={200} />
                                                <h4>Graphic Designer</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3">
                                        <div className="team-wrapper text-center">
                                            <h3>Mouad</h3>
                                            <div className="team-circle">
                                                <Image src="/muad.jpeg" className="team-circle" layout="fixed" width={200} height={200} />
                                                <h4>Logo designer</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="connections">
                        <div className="connections-container text-center">
                            <div className="connections-header text-center">
                                <h1>Meet our top connections</h1>
                            </div>
                            <div className="connections-content text-center">
                                <div className="d-flex flex-column flex-lg-row">
                                    <div className="col-12 col-lg-4">
                                        <div className="connect-wrapper">
                                            <h4>Snap Call Media</h4>
                                            <Image src="/snapcall.jpg" className="ceo-circle" layout="fixed" width={200} height={200} />
                                            <h5>Videography</h5>
                                            <h5>Media productions</h5>
                                            <h5>video editing</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="connect-wrapper">
                                            <h4>Highcomm</h4>
                                            <Image src="/hicom.jpeg" className="ceo-circle" layout="fixed" width={200} height={200} />
                                            <h5>Telecommunication Services</h5>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="connect-wrapper">
                                            <h4>Effective Marketing</h4>
                                            <Image src="/emlogo.jpeg" className="ceo-circle" layout="fixed" width={200} height={200} />
                                            <h5>Online marketing Services</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;