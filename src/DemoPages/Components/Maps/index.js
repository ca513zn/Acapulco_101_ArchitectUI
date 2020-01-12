import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import VectorMapsExample from './Examples/VectorMaps';
import GoogleMapsExample from './Examples/GoogleMaps';

export default class MapsExample extends React.Component {

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
                        heading="Maps"
                        subheading="Implement in your applications Google or vector maps."
                        icon="pe-7s-map icon-gradient bg-premium-dark"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Vector Maps' key="1"><VectorMapsExample/></TabPane>
                        <TabPane tab='Google Maps' key="2"><GoogleMapsExample/></TabPane>
                    </Tabs>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
