import React, { Fragment } from 'react'

//UI
import './style.scss'

//Packages
import classNames from 'classnames'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenmenu: false
        }
    }

    openMenu() {
        const { isOpenmenu } = this.state;
        this.setState({
            isOpenmenu: (!isOpenmenu)
        })
    }
    render() {
        const { isOpenmenu } = this.state;

        return (
            <Fragment>
                <div className="header__container">
                    <div className="header__wrapper">
                        {/* bars */}
                        <div className={classNames('sidenav-toggle', { 'isOpenmenu': isOpenmenu })} onClick={() => { this.openMenu() }}>
                            <div className="bars">
                                <div></div>
                            </div>
                        </div>
                        {/* Title */}
                        <div className="title">
                            <h6> This is where we tell stories </h6>
                        </div>
                        <div className="contact">
                            <button className='btn-contact'> Contact Us </button>
                        </div>
                    </div>
                </div>

                {
                    isOpenmenu ?
                        <div className="megamenu__container">
                            <div className="megamenu__content">
                                <ul>
                                    <li><a href="#"> Home </a></li>
                                    <li><a href="#"> Listing </a></li>
                                    <li><a href="#"> About </a></li>
                                    <li><a href="#"> Contact </a></li>
                                </ul>
                            </div>
                        </div>
                        : null
                }
            </Fragment>
        )
    }
}

export default Header