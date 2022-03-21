import React, { Component } from 'react'
import logo from 'E:/Ethical Hacking - Programming/Web Development/React Course/newsapp/src/components/logo192.png'
import PropTypes from 'prop-types'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" width="40" height="40" className="d-inline-block align-text-center mx-2"/>
                                <strong>Daily Digest</strong>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar


