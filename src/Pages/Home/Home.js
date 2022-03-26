import React, { Fragment } from 'react'

//UI -- style Sheet
import './Home.scss'
//Components
import Header from '../../Component/Header'
import Blogs from '../../Component/blogs'
import Footer from '../../Component/Footer'

function Home() {
    return (
        <Fragment>
            <div className="home__container">
                <div className="home__content">
                    <Header />
                    <Blogs />
                    <Footer />
                </div>
            </div>
        </Fragment>
    )
}

export default Home