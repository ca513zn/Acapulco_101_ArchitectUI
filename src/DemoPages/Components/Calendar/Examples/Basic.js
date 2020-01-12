import React, {Fragment, Component} from "react";

import {
    Card, CardBody
} from 'reactstrap';

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './Events'

const localizer = BigCalendar.momentLocalizer(moment)


export default class CalendarBasic extends Component {

    render() {
        return (
            <Fragment>
                <Card className="mb-3">
                    <CardBody>
                        <BigCalendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                        />
                    </CardBody>
                </Card>
            </Fragment>
        )
    }
}
