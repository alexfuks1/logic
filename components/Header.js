import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const MobMenu = params => {
    let toggleMob = params.toggleMob;
    let togglerMenu = params.togglerMenu;
    return (
        <div className={toggleMob ? "mon-menu active" : "mon-menu"}>
            <div className="d-flex flex-column align-items-center justify-content-center mon-menu-container">
                <div className="mob-links-box">
                    <Link href="/">
                        <a onClick={() => togglerMenu()}>HOME</a>
                    </Link>
                </div>
                <div className="mob-links-box">
                    <Link href="/features">
                        <a onClick={() => togglerMenu()}>FEATURES</a>
                    </Link>
                </div>
                <div className="mob-links-box">
                    <Link href="/portfolio">
                        <a onClick={() => togglerMenu()}>PORTFOLIO</a>
                    </Link>
                </div>
                <div className="mob-links-box">
                    <Link href="/about">
                        <a onClick={() => togglerMenu()}>ABOUT US</a>
                    </Link>
                </div>
                <div className="mob-links-box">
                    <Link href="/contact">
                        <a onClick={() => togglerMenu()}>CONTACT</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    const [toggleMob, setToggleMob] = useState(false);
    const togglerMenu = () => {
        setToggleMob(!toggleMob);
    }
    return (
        <div className="container-fluid">
            <div className="d-none d-lg-block header-desk">
                <div className="d-flex flex-row align-items-center">
                    <div className="col-2 d-flex flex-row align-items-center justify-content-center logo-box">
                        <Image
                            src="/mainlogo.png"
                            alt="Picture of the author"
                            layout="fixed"
                            width={30}
                            height={30}
                        />
                        <Link href="/">
                            <a className="logo">LOGIC ENTERPRISES</a>
                        </Link>
                    </div>
                    <div className="col-1 text-center link-box">
                        <Link href="/features">
                            <a>FEATURES</a>
                        </Link>
                    </div>
                    <div className="col-1 text-center link-box">
                        <Link href="/portfolio">
                            <a>PORTFOLIO</a>
                        </Link>
                    </div>
                    <div className="col-1 text-center link-box">
                        <Link href="/about">
                            <a>ABOUT US</a>
                        </Link>
                    </div>
                    <div className="col-1 text-center link-box">
                        <Link href="/contact">
                            <a>CONTACT</a>
                        </Link>
                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-2 text-center get-stared">
                        <Link href="/quote">
                            <a className="logo">GET STARTED FREE</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="d-block d-lg-none position-relative">
                <div className="col-12 header-container border position-fixed bottom-0">
                    <div className="d-flex flex-row align-items-center">
                        <div className="col-2">
                            <div className="quote-box d-flex flex-column align-items-center justify-content-center" onClick={() => setToggleMob(false)}>
                                <Image src="/quote-req.svg" layout="fixed" width={35} height={35} />
                                <Link href="/quote">
                                    <a>
                                        <span>QUOTE</span>

                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="quote-box d-flex flex-column align-items-center justify-content-center">
                                <Image src="/whatsapp.svg" layout="fixed" width={35} height={35} />
                                <a href="https://wa.me/17027688773">
                                    <span>WHATSAPP</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mob-logo-box">
                                <div className={toggleMob ? "mob-logo-box-circle active" : "mob-logo-box-circle"} onClick={togglerMenu}>
                                    <Image
                                        className={toggleMob ? "mob-icon active" : "mob-icon"}
                                        src="/mainlogo.png"
                                        alt="Picture of the author"
                                        layout="fixed"
                                        width={65}
                                        height={65}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-2" >
                            <div className="quote-box d-flex flex-column align-items-center justify-content-center">
                                <Image src="/phone-mob.svg" layout="fixed" width={35} height={35} />
                                <a href="tel:+19548848284⁩">
                                    <span>CONTACT</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-2" onClick={() => setToggleMob(false)}>
                            <div className="quote-box d-flex flex-column align-items-center justify-content-center">
                                <Image src="/home.svg" layout="fixed" width={35} height={35} />
                                <Link href="/">
                                    <a>
                                        <span>HOME</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <MobMenu togglerMenu={togglerMenu} toggleMob={toggleMob} />
            </div>
        </div>
    )
}
export default Header;