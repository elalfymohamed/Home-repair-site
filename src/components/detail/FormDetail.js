/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-use-before-define */
import React from 'react';


import useForm from '../from/useForm';

import validate from '../from/ValidateLogin';


export default function Form() {
    const {
        handleChange, handleSubmit, values, errors,
    } = useForm(
        submit,
        validate,
    );

    function submit() {
        console.log('No errors, submit callback called!');
    }
    return (
        <form className="form" onSubmit={handleSubmit} noValidate>

            <div className="from__group fix">
                {/* Name */}
                <input
                    id="username"
                    className={`${errors.username && 'inputError'}`}
                    name="username"
                    type="text"
                    value={values.username || ''}
                    onChange={handleChange}
                    required
                />
                <span className="highlight" />
                <span className="bar" />
                <label htmlFor="username" className="form__label">Name</label>
                {errors.username && (<p className="error">{errors.username}</p>)}
            </div>

            <div className="from__group fix">
                {/* telephone */}
                <input
                    id="telephone"
                    className={`${errors.telephone && 'inputError'}`}
                    name="telephone"

                    type="tel"
                    value={values.telephone || ''}
                    onChange={handleChange}
                    required
                />
                <span className="highlight" />
                <span className="bar" />
                <label htmlFor="Number" className="form__label">Phone</label>
                {errors.telephone && (<p className="error">{errors.telephone}</p>)}
            </div>
            <div className="from__group">
                {/* question */}
                <input
                    id="question"
                    className={`input ${errors.question && 'inputError'}`}
                    name="question"
                    type="text"
                    value={values.question || ''}
                    onChange={handleChange}
                    required
                />
                <span className="highlight input" />
                <span className="bar input" />
                <label htmlFor="question" className="form__label">Question</label>
                {errors.question && (<p className="error">{errors.question}</p>)}
            </div>

            <div className="checkbox">
                <input className="form__checkbox" id="checkbox" type="checkbox" />
                <label className="form__checkbox__label" htmlFor="checkbox" />
                <p>
                    I agree to the processing of personal data
                </p>
            </div>

            <div className="form__btu">
                <button className="btu" tabIndex="0" type="submit">submit</button>
            </div>
        </form>

    );
}
