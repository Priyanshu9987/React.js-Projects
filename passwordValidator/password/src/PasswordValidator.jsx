import React from "react";
import { useState } from "react";
import validator from 'validator';

function PasswordValidator () {

    const [ errorMessage, setErrorMessage ] = useState('');

    const validate = (value) => {

        if( validator.isStrongPassword( value, {
            minLength: 8,
            minLowerCase: 1,
            minUpperCase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })) {
            setErrorMessage( 'is Strong Password');
        }
        else {
            setErrorMessage( 'is not a Strong Password');
        }

    }

      return (
        <div style={{
            marginLeft: '200px',
        }}>
            <pre>
                <h2>Checking Password Strength in ReactJS</h2>
                <span>Enter Password: </span><input type="text"
                    onChange={(e) => validate(e.target.value)}></input> <br />
                {errorMessage === '' ? null :
                    <span style={{
                        fontWeight: 'bold',
                        color:  errorMessage === 'is Strong Password' ? 'green' : 'red'
,
                    }}>{errorMessage}</span>}
            </pre>
        </div>
    );
}

export default PasswordValidator;