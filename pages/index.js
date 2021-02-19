import Image from 'next/image';
import { useState } from 'react';
import Slider from "react-slick";
import Link from 'next/link'
import emailjs from 'emailjs-com';
import Success from '../components/Success';

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
};
const settingstwo = {
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1
};
export default function Home() {
  const [send, setSend] = useState(false);
  const [secOneTabsCounter, setSecOneTabs] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_pbsuukw', 'template_1ow9ffz', e.target, 'user_yskovloBjFTkRkks0jaL8')
      .then((result) => {
        console.log(result.text);
        if (result.text === "OK") {
          setSend(!send);
          setTimeout(() => {
            setSend(false);
          }, 3000);
        }
      }, (error) => {
        console.log(error.text);
      });
  }
  let secOneTabs = [
    { title: "Plan a strategy", icon: <Image src="/plus.svg" layout="fixed" width={40} height={40} /> },
    { title: "Design your website", icon: <Image src="/plus.svg" layout="fixed" width={40} height={40} /> },
    { title: "Market and sell", icon: <Image src="/plus.svg" layout="fixed" width={40} height={40} /> },
    { title: "Maintain business success", icon: <Image src="/plus.svg" layout="fixed" width={40} height={40} /> },
  ]
  return (
    <div className="main position-relative">
      <div className="home">
        <div className="slider-box position-relative">
          <Slider {...settings} className="position-relative">
            <div>
              <img src="/slider1.png" alt="" />
            </div>
            <div>
              <img src="/slider2.png" alt="" />
            </div><div>
              <img src="/slider3.png" alt="" />
            </div><div>
              <img src="/slider4.png" alt="" />
            </div>
          </Slider>
          <div className="slider-content">
            <div className="slider-box container d-flex flex-row align-items-center">
              <div className="col-12 col-lg-6">
                <h1>Improve and redefine your online brand using our comprehensive solussions</h1>
                <h1>become a leader in your field.</h1>
                <div className="btn-started">
                  <div className="btn-started-box">
                    <Link href="/quote">
                      <a>
                        <span>Get Started Free + </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-one">
        <div className="sec-one-container">
          <div className="container">
            <div className="d-flex flex-row">
              <div className="col-9 col-lg-6">
                <div className="sec-one-header">
                  <h1>Everything you need to run your online business under one roof</h1>
                </div>
                <div className="sec-one-content">
                  <div className="sec-one-tab">
                    <div className="d-flex flex-row align-items-center">
                      <div className="col-2">
                        <div className="icon-box">
                          <img src="/plus.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-9 col-lg-10">
                        <div className="tab-box">
                          <div className="tab-head">
                            <h5>Plan a strategy</h5>
                          </div>
                          <div className="tab-desc">
                            <span>Set short and long term goals, innovate your vision, and take your business to the next level.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-one-tab">
                    <div className="d-flex flex-row align-items-center">
                      <div className="col-2">
                        <div className="icon-box">
                          <img src="/plus.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-9 col-lg-10">
                        <div className="tab-box">
                          <div className="tab-head">
                            <h5>Design your website</h5>
                          </div>
                          <div className="tab-desc">
                            <span>Use advanced graphic design tools and media production department, to create a special platform that answers all your customers' needs.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-one-tab">
                    <div className="d-flex flex-row align-items-center">
                      <div className="col-2">
                        <div className="icon-box">
                          <img src="/plus.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-9 col-lg-10">
                        <div className="tab-box">
                          <div className="tab-head">
                            <h5>Market and sell</h5>
                          </div>
                          <div className="tab-desc">
                            <span>Set advanced E-commerce stores, and Social Media channels to gain new customers faster and increase your business ROI.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sec-one-tab">
                    <div className="d-flex flex-row align-items-center">
                      <div className="col-2">
                        <div className="icon-box">
                          <img src="/plus.svg" alt="" />
                        </div>
                      </div>
                      <div className="col-9 col-lg-10">
                        <div className="tab-box">
                          <div className="tab-head">
                            <h5>Maintain business success</h5>
                          </div>
                          <div className="tab-desc">
                            <span>Archive long term goals and expand streams of revenue using our maintenance strategies, content creation and media production.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-two">
        <div className="sec-two-container">
          <div className="container d-flex flex-column flex-lg-row">
            <div className="col-12 col-lg-6">
              <div className="sec-two-header text-center text-lg-start">
                <h1>Easy to set up and customize for your own needs</h1>
              </div>
              <div className="sec-two-content text-center">
                <Image src="/secfournew.png" layout="fixed" width={600} height={450} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="sec-two-right-box">
                <div className="sec-two-wrapper-right">
                  <Slider {...settingstwo}>
                    <div className="tab-one">
                      <div className="tab-one-header text-center">
                        <h1>Comprehensive customization the way you want it!</h1>
                      </div>
                      <div className="tab-one-content">
                        <span>Set up your online presence and effortlessly customize noumorouse of features,</span>
                        <span>to ensure it matches your website and reflects your mission statement and overall vision.</span>
                      </div>
                      <div className="iconbox text-center">
                        <Image src="/browser.svg" layout="fixed" width={200} height={200} />
                      </div>
                    </div>
                    <div className="tab-one">
                      <div className="tab-one-header text-center">
                        <h1>Total control over your content, pricing, and data</h1>
                      </div>
                      <div className="tab-one-content">
                        <span>Take full control over site content, design, and pricing to present your brand with</span>
                        <span>confidence and own 100% of your data.</span>
                      </div>
                      <div className="iconbox text-center">
                        <Image src="/equalizer.svg" layout="fixed" width={200} height={200} />
                      </div>
                    </div><div className="tab-one">
                      <div className="tab-one-header text-center">
                        <h1>Seamless automation lets you work without worry</h1>
                      </div>
                      <div className="tab-one-content">
                        <span>Get all your business data and information no matter where you are in the world. </span>
                        <span>Benefit from an automated system, and reliable customer service team that</span>
                        <span>navigate your business future success.</span>
                      </div>
                      <div className="iconbox text-center">
                        <Image src="/automation.svg" layout="fixed" width={200} height={200} />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="sec-three">
        <div className="container">
          <div className="sec-three-header text-center">
            <h1>Experience the best support in the industry</h1>
          </div>
          <div className="sec-three-content text-center">
            <span>“I am extremely happy with Logic Enterprises’s team, they were able to plan the perfect long-term strategy and rebrand my business to perfection”</span>
          </div>
        </div>
      </div>

      <div className="sec-three-footer">
        <div className="d-flex flex-row flex-wrap">
          <div className="col-12 col-lg-2">
            <div className="sec-three-footer-box">
              <span>Security</span>
              <img src="/security.svg" />
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div className="sec-three-footer-box">
              <span>Fast customer service</span>
              <img src="/service.svg" layout="fixed" width={80} height={80} />
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div className="sec-three-footer-box">
              <span>Cooperation with other companies</span>
              <img src="/companies.svg" layout="fixed" width={80} height={80} />
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div className="sec-three-footer-box">
              <span>Satisfaction guaranteed</span>
              <img src="/guarantee.svg" layout="fixed" width={80} height={80} />
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div className="sec-three-footer-box">
              <span>Media production</span>
              <img src="/media.svg" layout="fixed" width={80} height={80} />
            </div>
          </div>
          <div className="col-12 col-lg-2">
            <div className="sec-three-footer-box">
              <span>Storage services</span>
              <img src="/storage.svg" layout="fixed" width={80} height={80} />
            </div>
          </div>
        </div>
      </div>

      <div className="sec-four">
        <div className="container">
          <div className="col-12 col-lg-6">
            <div className="sec-four-box">
              <div className="sec-four-wrapper">
                <div className="sec-four-header">
                  <h1>Be our next success story</h1>
                </div>
                <div className="sec-four-content">
                  <span>Get started and think outside the box, just like Samantha who transformed her</span>
                  <span>Personal Training expertise into a successfully dynamic online platform.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="footer-box">
            <div className="footer-header">
              <h1>Accomplish your online presence and business goals faster with Logic Enterprises</h1>
            </div>
            <div className="footer-form">
              <form onSubmit={sendEmail} className="d-flex flex-column flex-lg-row align-items-center">
                <input type="text" placeholder="Enter your email" name="email" className="input-footer" />
                <button type="submit" className="btn-footer">Send</button>

              </form>
            </div>
          </div>
        </div>
        <Success send={send} />
      </div>

    </div>
  )
}
