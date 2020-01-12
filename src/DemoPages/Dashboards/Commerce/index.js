import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import CommerceDashboard1 from './Examples/Variation1';
import CommerceDashboard2 from './Examples/Variation2';

export default class CommerceDashboard extends Component {

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
                        heading="Commerce Dashboard"
                        subheading="This dashboard was created as an example of the flexibility that ArchitectUI offers."
                        icon="pe-7s-graph icon-gradient bg-ripe-malin"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Variation 1' key="1"><CommerceDashboard1/></TabPane>
                        <TabPane tab='Variation 2' key="2"><CommerceDashboard2/></TabPane>
                    </Tabs>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
