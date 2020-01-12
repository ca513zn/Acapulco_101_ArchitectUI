import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import ChartJsCircular from './Examples/Circular';
import ChartJsLinesBars from './Examples/LinesBars';

export default class ChartJSExamples extends Component {
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
                    <PageTitle
                        heading="ChartJS"
                        subheading="Huge selection of charts created with the React ChartJS Plugin"
                        icon="pe-7s-bandaid icon-gradient bg-amy-crisp"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Circular Charts' key="1"><ChartJsCircular/></TabPane>
                        <TabPane tab='Lines & Bars Charts' key="2"><ChartJsLinesBars/></TabPane>
                    </Tabs>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}