import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FiSearch } from "react-icons/fi";
import './SearchModal.css';

function MyVerticallyCenteredModal(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventdefault()
        console.log(searchQuery);

    }
    return (
        <Modal
            {...props}
            size="lg"
            className=""
            data-backdrop="false"
        >

            <Form onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    name="search"
                    placeholder='Search'
                    className='shadow p-3 fs-5 px-5 rounded-pill'
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                />
            </Form>
        </Modal>
    );
}

const SearchModal = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="none" className='btn-outline-dark rounded-pill fw-bold d-flex align-items-center' onClick={() => setModalShow(true)}>
                <FiSearch /> <span className='mx-2'>{props.label}</span>
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default SearchModal