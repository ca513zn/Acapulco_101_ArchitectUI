import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitleAlt3 from '../../../Layout/AppMain/PageTitleAlt3';

import Circle from 'react-circle';
import Chart from 'react-apexcharts'

import bg1 from '../../../assets/utils/images/dropdown-header/abstract1.jpg';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';

import classnames from 'classnames';

import {
    Row, Col,
    Alert,
    Button,
    CardHeader,
    Table,
    ButtonGroup,
    Nav,
    NavItem,
    NavLink,
    Popover,
    PopoverBody,
    Progress,
    Card,
    CardBody,
    DropdownItem, DropdownToggle, DropdownMenu,
    UncontrolledButtonDropdown, CardFooter
} from 'reactstrap';

import Column from './Examples/Column';
import Bar2 from './Examples/Bar';
import Area from './Examples/Area';
import Mixed from './Examples/Mixed';

import {
    faAngleUp,
    faAngleDown,
    faQuestionCircle,
    faBusinessTime,
    faCog
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class MinimalDashboard1 extends Component {

    constructor(props) {
        super(props);

        this.togglePop1 = this.togglePop1.bind(this);

        this.state = {
            visible: true,
            popoverOpen1: false,

            optionsRadial: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                    toolbar: {
                        show: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#fff',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '67%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            showOn: 'always',
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '17px'
                            },
                            value: {
                                formatter: function(val) {
                                    return parseInt(val);
                                },
                                color: '#111',
                                fontSize: '36px',
                                show: true,
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#ABE5A1'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Percent'],

            },
            seriesRadial: [76],
        }
    }

    togglePop1() {
        this.setState({
            popoverOpen1: !this.state.popoverOpen1
        });
    }

    onDismiss() {
        this.setState({visible: false});
    }

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <PageTitleAlt3
                        heading="Minimal Dashboards"
                        subheading="This is an example dashboard created using build-in elements and components."
                        icon="lnr-apartment opacity-6"
                    />
                    <Alert className="mbg-3" color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                            <span className="pr-2">
                                <FontAwesomeIcon icon={faQuestionCircle}/>
                            </span>
                        This dashboard example was created using only the available elements and components, no additional SCSS was written!
                    </Alert>
                    <Row>
                        <Col md="6" lg="3">
                            <Card className="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-primary border-primary">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                        <div className="widget-title opacity-5 text-uppercase">
                                            New accounts
                                        </div>
                                        <div className="widget-numbers mt-2 fsize-4 mb-0 w-100">
                                            <div className="widget-chart-flex align-items-center">
                                                <div>
                                                    <span className="opacity-10 text-success pr-2">
                                                        <FontAwesomeIcon icon={faAngleUp}/>
                                                    </span>
                                                    234
                                                    <small className="opacity-5 pl-1">%</small>
                                                </div>
                                                <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                    <div className="ml-auto">
                                                        <Circle
                                                            animate={true} // Boolean: Animated/Static progress
                                                            animationDuration="10s" // String: Length of animation
                                                            responsive={false} // Boolean: Make SVG adapt to parent size
                                                            size="46" // String: Defines the size of the circle.
                                                            lineWidth="30" // String: Defines the thickness of the circle's stroke.
                                                            progress="56" // String: Update to change the progress and percentage.
                                                            progressColor="var(--primary)" // String: Color of "progress" portion of circle.
                                                            bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                                                            textColor="#6b778c" // String: Color of percentage text color.
                                                            textStyle={{
                                                                fontSize: '6rem' // CSSProperties: Custom styling for percentage.
                                                            }}
                                                            percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
                                                            roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                            showPercentage={true} // Boolean: Show/hide percentage.
                                                            showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="3">
                            <Card className="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-danger border-danger">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                        <div className="widget-title opacity-5 text-uppercase">
                                            Total Expenses
                                        </div>
                                        <div className="widget-numbers mt-2 fsize-4 mb-0 w-100">
                                            <div className="widget-chart-flex align-items-center">
                                                <div>
                                                    <span className="opacity-10 text-danger pr-2">
                                                        <FontAwesomeIcon icon={faAngleDown}/>
                                                    </span>
                                                    71
                                                    <small className="opacity-5 pl-1">%</small>
                                                </div>
                                                <div className="ml-auto">
                                                    <Circle
                                                        animate={true} // Boolean: Animated/Static progress
                                                        animationDuration="10s" // String: Length of animation
                                                        responsive={false} // Boolean: Make SVG adapt to parent size
                                                        size="46" // String: Defines the size of the circle.
                                                        lineWidth="30" // String: Defines the thickness of the circle's stroke.
                                                        progress="41" // String: Update to change the progress and percentage.
                                                        progressColor="var(--danger)" // String: Color of "progress" portion of circle.
                                                        bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                                                        textColor="#6b778c" // String: Color of percentage text color.
                                                        textStyle={{
                                                            fontSize: '6rem' // CSSProperties: Custom styling for percentage.
                                                        }}
                                                        percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
                                                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                        showPercentage={true} // Boolean: Show/hide percentage.
                                                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="3">
                            <Card className="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-warning border-warning">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                        <div className="widget-title opacity-5 text-uppercase">
                                            Company Value
                                        </div>
                                        <div className="widget-numbers mt-2 fsize-4 mb-0 w-100">
                                            <div className="widget-chart-flex align-items-center">
                                                <div>
                                                    <small className="opacity-5 pr-1">$</small>
                                                    1,45M
                                                </div>
                                                <div className="ml-auto">
                                                    <Circle
                                                        animate={true} // Boolean: Animated/Static progress
                                                        animationDuration="10s" // String: Length of animation
                                                        responsive={false} // Boolean: Make SVG adapt to parent size
                                                        size="46" // String: Defines the size of the circle.
                                                        lineWidth="30" // String: Defines the thickness of the circle's stroke.
                                                        progress="71" // String: Update to change the progress and percentage.
                                                        progressColor="var(--warning)" // String: Color of "progress" portion of circle.
                                                        bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                                                        textColor="#6b778c" // String: Color of percentage text color.
                                                        textStyle={{
                                                            fontSize: '6rem' // CSSProperties: Custom styling for percentage.
                                                        }}
                                                        percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
                                                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                        showPercentage={true} // Boolean: Show/hide percentage.
                                                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="3">
                            <Card className="widget-chart widget-chart2 text-left mb-3 card-btm-border card-shadow-success border-success">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                        <div className="widget-title opacity-5 text-uppercase">
                                            New Employees
                                        </div>
                                        <div className="widget-numbers mt-2 fsize-4 mb-0 w-100">
                                            <div className="widget-chart-flex align-items-center">
                                                <div>
                                                    <small className="text-success pr-1">+</small>
                                                    34
                                                    <small className="opacity-5 pl-1">hires</small>
                                                </div>
                                                <div className="ml-auto">
                                                    <Circle
                                                        animate={true} // Boolean: Animated/Static progress
                                                        animationDuration="10s" // String: Length of animation
                                                        responsive={false} // Boolean: Make SVG adapt to parent size
                                                        size="46" // String: Defines the size of the circle.
                                                        lineWidth="30" // String: Defines the thickness of the circle's stroke.
                                                        progress="85" // String: Update to change the progress and percentage.
                                                        progressColor="var(--success)" // String: Color of "progress" portion of circle.
                                                        bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                                                        textColor="#6b778c" // String: Color of percentage text color.
                                                        textStyle={{
                                                            fontSize: '6rem' // CSSProperties: Custom styling for percentage.
                                                        }}
                                                        percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
                                                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                        showPercentage={true} // Boolean: Show/hide percentage.
                                                        showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="7" lg="8">
                            <Card className="mb-3">
                                <CardHeader className="card-header-tab">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        Traffic Sources
                                    </div>

                                    <div className="btn-actions-pane-right text-capitalize">
                                        <Button color="warning">Actions</Button>
                                    </div>
                                </CardHeader>
                                <CardBody className="pt-0">
                                    <Mixed/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="12" md="5" lg="4">
                            <Card className="mb-3">
                                <CardHeader className="card-header-tab">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        Income
                                    </div>
                                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle className="btn-icon btn-icon-only" color="link">
                                                <i className="lnr-cog btn-icon-wrapper"/>
                                            </DropdownToggle>
                                            <DropdownMenu right className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link">
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem>
                                                    <i className="dropdown-icon lnr-inbox"> </i>
                                                    <span>Menus</span>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="dropdown-icon lnr-file-empty"> </i>
                                                    <span>Settings</span>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="dropdown-icon lnr-book"> </i>
                                                    <span>Actions</span>
                                                </DropdownItem>
                                                <DropdownItem divider/>
                                                <div className="p-1 text-right">
                                                    <Button className="mr-2 btn-shadow btn-sm" color="link">View
                                                        Details</Button>
                                                    <Button className="mr-2 btn-shadow btn-sm"
                                                            color="primary">Action</Button>
                                                </div>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </div>
                                </CardHeader>
                                <CardBody className="p-0">
                                    <Chart options={this.state.optionsRadial} series={this.state.seriesRadial} type="radialBar" height={270}/>
                                    <div className="widget-content pt-0 w-100">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2 fsize-1">
                                                    <div className="widget-numbers mt-0 fsize-3 text-warning">
                                                        32%
                                                    </div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <Progress
                                                        className="progress-bar-xs"
                                                        color="warning"
                                                        value="32"/>
                                                </div>
                                            </div>
                                            <div className="widget-content-left fsize-1">
                                                <div className="text-muted opacity-6">
                                                    Spendings Target
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6" lg="3">
                            <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                        <h6 className="widget-subheading">
                                            Income
                                        </h6>
                                        <div className="widget-chart-flex">
                                            <div className="widget-numbers mb-0 w-100">
                                                <div className="widget-chart-flex">
                                                    <div className="fsize-4">
                                                        <small className="opacity-5">$</small>
                                                        5,456
                                                    </div>
                                                    <div className="ml-auto">
                                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                                <span className="text-success pl-2">
                                                                    +14%
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="3">
                            <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                        <h6 className="widget-subheading">
                                            Expenses
                                        </h6>
                                        <div className="widget-chart-flex">
                                            <div className="widget-numbers mb-0 w-100">
                                                <div className="widget-chart-flex">
                                                    <div className="fsize-4 text-danger">
                                                        <small className="opacity-5 text-muted">$</small>
                                                        4,764
                                                    </div>
                                                    <div className="ml-auto">
                                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                                <span className="text-danger pl-2">
                                                                    <span className="pr-1">
                                                                        <FontAwesomeIcon icon={faAngleUp}/>
                                                                    </span>
                                                                    8%
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="3">
                            <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                        <h6 className="widget-subheading">
                                            Spendings
                                        </h6>
                                        <div className="widget-chart-flex">
                                            <div className="widget-numbers mb-0 w-100">
                                                <div className="widget-chart-flex">
                                                    <div className="fsize-4">
                                                            <span className="text-success pr-2">
                                                                <FontAwesomeIcon icon={faAngleDown}/>
                                                            </span>
                                                        <small className="opacity-5">$</small>
                                                        1.5M
                                                    </div>
                                                    <div className="ml-auto">
                                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                                <span className="text-success pl-2">
                                                                    <span className="pr-1">
                                                                        <FontAwesomeIcon icon={faAngleDown}/>
                                                                    </span>
                                                                    15%
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="3">
                            <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
                                <div className="widget-chat-wrapper-outer">
                                    <div className="widget-chart-content">
                                        <h6 className="widget-subheading">
                                            Totals
                                        </h6>
                                        <div className="widget-chart-flex">
                                            <div className="widget-numbers mb-0 w-100">
                                                <div className="widget-chart-flex">
                                                    <div className="fsize-4">
                                                        <small className="opacity-5">$</small>
                                                        31,564
                                                    </div>
                                                    <div className="ml-auto">
                                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                                <span className="text-warning pl-2">
                                                                    +76%
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <CardHeader className="mbg-3 h-auto pl-0 pr-0 bg-transparent no-border">
                        <div className="card-header-title fsize-2 text-capitalize font-weight-normal">
                            Target Section
                        </div>

                        <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                            <Button size="sm" color="link">View Details</Button>
                        </div>
                    </CardHeader>

                    <Row>
                        <Col md="6" lg="3">
                            <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
                                <div className="widget-content p-0 w-100">
                                    <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left pr-2 fsize-1">
                                                <div className="widget-numbers mt-0 fsize-3 text-danger">
                                                    71%
                                                </div>
                                            </div>
                                            <div className="widget-content-right w-100">
                                                <Progress
                                                    className="progress-bar-xs"
                                                    color="danger"
                                                    value="71"/>
                                            </div>
                                        </div>
                                        <div className="widget-content-left fsize-1">
                                            <div className="text-muted opacity-6">
                                                Income Target
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="3">
                            <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
                                <div className="widget-content p-0 w-100">
                                    <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left pr-2 fsize-1">
                                                <div className="widget-numbers mt-0 fsize-3 text-success">
                                                    54%
                                                </div>
                                            </div>
                                            <div className="widget-content-right w-100">
                                                <Progress
                                                    className="progress-bar-xs"
                                                    color="success"
                                                    value="54"/>
                                            </div>
                                        </div>
                                        <div className="widget-content-left fsize-1">
                                            <div className="text-muted opacity-6">
                                                Expenses Target
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="3">
                            <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
                                <div className="widget-content p-0 w-100">
                                    <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left pr-2 fsize-1">
                                                <div className="widget-numbers mt-0 fsize-3 text-warning">
                                                    32%
                                                </div>
                                            </div>
                                            <div className="widget-content-right w-100">
                                                <Progress
                                                    className="progress-bar-xs"
                                                    color="warning"
                                                    value="32"/>
                                            </div>
                                        </div>
                                        <div className="widget-content-left fsize-1">
                                            <div className="text-muted opacity-6">
                                                Spendings Target
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="3">
                            <Card className="card-shadow-primary mb-3 widget-chart widget-chart2 text-left">
                                <div className="widget-content p-0 w-100">
                                    <div className="widget-content-outer">
                                        <div className="widget-content-wrapper">
                                            <div className="widget-content-left pr-2 fsize-1">
                                                <div className="widget-numbers mt-0 fsize-3 text-info">
                                                    89%
                                                </div>
                                            </div>
                                            <div className="widget-content-right w-100">
                                                <Progress
                                                    className="progress-bar-xs"
                                                    color="info"
                                                    value="89"/>
                                            </div>
                                        </div>
                                        <div className="widget-content-left fsize-1">
                                            <div className="text-muted opacity-6">
                                                Totals Target
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12" lg="4">
                            <Card className="mb-3">
                                <CardHeader className="card-header-tab">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        Total Sales
                                    </div>

                                    <div className="btn-actions-pane-right text-capitalize actions-icon-btn">
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle className="btn-icon btn-icon-only" color="link">
                                                <i className="lnr-cog btn-icon-wrapper"/>
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-right rm-pointers dropdown-menu-shadow dropdown-menu-hover-link">
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem>
                                                    <i className="dropdown-icon lnr-inbox"> </i>
                                                    <span>Menus</span>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="dropdown-icon lnr-file-empty"> </i>
                                                    <span>Settings</span>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="dropdown-icon lnr-book"> </i>
                                                    <span>Actions</span>
                                                </DropdownItem>
                                                <DropdownItem divider/>
                                                <div className="p-1 text-right">
                                                    <Button className="mr-2 btn-shadow btn-sm" color="link">View
                                                        Details</Button>
                                                    <Button className="mr-2 btn-shadow btn-sm"
                                                            color="primary">Action</Button>
                                                </div>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Bar2/>
                                </CardBody>
                                <CardFooter className="p-0 d-block">
                                    <div className="grid-menu grid-menu-2col">
                                        <Row className="no-gutters">
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="dark">
                                                    <i className="lnr-car text-primary opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Admin
                                                </Button>
                                            </Col>
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="dark">
                                                    <i className="lnr-bullhorn text-danger opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Blog
                                                </Button>
                                            </Col>
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="dark">
                                                    <i className="lnr-bug text-success opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Register
                                                </Button>
                                            </Col>
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="dark">
                                                    <i className="lnr-heart text-warning opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Directory
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col sm="12" lg="4">
                            <Card className="mb-3">
                                <CardHeader className="card-header-tab">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        Daily Sales
                                    </div>

                                    <div className="btn-actions-pane-right text-capitalize">
                                        <Button size="sm" outline className="btn-wide btn-outline-2x" color="focus">View All</Button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Column/>
                                </CardBody>
                                <CardFooter className="p-0 d-block">
                                    <div className="grid-menu grid-menu-2col">
                                        <Row className="no-gutters">
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="dark">
                                                    <i className="lnr-apartment text-dark opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Overview
                                                </Button>
                                            </Col>
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="dark">
                                                    <i className="lnr-database text-dark opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Support
                                                </Button>
                                            </Col>
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="dark">
                                                    <i className="lnr-printer text-dark opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Activities
                                                </Button>
                                            </Col>
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="dark">
                                                    <i className="lnr-store text-dark opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Marketing
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col sm="12" lg="4">
                            <Card className="mb-3">
                                <CardHeader className="card-header-tab">
                                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                        Total Expenses
                                    </div>

                                    <div className="btn-actions-pane-right text-capitalize">
                                        <Button size="sm" outline className="btn-wide btn-outline-2x" color="primary">View All</Button>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Area/>
                                </CardBody>
                                <CardFooter className="p-0 d-block">
                                    <div className="grid-menu grid-menu-2col">
                                        <Row className="no-gutters">
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="success">
                                                    <i className="lnr-lighter text-success opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Accounts
                                                </Button>
                                            </Col>
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="warning">
                                                    <i className="lnr-construction text-warning opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Contacts
                                                </Button>
                                            </Col>
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="info">
                                                    <i className="lnr-bus text-info opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Products
                                                </Button>
                                            </Col>
                                            <Col sm="6" className="p-2">
                                                <Button
                                                    className="btn-icon-vertical btn-transition-text btn-transition btn-transition-alt pt-2 pb-2"
                                                    outline color="alternate">
                                                    <i className="lnr-gift text-alternate opacity-7 btn-icon-wrapper mb-2"> </i>
                                                    Services
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <Card className="main-card mb-3">
                        <CardHeader>
                            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                Company Agents Status
                            </div>
                            <div className="btn-actions-pane-right">
                                <Button size="sm" outline className="btn-icon btn-wide btn-outline-2x" id={'PopoverCustomT-1'}
                                        onClick={this.togglePop1} color="focus">
                                    Actions Menu
                                    <span className="pl-2 align-middle opacity-7">
                                            <FontAwesomeIcon icon={faAngleDown}/>
                                        </span>
                                </Button>
                                <Popover className="popover-custom rm-pointers" placement="auto"
                                         isOpen={this.state.popoverOpen1}
                                         target={'PopoverCustomT-1'} toggle={this.togglePop1}>
                                    <PopoverBody>
                                        <div className="dropdown-menu-header">
                                            <div className={classnames(
                                                "dropdown-menu-header-inner bg-focus")}>
                                                <div className="menu-header-image"
                                                     style={{
                                                         backgroundImage: 'url(' + bg1 + ')'
                                                     }}
                                                />
                                                <div className="menu-header-content">
                                                    <h5 className="menu-header-title">Settings</h5>
                                                    <h6 className="menu-header-subtitle">Manage all of your
                                                        options</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <Nav vertical>
                                            <NavItem className="nav-item-header">
                                                Activity
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="javascript:void(0);">
                                                    Chat
                                                    <div className="ml-auto badge badge-pill badge-info">8</div>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="javascript:void(0);">Recover Password</NavLink>
                                            </NavItem>
                                            <NavItem className="nav-item-divider"/>
                                            <NavItem className="nav-item-btn text-center">
                                                <Button size="sm" className="btn-wide btn-shadow" color="danger">
                                                    Cancel
                                                </Button>
                                            </NavItem>
                                        </Nav>
                                    </PopoverBody>
                                </Popover>
                            </div>
                        </CardHeader>
                        <Table responsive borderless hover className="align-middle text-truncate mb-0">
                            <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Avatar</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Company</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Due Date</th>
                                <th className="text-center">Target Achievement</th>
                                <th className="text-center">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center text-muted" style={{width: '80px'}}>#54</td>
                                <td className="text-center" style={{width: '80px'}}>
                                    <img width={40} className="rounded-circle"
                                         src={avatar1}
                                         alt=""/>
                                </td>
                                <td className="text-center">
                                    <a href="javascript:void(0)">
                                        Juan C. Cargill
                                    </a>
                                </td>
                                <td className="text-center">
                                    <a href="javascript:void(0)">
                                        Micro Electronics
                                    </a>
                                </td>
                                <td className="text-center">
                                    <div className="badge badge-pill badge-danger">Canceled</div>
                                </td>
                                <td className="text-center">
                                            <span className="pr-2 opacity-6">
                                                <FontAwesomeIcon icon={faBusinessTime}/>
                                            </span>
                                    12 Dec
                                </td>
                                <td className="text-center" style={{width: '200px'}}>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2">
                                                    <div className="widget-numbers fsize-1 text-danger">
                                                        71%
                                                    </div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <Progress
                                                        className="progress-bar-xs"
                                                        color="danger"
                                                        value="71"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <ButtonGroup size="sm">
                                        <Button className="btn-shadow" color="primary">Hire</Button>
                                        <Button className="btn-shadow" color="primary">Fire</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center text-muted" style={{width: '80px'}}>#55</td>
                                <td className="text-center" style={{width: '80px'}}>
                                    <img width={40} className="rounded-circle"
                                         src={avatar2}
                                         alt=""/>
                                </td>
                                <td className="text-center">
                                    <a href="javascript:void(0)">
                                        Johnathan Phelan
                                    </a>
                                </td>
                                <td className="text-center">
                                    <a href="javascript:void(0)">
                                        Hatchworks
                                    </a>
                                </td>
                                <td className="text-center">
                                    <div className="badge badge-pill badge-info">On Hold</div>
                                </td>
                                <td className="text-center">
                                            <span className="pr-2 opacity-6">
                                                <FontAwesomeIcon icon={faBusinessTime}/>
                                            </span>
                                    15 Dec
                                </td>
                                <td className="text-center" style={{width: '200px'}}>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2">
                                                    <div className="widget-numbers fsize-1 text-warning">
                                                        54%
                                                    </div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <Progress
                                                        className="progress-bar-xs"
                                                        color="warning"
                                                        value="54"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <ButtonGroup size="sm">
                                        <Button className="btn-shadow" color="primary">Hire</Button>
                                        <Button className="btn-shadow" color="primary">Fire</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center text-muted" style={{width: '80px'}}>#56</td>
                                <td className="text-center" style={{width: '80px'}}>
                                    <img width={40} className="rounded-circle"
                                         src={avatar3}
                                         alt=""/>
                                </td>
                                <td className="text-center">
                                    <a href="javascript:void(0)">
                                        Darrell Lowe
                                    </a>
                                </td>
                                <td className="text-center">
                                    <a href="javascript:void(0)">
                                        Riddle Electronics
                                    </a>
                                </td>
                                <td className="text-center">
                                    <div className="badge badge-pill badge-warning">In Progress</div>
                                </td>
                                <td className="text-center">
                                            <span className="pr-2 opacity-6">
                                                <FontAwesomeIcon icon={faBusinessTime}/>
                                            </span>
                                    6 Dec
                                </td>
                                <td className="text-center" style={{width: '200px'}}>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2">
                                                    <div className="widget-numbers fsize-1 text-success">
                                                        97%
                                                    </div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <Progress
                                                        className="progress-bar-xs"
                                                        color="success"
                                                        value="97"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <ButtonGroup size="sm">
                                        <Button className="btn-shadow" color="primary">Hire</Button>
                                        <Button className="btn-shadow" color="primary">Fire</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center text-muted" style={{width: '80px'}}>#56</td>
                                <td className="text-center" style={{width: '80px'}}>
                                    <img width={40} className="rounded-circle"
                                         src={avatar4}
                                         alt=""/>
                                </td>
                                <td className="text-center">
                                    <a href="javascript:void(0)">
                                        George T. Cottrell
                                    </a>
                                </td>
                                <td className="text-center">
                                    <a href="javascript:void(0)">
                                        Pixelcloud
                                    </a>
                                </td>
                                <td className="text-center">
                                    <div className="badge badge-pill badge-success">Completed</div>
                                </td>
                                <td className="text-center">
                                            <span className="pr-2 opacity-6">
                                                <FontAwesomeIcon icon={faBusinessTime}/>
                                            </span>
                                    19 Dec
                                </td>
                                <td className="text-center" style={{width: '200px'}}>
                                    <div className="widget-content p-0">
                                        <div className="widget-content-outer">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left pr-2">
                                                    <div className="widget-numbers fsize-1 text-info">
                                                        88%
                                                    </div>
                                                </div>
                                                <div className="widget-content-right w-100">
                                                    <Progress
                                                        className="progress-bar-xs"
                                                        color="info"
                                                        value="88"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <ButtonGroup size="sm">
                                        <Button className="btn-shadow" color="primary">Hire</Button>
                                        <Button className="btn-shadow" color="primary">Fire</Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <CardFooter className="d-block p-4 text-center">
                            <Button color="dark" className="btn-pill btn-shadow btn-wide fsize-1" size="lg">
                                    <span className="mr-2 opacity-7">
                                        <FontAwesomeIcon spin fixedWidth={false} icon={faCog}/>
                                    </span>
                                <span className="mr-1">
                                        View Complete Report
                                    </span>
                            </Button>
                        </CardFooter>
                    </Card>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
