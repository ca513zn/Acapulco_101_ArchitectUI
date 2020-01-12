import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

// Examples
import CardsBasicExample from './Examples/Basic';
import CardsColors from './Examples/Colors';
import CardsBlockLoadingExample from './Examples/Loading';
import CardsAdvanced from './Examples/Advanced';

export default class CardsExamples extends React.Component {

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
                        heading="Cards"
                        subheading="Wide selection of cards with multiple styles, borders, actions and hover effects."
                        icon="pe-7s-stopwatch icon-gradient bg-amy-crisp"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Advanced' key="1"><CardsAdvanced/></TabPane>
                        <TabPane tab='Basic' key="2"><CardsBasicExample/></TabPane>
                        <TabPane tab='Color States' key="3"><CardsColors/></TabPane>
                        <TabPane tab='Block Loading' key="4"><CardsBlockLoadingExample/></TabPane>
                    </Tabs>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}