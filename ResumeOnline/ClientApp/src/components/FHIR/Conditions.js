import React, { Component } from 'react';
import { PopupWindow } from "./../PopupWindow";

export class Conditions extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fhirs: [], conditions: [], conditionsDetail: [], loading: true,
            contentLoading: true,
            showPopup: false, popupData: []
        };
    }


    renderfhirsConditionsTable(conditions) {
        let addModalClose = () => this.setState({ addModalShow: false });

        const popupBody = (
            <div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.conditionsDetail.map(conditions =>
                                <tr key={conditions.code}>
                                    <td>{conditions.display}</td>
                                    <td>{conditions.code}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        );

        const popupData = {
            title: 'Condition Details',
            body: popupBody,
        };

        const conditionTable = (
            < div >
                <h1>Conditions</h1>
                <table className='table table-striped ' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>ClinicalStatus</th>
                            <th>Coding</th>
                        </tr>
                    </thead>

                    <tbody>
                        {conditions.map(condition =>
                            <tr id="conditionsRows" key={condition.patientid} onClick={(e) => this.setState({ addModalShow: true, conditionsDetail: condition.conditions.coding })}>
                                <td>{condition.code}</td>
                                <td>{condition.category}</td>
                                <td>{condition.clinicalStatus}</td>
                                <td>{condition.coding}</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        );



        return (
            <div>
                {conditionTable}

                <PopupWindow
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                    data={popupData}
                />
            </div>

        )
    }

    render() {
        let content = this.renderfhirsConditionsTable(this.props.conditionsData);
        return (
            <div>
                {content}
            </div>
        )

    }
}

export default Conditions;