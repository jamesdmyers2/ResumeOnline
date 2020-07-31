import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Patient from './Patient';

export class FetchFHIRData extends Component {
    static displayName = FetchFHIRData.name;
    static fhriURI = process.env.PUBLIC_URL;

    constructor(props) {
        super(props);
        this.state = {
            fhirs: [], conditions: [], conditionsDetail: [], loading: true,
            contentLoading: true, value: "Jessica Argonaut",
            patientId: 0,
            showPopup: false, showDeleteDialog: false,
            addModalShow: false, popupData: [], connectErrors: ""
        };
        this.handleClick = this.handleClick.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Initial load//
    componentDidMount() {

        this.populateFHIRData();
    }

    callbackFunction = (childData) => {

        this.setState({ showDeleteDialog: childData })
    }

    togglePopup = (childData) => {
        this.setState({ showDeleteDialog: childData })
    }

    handleChange(event) {
        this.setState({ fhirs: [], loading: true, conditions: [], contentLoading: true });
        event.preventDefault();
        this.setState({
            value: event.target.value
        }, function () {
            this.populateFHIRData();
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        this.populateFHIRData();
    }

    handleClick() {
        alert("PopupWindow: " + this.props.showDeleteDialog);
        this.setState({ showDeleteDialog: true });

    }

    async populateFHIRData() {

        const endPoint = "/fhirpatient";
        const patient = {
            type: "Patient",
            name: this.state.value
        }

        axios.post(endPoint, patient).then(res => {
            if (res.status === 200) {
                this.setState({ fhirs: res.data, loading: false, connectErrors: "" },
                    function () {
                        return (
                            this.renderfhirsTable())
                    }
                );
                res.data.map(fhir => this.setState({ patientId: fhir.patientid }));
            } else {


            }
        }).catch(error => {
            console.log("axios error: " + error.stack + " Base URL: " + endPoint);
            this.setState({ connectErrors: "Could Not Conect:  " + error.stack, loading: false });
            this.renderfhirsTable();
        })
    }

    renderfhirsTable() {
        if (!this.state.connectErrors) {
            return (
                <Patient
                    patientDataInput={this.state.fhirs}
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    test="WTF"
                    FHIRuri={FetchFHIRData.fhriURI}
                />
            )
        } else {
            return (
                <div>
                    {this.state.connectErrors}
                </div>


            );
        }
    }

    render() {

        let contents = this.state.loading
            ? <ReactLoading type="spinningBubbles" color="#444" />
            : this.renderfhirsTable();

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <div style={{ fontStyle: 'italic', fontWeight: 'bold', textDecorationLine: 'underline' }}>Select the EPIC Sample Patient</div>
                        <select name="selectPatient" value={this.state.value} onChange={this.handleChange}>
                            <option value="Jessica Argonaut">Jessica Argonaut</option>
                            <option value="James Kirk">James Kirk</option>
                            <option value="Daisy Tinsley">Daisy Tinsley</option>
                        </select>
                    </label>
                </form>
                {contents}
            </div>
        );
    }

}
