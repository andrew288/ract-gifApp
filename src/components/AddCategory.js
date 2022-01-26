import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( InputValue.trim().length > 2 ){
            setCategories( cats => [InputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                onChange={ handleInputChange } 
                value={ InputValue } />
        </form>
    );
};

// Propiedades

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
} 

