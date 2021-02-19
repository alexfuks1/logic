import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Portfolio = () => {
    const [tabsCounter, setTabsCounter] = useState(0);
    const portTabs = [
        { title: "Branding", icon: <img src="./branding.svg" alt="" /> },
        { title: "Graphic", icon: <img src="./graphic-design.svg" alt="" /> },
        { title: "Web Design", icon: <img src="./webdesign.svg" alt="" /> },
        { title: "Web Developing", icon: <img src="./programming.svg" alt="" /> },
    ]
    const portTabsContent = [
        {
            title: "Branding",

        },
        {
            title: "Graphic",

        },
        {
            title: "Web Design",

        },
        {
            title: "Web Developing",
            icon:<img src="/portweb1.jpeg" alt=""/>,
            icon1:<img src="/portweb2.jpeg" alt=""/>,
            icon2:<img src="/portweb3.jpeg" alt=""/>
        },
    ]
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio-container">
                    <div className="portfolio-header">
                        <h1>PORTFOLIO</h1>
                    </div>
                    <div className="portfolio-bread">
                        <Link href="/">
                            <a className="logo">Home / </a>
                        </Link>
                        <span>Portfolio</span>
                    </div>
                    <div className="portfolio-content">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row align-items-center flex-wrap tab-header">
                                {portTabs.map((element, index) => {
                                    return (
                                        <div onClick={() => setTabsCounter(index)} className="tab-box col-6 col-lg-3 border-none" key={index}>
                                            <span>{element.title}</span>
                                            <div className="tab-icon-box">
                                                {element.icon}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="tab-content">
                                {portTabsContent.map((el, i) => {
                                    if (tabsCounter === i) {
                                        return (
                                            <div key={i} className="tab-content-box">
                                                <div className="tab-content-header">
                                                    <h1>{el.title}</h1>
                                                </div>
                                                <div className="d-flex flex-column flex-lg-row tab-content">
                                                    <div className="col-12 col-lg-4">
                                                        {el.icon}
                                                    </div>
                                                    <div className="col-12 col-lg-4">
                                                        {el.icon1}
                                                    </div>
                                                    <div className="col-12 col-lg-4">
                                                        {el.icon2}
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
        </div>
    )
}
export default Portfolio;