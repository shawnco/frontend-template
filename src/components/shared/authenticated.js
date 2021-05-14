import React, { Component } from 'react';
import cookie from 'react-cookies';
import { withRouter } from 'react-router-dom';

const COOKIE_NAME = 'app-cookie';

class Authenticated extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.checkCookie();
    }

    componentDidUpdate() {
        this.checkCookie();
    }

    checkCookie() {
        const userCookie = cookie.load(COOKIE_NAME);
        const { pathname } = this.props.location;
        if (!userCookie && pathname !== '/login') {
            // re-route to log in
            this.props.history.push('/login');
        }        
    }

    render() {
        const { children } = this.props;
        return children;
    }
}
export default withRouter(Authenticated);