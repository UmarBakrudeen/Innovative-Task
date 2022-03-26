import React from 'react'

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer__content">

                <div className="logo">
                    <div className="footer__logo"> Blog Website </div>
                    {/* <img src="https://www.pearlcons.com/blog/wp-content/uploads/2021/08/PEARL-LOGO.jpeg_006e00640_14@2x.png" alt="" /> */}
                </div>

                <div className="footer__links">
                    <ul>
                        <li><a href="#"> Home </a></li>
                        <li><a href="#"> Listing </a></li>
                        <li><a href="#"> About </a></li>
                        <li><a href="#"> Contact </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer