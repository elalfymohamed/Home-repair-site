/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import useForm from './useForm';

import validate from './ValidateLogin';


export default function DetailForm() {
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
        <>
            <div className="box">
                <form className="form" onSubmit={handleSubmit} noValidate>

                    <div className="from__group">
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

                    <div className="from__group ">
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
                        <label htmlFor="telephone" className="form__label">Phone</label>
                        {errors.telephone && (<p className="error">{errors.telephone}</p>)}
                    </div>

                    <div className="from__group">
                        {/* Email */}
                        <input
                            id="Email"
                            className={`${errors.email && 'inputError'}`}
                            name="email"
                            type="email"
                            value={values.email || ''}
                            onChange={handleChange}
                            required
                        />
                        <span className="highlight" />
                        <span className="bar" />
                        <label htmlFor="Email" className="form__label">Email</label>
                        {errors.email && (<p className="error">{errors.email}</p>)}
                    </div>

                    <div className="checkbox">
                        <input className="form__checkbox" id="checkbox" type="checkbox" onChange={handleChange} />
                        <label className="form__checkbox__label" htmlFor="checkbox" />
                        <p>
                            I agree to the processing of personal data
                        </p>
                    </div>

                    <div className="form__btu">
                        <button className="btu" tabIndex="0" type="submit">CALL THE MEASURER</button>
                    </div>

                </form>
            </div>
        </>
    );
}
