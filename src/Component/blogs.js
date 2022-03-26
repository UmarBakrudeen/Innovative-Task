import React, { Fragment, Component } from 'react'
import classNames from 'classnames';

//Blogs Components
import Left from './Blogs/Left'
import Center from './Blogs/center'
import Right from './Blogs/right'

class blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: "LATEST"
        }
    }

    handleActiveTabs(tabType) {
        this.setState({
            activeTab: tabType,
        })
    }

    render() {

        return (
            <Fragment>
                <div className="blogs__container">
                    <div className="blogs__content">
                        <div className="blogs__wrapper">
                            <div className="blogs__header">
                                <div className="header__tabs">
                                    <div className={classNames('tab', { 'active': this.state.activeTab === ('LATEST') })}
                                        onClick={() => this.handleActiveTabs('LATEST')}>Latest</div>
                                    <div className={classNames('tab', { 'active': this.state.activeTab === "DESIGN" })}
                                        onClick={() => this.handleActiveTabs('DESIGN')}
                                    > Design </div>
                                    <div className={classNames('tab', { 'active': this.state.activeTab === "DEVELOP" })}
                                        onClick={() => this.handleActiveTabs('DEVELOP')}
                                    > Development </div>
                                    <div className={classNames('tab', { 'active': this.state.activeTab === "MANAGE" })}
                                        onClick={() => this.handleActiveTabs('MANAGE')}
                                    > Management </div>
                                    <div className={classNames('tab', { 'active': this.state.activeTab === "MARKET" })}
                                        onClick={() => this.handleActiveTabs('MARKET')}
                                    > Marketing </div>
                                </div>
                            </div>


                            <div className="blogs__action-container">
                                <div className="blogs__ac__content">

                                    {
                                        this.state.activeTab === 'LATEST' ?
                                            <>
                                                <Left />
                                                <Center />
                                                <Right />
                                            </>
                                            : null
                                    }

                                    {
                                        this.state.activeTab === 'DESIGN' ?
                                            <>
                                                <Left />
                                                <Center />
                                                <Right />
                                            </>
                                            : null
                                    }
                                    {
                                        this.state.activeTab === 'DEVELOP' ?
                                            <>
                                                <Left />
                                                <Center />
                                                <Right />
                                            </>
                                            : null
                                    }
                                    {
                                        this.state.activeTab === 'MANAGE' ?
                                            <>
                                                <Left />
                                                <Center />
                                                <Right />
                                            </>
                                            : null
                                    }
                                    {
                                        this.state.activeTab === 'MARKET' ?
                                            <>
                                                <Left />
                                                <Center />
                                                <Right />
                                            </>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default blogs