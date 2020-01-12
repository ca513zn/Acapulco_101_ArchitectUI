import React, { Fragment, Component } from "react";

import Slider from "react-slick";
import bg1 from '../../../assets/utils/images/originals/city.jpg';
import bg2 from '../../../assets/utils/images/originals/citydark.jpg';
import bg3 from '../../../assets/utils/images/originals/citynights.jpg';

import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { required, length, email } from '../../../util/validators';

export default class Login extends Component {

    state = {
        loginForm: {
            email: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, email]
            },
            password: {
                value: '',
                valid: false,
                touched: false,
                validators: [required, length({ min: 5 })]
            },
            formIsValid: false
        }
    };

    inputChangeHandler = ({ target }) => {
        this.setState(prevState => {
            let isValid = true;
            for (const validator of prevState.loginForm[target.name].validators) {
                isValid = isValid && validator(target.value);
            }
            const updatedForm = {
                ...prevState.loginForm,
                [target.name]: {
                    ...prevState.loginForm[target.name],
                    valid: isValid,
                    value: target.value
                }
            };
            let formIsValid = true;
            for (const inputName in updatedForm) {
                formIsValid = formIsValid && updatedForm[inputName].valid;
            }
            return {
                loginForm: updatedForm,
                formIsValid: formIsValid
            };
        });
    };

    inputBlurHandler = input => {
        this.setState(prevState => {
            return {
                loginForm: {
                    ...prevState.loginForm,
                    [input]: {
                        ...prevState.loginForm[input],
                        touched: true
                    }
                }
            };
        });
    };

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            initialSlide: 0,
            autoplay: true,
            adaptiveHeight: true

        };
        return (

            <>
                <div className="h-100">
                    <Row className="h-100 no-gutters">
                        <Col lg="4" className="d-none d-lg-block">
                            <div className="slider-light">
                                <Slider  {...settings}>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                                        <div className="slide-img-bg"
                                            style={{
                                                backgroundImage: 'url(' + bg1 + ')'
                                            }} />
                                        <div className="slider-content">
                                            <h3>Perfect Balance</h3>
                                            <p>
                                                ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified React Boostrap Components and Elements.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                        <div className="slide-img-bg"
                                            style={{
                                                backgroundImage: 'url(' + bg3 + ')'
                                            }} />
                                        <div className="slider-content">
                                            <h3>Scalable, Modular, Consistent</h3>
                                            <p>
                                                Easily exclude the components you don't require. Lightweight, consistent
                                                Bootstrap based styles across all elements and components
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                        <div className="slide-img-bg opacity-6"
                                            style={{
                                                backgroundImage: 'url(' + bg2 + ')'
                                            }} />
                                        <div className="slider-content">
                                            <h3>Complex, but lightweight</h3>
                                            <p>
                                                We've included a lot of components that cover almost all use cases for
                                                any type of application.
                                            </p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                        <Col lg="8" md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
                            <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                                <div className="app-logo" />
                                <h4 className="mb-0">
                                    <div>Welcome back,</div>
                                    <span>Please sign in to your account.</span>
                                </h4>
                                <h6 className="mt-3">
                                    No account?{' '}
                                    <a href="javascript:void(0);" className="text-primary">Sign up now</a>
                                </h6>
                                <Row className="divider" />
                                <div>
                                    <Form
                                        onSubmit={e =>
                                            this.props.onLogin(e, {
                                                email: this.state.loginForm.email.value,
                                                password: this.state.loginForm.password.value
                                            })
                                        }
                                    >
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="email">Email</Label>
                                                    <Input
                                                        name='email'
                                                        id="email"
                                                        type="email"
                                                        control="input"
                                                        onChange={this.inputChangeHandler}
                                                        onBlur={this.inputBlurHandler.bind(this, 'email')}
                                                        value={this.state.loginForm['email'].value}
                                                        valid={this.state.loginForm['email'].valid}
                                                        touched={this.state.loginForm['email'].touched}
                                                        placeholder="Email here..." />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="password">Password</Label>
                                                    <Input
                                                        name='password'
                                                        id="password"
                                                        label="Password"
                                                        type="password"
                                                        control="input"
                                                        onChange={this.inputChangeHandler}
                                                        onBlur={this.inputBlurHandler.bind(this, 'password')}
                                                        value={this.state.loginForm['password'].value}
                                                        valid={this.state.loginForm['password'].valid}
                                                        touched={this.state.loginForm['password'].touched}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup check>
                                            <Input type="checkbox" name="check" id="exampleCheck" />
                                            <Label for="exampleCheck" check>Keep me logged in</Label>
                                        </FormGroup>
                                        <Row className="divider" />
                                        <div className="d-flex align-items-center">
                                            <div className="ml-auto">
                                                <a href="javascript:void(0);" className="btn-lg btn btn-link">Recover
                                                    Password</a>{' '}{' '}
                                                <Button color="primary" size="lg">Login to Dashboard</Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}