/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import useForm from './useForm';

import validate from './ValidateLogin';


export default function Form() {
    const {
        handleChange, handleSubmit, values, errors,
    } = useForm(
        submit,
        validate,
    );

    function submit() {
        console.log('Submitted Succesfully');
    }

    return (
        <>
            <div className="form__">
                <div className="form__col">
                    <h3 className="title__form">
                        Leave a request for free
                        departure of the measurer
                    </h3>
                    <form className="form__form" onSubmit={handleSubmit} noValidate>
                        <div className="from__group">
                            <input
                                id="Name"
                                className={`${errors.name && 'inputError'}`}
                                name="Name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                            />
                            <span className="highlight" />
                            <span className="bar" />
                            <label htmlFor="Name" className="form__label">Name</label>
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                        <div className="from__group ">
                            <input
                                id="Number"
                                className={`${errors.number && 'inputError'}`}
                                name="Number"
                                type="Number"
                                value={values.number}
                                onChange={handleChange}
                            />
                            <span className="highlight" />
                            <span className="bar" />
                            <label htmlFor="Number" className="form__label">Number</label>
                            {errors.number && <p className="error">{errors.number}</p>}
                        </div>
                        <div className="from__group">
                            <input
                                id="Email"
                                className={`${errors.email && 'inputError'}`}
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <span className="highlight" />
                            <span className="bar" />
                            <label htmlFor="Email" className="form__label">Email</label>
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="checkbox">
                            <input className="form__checkbox" id="checkbox" type="checkbox" />
                            <label className="form__checkbox__label" htmlFor="checkbox">
                                I agree to the processing of personal data
                            </label>
                        </div>
                        <div className="form__btu">
                            <button className="btu" tabIndex="0" type="submit">CALL THE MEASURER</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="save">
                <div className="save__p">
                    <span className="img" role="img" />
                    <p className="p__style">
                        Help save 10 - 20% of the
                        <br />
                        cost of materials
                    </p>
                </div>
            </div>
        </>
    );
}
