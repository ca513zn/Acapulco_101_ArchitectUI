import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import AnalyticsDashboard1 from './Examples/Variation1';
import AnalyticsDashboard2 from './Examples/Variation2';
import PopoversExample from "../../Components/TooltipsPopovers";

export default class AnalyticsDashboard extends Component {

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
                        heading="Analytics Dashboard"
                        subheading="This is an example dashboard created using build-in elements and components."
                        icon="pe-7s-car icon-gradient bg-mean-fruit"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Variation 1' key="1"><AnalyticsDashboard1/></TabPane>
                        <TabPane tab='Variation 2' key="2"><AnalyticsDashboard2/></TabPane>
                    </Tabs>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
