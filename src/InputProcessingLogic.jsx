import React from 'react';
import './AppStyleGeneral.css';
import Form from './components/functional components/Form';

const JSLogic = ({ username, email, password, fieldStatus, handleInputChange, handleSubmit }) => {
    return (
        <Form
            username={username}
            email={email}
            password={password}
            fieldStatus={fieldStatus}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default JSLogic;
