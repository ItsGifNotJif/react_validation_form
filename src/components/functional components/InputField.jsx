import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const InputField = ({ label, icon, type, id, placeholder, value, error, failureIconOpacity, successIconOpacity, onChange }) => {
    return (
        <div className={`${id}Input`}>
            <div className={`${id}InputWithIcons`}>
                <label htmlFor={id}>{label}</label>
                <FontAwesomeIcon icon={icon} className="inputIcons" />
                <input
                    type={type}
                    className={`${id} ${failureIconOpacity ? 'error' : ''} ${successIconOpacity ? 'success' : ''}`}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <FontAwesomeIcon icon={faExclamation} className="error-icon" style={{ opacity: failureIconOpacity }} />
                <FontAwesomeIcon icon={faCircleCheck} className="success-icon" style={{ opacity: successIconOpacity }} />
            </div>
            <div className="error" id={`${id}Error`}>{error}</div>
        </div>
    );
};

export default InputField;
