import React from 'react';
import InputField from './InputField';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Form = ({ username, email, password, fieldStatus, handleInputChange, handleSubmit }) => {
    return (
        <>
            <InputField
                label="Name"
                icon={faUser}
                type="text"
                id="username"
                placeholder="Enter name here"
                value={username}
                error={fieldStatus[0].error}
                failureIconOpacity={fieldStatus[0].failureIconOpacity}
                successIconOpacity={fieldStatus[0].successIconOpacity}
                onChange={handleInputChange}
            />

            <InputField
                label="Email"
                icon={faEnvelope}
                type="email"
                id="email"
                placeholder="abc@gmail.com"
                value={email}
                error={fieldStatus[1].error}
                failureIconOpacity={fieldStatus[1].failureIconOpacity}
                successIconOpacity={fieldStatus[1].successIconOpacity}
                onChange={handleInputChange}
            />

            <InputField
                label="Password"
                icon={faLock}
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                error={fieldStatus[2].error}
                failureIconOpacity={fieldStatus[2].failureIconOpacity}
                successIconOpacity={fieldStatus[2].successIconOpacity}
                onChange={handleInputChange}
            />

            <button className="submit" type="submit" id="formSubmit" onClick={handleSubmit}>
                Submit
            </button>
        </>
    );
};

export default Form;
