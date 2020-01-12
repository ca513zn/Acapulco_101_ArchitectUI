import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';

import {Cropper} from 'react-image-cropper'

import PageTitle from '../../../Layout/AppMain/PageTitle';

import DemoImg from '../../../assets/utils/images/originals/fence-small.jpg';

class ImageCropExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgSrc: DemoImg,
            image: '',
            imageLoaded: false,
            image1: '',
            imageL1oaded: false,
            image2: '',
            image2Loaded: false,
            image3: '',
            image3Loaded: false,
            image4: '',
            image4Loaded: false,
            image4BeforeLoaded: false,
            image4Values: ''
        }
    }

    handleImageLoaded(state) {
        this.setState({
            [state + 'Loaded']: true
        })
    }

    handleBeforeImageLoad(state) {
        this.setState({
            [state + 'BeforeLoaded']: true
        })
    }

    handleClick(state) {
        let node = this[state]
        this.setState({
            [state]: node.crop()
        })
    }

    handleChange(state, values) {
        this.setState({
            [state + 'Values']: values
        })
    }

    handleGetValues(state) {
        let node = this[state]
        this.setState({
            [state + 'Values']: node.values()
        })
    }

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Image Crop"
                    subheading="You can easily crop and edit images with this React plugin."
                    icon="pe-7s-signal icon-gradient bg-malibu-beach"
                />
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Row>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Basic</CardTitle>
                                    <Cropper src={this.state.imgSrc}
                                             ref={ref => {
                                                 this.image = ref
                                             }}
                                             onImgLoad={() => this.handleImageLoaded('image')}
                                    />
                                    <div className="divider"/>
                                    <div className="text-center">
                                        {
                                            this.state.imageLoaded
                                                ?
                                                <div className="text-center">
                                                    <Button color="primary"
                                                            onClick={() => this.handleClick('image')}
                                                    >
                                                        Crop Selection
                                                    </Button>
                                                </div>
                                                : null
                                        }

                                        {
                                            this.state.image
                                                ?
                                                <div>
                                                    <div className="divider"/>
                                                    <div>
                                                        <h6>Cropped Result</h6>
                                                    </div>
                                                    <img
                                                        className="after-img rounded"
                                                        src={this.state.image}
                                                        alt=""
                                                    />
                                                </div>
                                                : null
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Predefined start X, Y origins</CardTitle>
                                    <Cropper
                                        src={this.state.imgSrc}
                                        originX={100}
                                        originY={100}
                                        ref={ref => {
                                            this.image1 = ref
                                        }}
                                        onImgLoad={() => this.handleImageLoaded('image1')}
                                    />
                                    <div className="divider"/>
                                    <div className="text-center">
                                        {
                                            this.state.image1Loaded
                                                ?
                                                <div className="text-center">
                                                    <Button color="primary"
                                                            onClick={() => this.handleClick('image1')}
                                                    >
                                                        Crop Selection
                                                    </Button>
                                                </div>
                                                : null
                                        }
                                        {
                                            this.state.image1
                                                ?
                                                <div>
                                                    <div className="divider"/>
                                                    <div>
                                                        <h6>Cropped Result</h6>
                                                    </div>
                                                    <img
                                                        className="after-img rounded"
                                                        src={this.state.image1}
                                                        alt=""
                                                    />
                                                </div>
                                                : null
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Disabled</CardTitle>
                                    <Cropper
                                        src={this.state.imgSrc}
                                        ref={ref => {
                                            this.image3 = ref
                                        }}
                                        disabled
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Predefined Ratio</CardTitle>
                                    <Cropper
                                        src={this.state.imgSrc}
                                        ratio={16 / 9}
                                        width={300}
                                        ref={ref => {
                                            this.image2 = ref
                                        }}
                                        onImgLoad={() => this.handleImageLoaded('image2')}
                                    />
                                    <div className="divider"/>
                                    {
                                        this.state.image2Loaded
                                            ?
                                            <div className="text-center">
                                                <Button color="primary"
                                                        onClick={() => this.handleClick('image2')}
                                                >
                                                    Crop Selection
                                                </Button>
                                            </div>
                                            : null
                                    }

                                    {
                                        this.state.image2
                                            ?
                                            <div>
                                                <div className="divider"/>
                                                <div>
                                                    <h6>Cropped Result</h6>
                                                </div>
                                                <img
                                                    className="after-img rounded"
                                                    src={this.state.image2}
                                                    alt=""
                                                />
                                            </div>
                                            : null
                                    }
                                </CardBody>
                            </Card>
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Custom Styles</CardTitle>
                                    <Cropper
                                        src={this.state.imgSrc}
                                        width={200}
                                        height={500}
                                        originX={200}
                                        originY={50}
                                        fixedRatio={false}
                                        allowNewSelection={false}
                                        onChange={values => this.handleChange('image4', values)}
                                        styles={{
                                            source_img: {
                                                WebkitFilter: 'blur(3.5px)',
                                                filter: 'blur(3.5px)'
                                            },
                                            modal: {
                                                opacity: 0.5,
                                                backgroundColor: '#fff'
                                            },
                                            dotInner: {
                                                borderColor: '#ff0000'
                                            },
                                            dotInnerCenterVertical: {
                                                backgroundColor: '#ff0000'
                                            },
                                            dotInnerCenterHorizontal: {
                                                backgroundColor: '#ff0000'
                                            }
                                        }}
                                        ref={ref => {
                                            this.image4 = ref
                                        }}
                                        onImgLoad={() => this.handleImageLoaded('image4')}
                                        beforeImgLoad={() => this.handleBeforeImageLoad('image4')}
                                    />
                                    <div className="divider"/>
                                    <div className="text-center">
                                        {
                                            this.state.image4Loaded
                                                ? <Button color="primary"
                                                          onClick={() => this.handleClick('image4')}
                                                >
                                                    Crop Selection
                                                </Button>
                                                : null
                                        }
                                        {
                                            this.state.image4
                                                ?
                                                <div>
                                                    <div className="divider"/>
                                                    <div>
                                                        <h6>Cropped Result</h6>
                                                    </div>
                                                    <img
                                                        className="after-img rounded"
                                                        src={this.state.image4}
                                                        alt=""
                                                    />
                                                </div>
                                                : null
                                        }
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
};

export default ImageCropExample;