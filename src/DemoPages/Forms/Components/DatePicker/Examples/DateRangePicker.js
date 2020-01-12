import React, {Fragment} from 'react'

import {
    InputGroup, InputGroupAddon, Input
} from 'reactstrap';

import {
    faCalendarAlt,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import moment from 'moment';

class FormDateRangePicker extends React.Component {
    constructor(props) {
        super(props);
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0));
        let end = moment(start).add(1, "days").subtract(1, "seconds");
        this.state = {
            start: start,
            end: end
        }

        this.applyCallback = this.applyCallback.bind(this);
    }

    applyCallback(startDate, endDate) {
        this.setState({
                start: startDate,
                end: endDate
            }
        )
    }

    render() {
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0));
        let end = moment(start).add(1, "days").subtract(1, "seconds");
        let ranges = {
            "Today Only": [moment(start), moment(end)],
            "Yesterday Only": [moment(start).subtract(1, "days"), moment(end).subtract(1, "days")],
            "3 Days": [moment(start).subtract(3, "days"), moment(end)]
        }
        let local = {
            "format": "DD-MM-YYYY HH:mm",
            "sundayFirst": false
        }
        let maxDate = moment(start).add(24, "hour")
        return (
            <Fragment>
                <DateTimeRangeContainer
                    ranges={ranges}
                    start={this.state.start}
                    end={this.state.end}
                    local={local}
                    maxDate={maxDate}
                    applyCallback={this.applyCallback}
                >
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon={faCalendarAlt}/>
                            </div>
                        </InputGroupAddon>

                        <Input placeholder="Enter text"/>
                    </InputGroup>
                </DateTimeRangeContainer>
            </Fragment>
        )
    }
}

export default FormDateRangePicker;