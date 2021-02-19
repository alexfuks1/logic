import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Quote = () => {

    return (
        <div className="quote">
            <div className="container">
                <div className="quote-container">
                    <div className="quote-header">
                        <h1>QUOTE REQUEST</h1>
                    </div>
                    <div className="quote-bread">
                        <Link href="/">
                            <a className="logo">Home / </a>
                        </Link>
                        <span>Quote</span>
                    </div>
                    <div className="quote-container">
                        <div className="d-flex flex-column quote-sub-header">
                            <span>
                                Please fill in your full name and the services
                                you would like to receive,
                            </span>
                            <span>
                                and we will get
                                back to you with a quote and a price list for
                                the required service.
                            </span>
                        </div>
                        <div className="quote-icon text-center">
                            <img src="./quote.svg" alt="" />
                        </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap check-box">
                        <div className="col-6">
                            <div className="d-flex flex-row align-items-center check-box-wrapper">
                                <input className="check-opption" type="checkbox" value="Brand strategy" />
                                <span>Brand strategy</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="check-box-wrapper">
                                <input className="check-opption" type="checkbox" value="Content" />
                                <span>Content</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="check-box-wrapper">
                                <input className="check-opption" type="checkbox" value="E-commerce" />
                                <span>E-commerce</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="check-box-wrapper">
                                <input className="check-opption" type="checkbox" value="Media productions" />
                                <span>Media productions</span>
                            </div>
                        </div>
                    </div>
                    <div className="send-calendly text-center">
                        <div className="d-flex flex-row align-items-center justify-content-center btn-send-calendly">
                            <a href="https://calendly.com/a-free-quote">
                                <span>SEND BUSINESS INQUIRY</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Quote;