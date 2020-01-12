import { BrowserRouter as Switch, Router, Route, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, Fragment, Component } from 'react';
import Loader from 'react-loaders'

import {
    ToastContainer,
} from 'react-toastify';

const Components = lazy(() => import('../../DemoPages/Components'));
const Login = lazy(() => import('../../DemoPages/UserPages/Login'));


class AppMain extends Component {

    state = {
        isAuth: false,
        token: null,
        userId: null,
        authLoading: false,
        error: null
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        const expiryDate = localStorage.getItem('expiryDate');
        if (!token || !expiryDate) {
            return;
        }
        if (new Date(expiryDate) <= new Date()) {
            this.logoutHandler();
            return;
        }
        const userId = localStorage.getItem('userId');
        const remainingMilliseconds =
            new Date(expiryDate).getTime() - new Date().getTime();
        this.setState({ isAuth: true, token: token, userId: userId });
        this.setAutoLogout(remainingMilliseconds);
    }


    loginHandler = (event, authData) => {
        event.preventDefault();
        this.setState({ authLoading: true });
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: authData.email,
                password: authData.password
            })
        })
            .then(res => {
                if (res.status === 422) {
                    throw new Error('Validation failed.');
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log('Error!');
                    throw new Error('Could not authenticate you!');
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                this.setState({
                    isAuth: true,
                    token: resData.token,
                    authLoading: false,
                    userId: resData.userId
                });
                localStorage.setItem('token', resData.token);
                localStorage.setItem('userId', resData.userId);
                const remainingMilliseconds = 60 * 60 * 1000;
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                );
                localStorage.setItem('expiryDate', expiryDate.toISOString());
                this.setAutoLogout(remainingMilliseconds);
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    isAuth: false,
                    authLoading: false,
                    error: err
                });
            });
    };

    setAutoLogout = milliseconds => {
        setTimeout(() => {
            this.logoutHandler();
        }, milliseconds);
    };

    logoutHandler = () => {
        this.setState({ isAuth: false, token: null });
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
    };

    render() {
        let routes = (
            <Switch>
                <Suspense fallback={
                    <div className="loader-container">
                        <div className="loader-container-inner">
                            <div className="text-center">
                                <Loader type="ball-grid-beat" />
                            </div>
                            <h6 className="mt-3">
                                Please wait while we load all the Dashboards examples
                            <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small>
                            </h6>
                        </div>
                    </div>
                }>
                    <Route path="/login/"
                        render={props => (
                            <Login
                                {...props}
                                onLogin={this.loginHandler}
                                loading={this.state.authLoading}
                            />
                        )} />
                </Suspense>
                <Route exact path="/" render={() => (
                    <Redirect to="/login/" />
                )} />
                <ToastContainer />
            </Switch>
        );
        if (this.state.isAuth) {
            routes = (
                <Switch>
                    {/* Dashboards */}
                    < Suspense fallback={
                        < div className="loader-container" >
                            <div className="loader-container-inner">
                                <div className="text-center">
                                    <Loader type="ball-pulse-rise" />
                                </div>
                                <h6 className="mt-5">
                                    Please wait while we load all the Components examples
                                <small>Because this is a demonstration we load at once all the Components examples. This wouldn't happen in a real live app!</small>
                                </h6>
                            </div>
                        </div >
                    }>
                        <Route
                            path="/components"
                            exact
                            render={props => (
                                <Components
                                    {...props}
                                    userId={this.state.userId}
                                    token={this.state.token} />
                            )}
                        />
                    </Suspense >
                    <Route exact path="/" render={() => (
                        <Redirect to="/components" />
                    )} />
                    <ToastContainer />

                </Switch>
            );
        }

        return (
            <Fragment>
                {routes}
            </Fragment >
        )
    }
};
export default AppMain;