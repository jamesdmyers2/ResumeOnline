import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';


export class PopupWindow extends Component {

    constructor() {
        super();

        this.closeDeleteDialog = this.closeDeleteDialog.bind(this);

        this.state = { showDeleteDialog: false }

    }

    sendData = () => {
        this.props.parentCallback(false);
    }


    closeDeleteDialog = () => {
        this.props.parentCallback(false);

    }

    toggleModal() {
        this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
    }

    render() {
        const data = this.props.data;

        return (
            < div className="modalWrapper" >
                <Modal
                    id="main-modal"
                    {...this.props}
                    dialogClassName="modalShow">

                    <Modal.Header closeButton>
                        <Modal.Title>{data.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">

                            {data.body}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div >
        );
    }
}