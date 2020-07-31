import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Media, Button } from 'react-bootstrap';

import axios from 'axios';
import Conditions from './Conditions';

export class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patientDataIn: [], conditions: [], conditionsDetail: [], loading: false,
            contentLoading: true,
            patientId: 0,
            showPopup: false, showDeleteDialog: false,
            addModalShow: false, popupData: [],
            prevProps: [], displayContent: false
        };
        this.getConditions = this.getConditions.bind(this);
    }

    //Initial load//
    componentDidMount() {
        if (this.props.patientDataInput)
            this.setState({ patientDataIn: this.props.patientDataInput });
    }


    getConditions() {

        if (this.state.displayContent)
            this.setState({ displayContent: false });
        else
            this.setState({ displayContent: true });


        if (this.state.contentLoading === true) {
            const endPoint =
                this.props.FHIRuri
                + "/fhirconditions";
            const condition = {
                type: "Conditions",
                patientid: this.props.patientDataInput[0].patientid
            }

            axios.post(endPoint, condition).then(res => {
                this.setState({ conditions: res.data, contentLoading: false },


                    function () {
                        return (this.renderfhirsConditions())
                    }
                );

            });
        } else {
            this.setState({ contentLoading: true });
        }
    }

    renderpatientDatasTable(patientData) {
        const isValid = true;

        const listPatients = this.state.patientDataIn.map(patientData =>
            <div key={patientData.patientid} >
                <br />
                <div style={{ border: "double", padding: "3rem" }}>
                <span><b>ID:</b>  {patientData.patientid}</span>
                <br/>
                <span><b>Name:</b>  {patientData.name}</span>
                <br />
                <span><b>Address:</b>  {patientData.address}</span>
                <br />
                <span><b>Gender:</b>  {patientData.gender}</span>
                <br />
                    <span><b>Birthdate:</b>  {patientData.birthdate}</span>
                </div>

                <br /><br />
                <Button variant="primary" disabled={!isValid} onClick={this.getConditions}> Conditions</Button>
            </div>
        );

        return (
            <div>
                {listPatients}
            </div>


        );
    }

    renderfhirsConditions() {
        return (
            <Conditions
                conditionsData={this.state.conditions}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
            />
        )
    }

    render() {
        let contents = this.state.loading
            ? <ReactLoading type="spinningBubbles" color="#444" />
            : this.renderpatientDatasTable(this.state.patientDataIn);

        let condition = (this.state.displayContent)
            ? this.renderfhirsConditions()
            : <p>...</p>

        return (
            <div>

                {contents}
                {condition}

            </div>
        )

    }
}

export default Patient;