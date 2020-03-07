/* eslint-disable no-empty */
export default function validateLogin(values) {
    const errors = {};
    if (!values.name) {
        errors.name = 'Name is required';
    } else if (values.name.length < 3) {
        errors.name = 'error Name';
    }
    if (!values.number) {
        errors.number = 'Number is required';
    } else if (values.number.length < 10) {
        errors.number = 'Number needs to be more than 10 characters';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    return errors;
}
