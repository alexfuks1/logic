import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Features = () => {
    const [counter, setCounter] = useState(0);
    let cont = [
        { title: "BUILD YOUR STRATEGY", icon: <Image src="/strategy.svg" layout="fixed" width={25} height={25} /> },
        { title: "DESIGN YOUR SITE", icon: <Image src="/web-design.svg" layout="fixed" width={25} height={25} /> },
        { title: "MARKET AND SELL", icon: <Image src="/sale.svg" layout="fixed" width={25} height={25} /> },
        { title: "LONG TERM SUCCESS", icon: <Image src="/check.svg" layout="fixed" width={25} height={25} /> },
    ]
    let subcont = [
        {
            title: "Re-brand",
            desc: "Adapt current trends without taking major risks, and increase immediately your revenue.",
            title1: "Analize",
            desc1: "Be aware of the existence of your brand online, get the best analytic report to launch an effective campaign.",
            title2: "Differentiate",
            desc2: "Stand out and become a leader in your field as we find the right nitches and target audience for you.",
            title3: "Engage",
            desc3: "Get the right amount of exposure that will bring more attention to your brand."
        },
        {
            title: "Create",
            desc: "Find your favorite appearance and choose your desired colors, videos, GIFs, animations, and styles.",
            title1: "Differentiate",
            desc1: "Become a leader in your field, with powerful exposure that makes your brand stand out.",
            title2: "Capture Attention",
            desc2: "Present your online platform as your business card to the world and get endless opportunities.",
        },
        {
            title: "Boost sales",
            desc: "Boost sales with confidence, get directly to your target audience and increase your business exposure immediately.",
            title1: "Market effectively",
            desc1: " Easy upsell and cross-sale to get the most of each transaction, and attract more recurring sales",
            title2: "Differentiate",
            desc2: "Take advantage of our unique customer persona evaluation to asset the business needs and become a leader in your field.",
            title3: "Increase exposure",
            desc3: "Expand your brand awareness with measurable steps and applying proven methods for success.",
        },
        {
            title: "Organize",
            desc: "Get a full data report and gain essential advantage over your competitors.",
            title1: "Track",
            desc1: " Monitor and maintain business success with monthly analytics reports and constant customer engagement.",
            title2: "Automate",
            desc2: "Place all of the business functions under a well planned automated system.",
            title3: "Establish long-term relationship",
            desc3: "Gain customer trust and attention with an automated email system and monthly newsletters.",
        },
    ]
    return (
        <div className="features">
            <div className="container">
                <div className="features-container">
                    <div className="features-header">
                        <h1>FEATURES</h1>
                    </div>
                    <div className="features-bread">
                        <Link href="/">
                            <a className="logo">Home / </a>
                        </Link>
                        <span>Features</span>
                    </div>
                    <div className="features-content">
                        <div className="features-content-container">
                            <div className="d-flex flex-column flex-lg-row">
                                <div className="col-12 col-lg-4">
                                    <div className="">
                                        {cont.map((element, index) => {
                                            return (
                                                <div onClick={() => setCounter(index)} className="d-flex flex-row align-items-center" key={index}>
                                                    <div className="col-2">
                                                        <div className="icon">
                                                            <div className="icon-box">
                                                                {element.icon}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-10">
                                                        <div className={index === counter ? "title-box active" : "title-box"}>
                                                            {element.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <div className="tab-box">
                                        {subcont.map((el, i) => {
                                            if (counter === i) {
                                                return (
                                                    <div key={i}>
                                                        <div className="tab-wrapper">
                                                            <div className="header">
                                                                <span>{el.title}</span>
                                                            </div>
                                                            <div className="body">
                                                                <span>{el.desc}</span>
                                                            </div>
                                                        </div>
                                                        <div className="tab-wrapper">
                                                            <div className="header">
                                                                <span>{el.title1}</span>
                                                            </div>
                                                            <div className="body">
                                                                <span>{el.desc1}</span>
                                                            </div>
                                                        </div>
                                                        <div className="tab-wrapper">
                                                            <div className="header">
                                                                <span>{el.title2}</span>
                                                            </div>
                                                            <div className="body">
                                                                <span>{el.desc2}</span>
                                                            </div>
                                                        </div>
                                                        <div className="tab-wrapper">
                                                            <div className="header">
                                                                <span>{el.title3}</span>
                                                            </div>
                                                            <div className="body">
                                                                <span>{el.desc3}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="features-content-second pt-1">
                        <div className="features-content-second-container">
                            <div className="header-features-content-second-container">
                                <h3>WHO USES LOGIC ENTERPRISES</h3>
                            </div>
                            <div className="d-flex flex-column flex-lg-row">
                                <div className="col-12 col-lg-3">
                                    <div className="card">
                                        <span>Retail stores</span>
                                        <span>startup companies</span>
                                        <span>Professionals</span>
                                        <div className="card-shadow">
                                            <p>Rebrand your product or service </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <div className="card">
                                        <span>Existing businesses</span>
                                        <span>service providers</span>
                                        <span>influencers</span>
                                        <div className="card-shadow">
                                            <p>Improve your brand appearance</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <div className="card">
                                        <span>Service providers</span>
                                        <span>startup companies</span>
                                        <span>ecommerce businesses</span>
                                        <div className="card-shadow">
                                            <p>Boost sales and get more clients</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <div className="card">
                                        <span>Artists</span>
                                        <span>influencers</span>
                                        <span>online stores</span>
                                        <div className="card-shadow">
                                            <p>Take advantage of media productions</p>
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
export default Features;