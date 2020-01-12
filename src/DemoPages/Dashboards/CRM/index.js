import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitleAlt2 from '../../../Layout/AppMain/PageTitleAlt2';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import CRMDashboard1 from './Examples/Variation1';
import CRMDashboard2 from './Examples/Variation2';
import PageTitle from "../Commerce";


export default class CRMDashboard extends Component {

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
                    <PageTitleAlt2
                        heading="CRM Dashboard"
                        subheading="Yet another dashboard built using only the included Architech elements and components."
                        icon="pe-7s-graph icon-gradient bg-ripe-malin"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Variation 1' key="1"><CRMDashboard2/></TabPane>
                        <TabPane tab='Variation 2' key="2"><CRMDashboard1/></TabPane>
                    </Tabs>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
