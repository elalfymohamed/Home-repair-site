export default function validateLogin(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.telephone) {
        errors.telephone = 'Number is required';
    } else if (!/^[0-9\b]+$/.test(values.telephone)) {
        errors.telephone = 'Error Number';
    } else if ((values.telephone.length < 9)) {
        errors.telephone = 'Number needs to be more than 10 characters';
    }

    if (!values.username) {
        errors.username = 'Name is required';
    } else if (!/^[a-zA-Z]+$/.test(values.username)) {
        errors.username = 'error Name';
    } else if (values.username.length < 3) {
        errors.username = 'error Name needs to be more than 3 characters';
    }

    if (!values.question) {
        errors.question = 'Important data';
    }

    return errors;
}
