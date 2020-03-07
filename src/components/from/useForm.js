import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({ name: '', number: '', email: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...value,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [callback, errors, isSubmitting]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    };
};
export default useForm;
