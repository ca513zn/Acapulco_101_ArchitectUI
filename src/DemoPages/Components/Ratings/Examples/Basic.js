import React, {Component} from 'react';
import {
    Button,
    Card, CardBody, Col, CardTitle,
    Row
} from 'reactstrap';

import Rating from 'react-rating';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    faStar,
    faThumbsUp,
    faHeart,
    faSmile,
    faBatteryEmpty,
    faBatteryFull

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Ionicon from 'react-ionicons'

class RatingsBasicExample extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({value: undefined});
    }

    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <div>
                    <Row>
                        <Col lg="4">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>FontAwesome Icons</CardTitle>
                                    <Rating
                                        initialRating={2} stop={10}
                                        emptySymbol={<span className="text-muted opacity-3"><FontAwesomeIcon
                                            icon={faStar}/></span>}
                                        fullSymbol={<span className="text-primary"><FontAwesomeIcon
                                            icon={faStar}/></span>}
                                    />
                                    <div className="divider"/>
                                    <Rating stop={8} initialRating={4}
                                            emptySymbol={<span className="text-muted mr-1 opacity-2"><FontAwesomeIcon
                                                size="2x" icon={faThumbsUp}/></span>}
                                            fullSymbol={<span className="text-success mr-1"><FontAwesomeIcon size="2x"
                                                                                                             icon={faThumbsUp}/></span>}
                                    />
                                    <div className="divider"/>
                                    <Rating stop={5} initialRating={1}
                                            emptySymbol={<span className="text-warning mr-1 opacity-2"><FontAwesomeIcon
                                                size="3x" icon={faHeart}/></span>}
                                            fullSymbol={<span className="text-warning mr-1"><FontAwesomeIcon size="3x"
                                                                                                             icon={faHeart}/></span>}
                                    />
                                    <div className="divider"/>
                                    <Rating stop={6}
                                            emptySymbol={<span className="text-danger mr-1 opacity-3"><FontAwesomeIcon
                                                size="4x" icon={faSmile}/></span>}
                                            fullSymbol={<span className="text-focus mr-1"><FontAwesomeIcon size="4x"
                                                                                                           icon={faSmile}/></span>}
                                    />
                                    <div className="divider"/>
                                    <Rating stop={6}
                                            emptySymbol={<span className="text-primary mr-1 opacity-3"><FontAwesomeIcon
                                                size="3x" icon={faBatteryEmpty}/></span>}
                                            fullSymbol={<span className="text-success mr-1"><FontAwesomeIcon size="3x"
                                                                                                           icon={faBatteryFull}/></span>}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Basic</CardTitle>
                                    <Rating {...this.props} initialRating={this.state.value}/>
                                    <div className="divider"/>
                                    <div className="text-center">
                                        <Button color="primary" onClick={this.handleClick}>Reset</Button>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Readonly</CardTitle>
                                    <Rating
                                        initialRating={3}
                                        readonly
                                    />
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Fractional Ratings</CardTitle>
                                    <Rating
                                        initialRating={2.5}
                                        readonly
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Custom each symbol</CardTitle>
                                    <div className="fsize-4">
                                        <Rating
                                            stop={4}
                                            emptySymbol={[
                                                'pe-7s-star text-focus opacity-5 mr-1',
                                                'pe-7s-speaker text-focus opacity-5 mr-1',
                                                'pe-7s-signal text-focus opacity-5 mr-1',
                                                'pe-7s-like2 text-focus opacity-5 mr-1'
                                            ]}
                                            fullSymbol={[
                                                'pe-7s-star text-success mr-1',
                                                'pe-7s-speaker text-warning mr-1',
                                                'pe-7s-signal text-warning mr-1',
                                                'pe-7s-like2 text-danger mr-1'
                                            ]}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Ion Icons</CardTitle>
                                    <Rating
                                        initialRating={2} stop={10}
                                        emptySymbol={
                                            <span className="opacity-3">
                                                <Ionicon color="#3f6ad8" fontSize="2rem" icon="ios-film" beat={true}/>
                                            </span>
                                        }
                                        fullSymbol={
                                            <span>
                                                <Ionicon color="#3f6ad8" fontSize="2rem" icon="ios-film" beat={true}/>
                                            </span>
                                        }
                                    />
                                    <div className="divider"/>
                                    <Rating
                                        initialRating={2} stop={10}
                                        emptySymbol={
                                            <span className="opacity-5">
                                                <Ionicon color="#4eaf07" fontSize="2.2rem" icon="ios-star" rotate={true}/>
                                            </span>
                                        }
                                        fullSymbol={
                                            <span>
                                                <Ionicon color="#4eaf07" fontSize="2.2rem" icon="ios-star" rotate={true}/>
                                            </span>
                                        }
                                    />
                                    <div className="divider"/>
                                    <Rating
                                        initialRating={2} stop={10}
                                        emptySymbol={
                                            <span className="opacity-4">
                                                <Ionicon color="#f7b924" fontSize="2.6rem" icon="ios-thumbs-up-outline"/>
                                            </span>
                                        }
                                        fullSymbol={
                                            <span>
                                                <Ionicon color="#f7b924" fontSize="2.6rem" icon="ios-thumbs-up-outline"/>
                                            </span>
                                        }
                                    />
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default RatingsBasicExample;