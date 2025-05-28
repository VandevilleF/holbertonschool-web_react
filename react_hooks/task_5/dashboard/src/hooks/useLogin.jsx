import { useState, useEffect } from "react";

const useLogin = (onLogin) => {
	const [formData, setFormData] = useState({ email: '', password: '' });
    const [enableSubmit, setEnableSubmit] = useState(false);

    useEffect(() => {
        const { email, password } = formData;
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        const isValidPassword = password.length >= 8;
        setEnableSubmit(email !== '' && password !== '' && isValidEmail && isValidPassword);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (enableSubmit && typeof onLogin === 'function') {
            onLogin(formData.email, formData.password);
        }
    };

    return {
        email: formData.email,
        password: formData.password,
        enableSubmit,
        handleChange,
        handleSubmit,
    };
}
 export default useLogin;
