import React, {Component, Fragment} from 'react';

import CKEditor from "react-ckeditor-component";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card, CardBody,
    CardTitle, Button
} from 'reactstrap';

export default class FormCkEditorEditor extends Component {
    constructor(props) {
        super(props);

        //State initialization
        this.state = {
            content: "Hello World"
        };
        this.setContent = this.setContent.bind(this)
    }

    //------ Test for race condition ------ //
    setContent() {
        this.setState({
            content: "Hello World " + Math.random()
        })
    }

    onChange(evt) {
    }

    onBlur(evt) {
    }

    afterPaste(evt) {
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
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardBody>
                                    <CardTitle>CkEditor</CardTitle>
                                    <div className="text-center mb-3">
                                        <Button color="primary" onClick={() => this.setContent()} children='Set content'>
                                            Set Content
                                        </Button>
                                    </div>
                                    <CKEditor
                                        content={this.state.content}
                                        events={{
                                            blur: this.onBlur,
                                            afterPaste: this.afterPaste,
                                            change: this.onChange
                                        }}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}