
export const useValidateLoginForm = () => {

    const validateEmail = (email) => {

        if (!email.trim()) {
            return 'Email is required';

        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return 'Email is invalid';
        }

        return null
    }

    const validatePassword = (pass) => {

        if (!pass) {
            return 'Password is required';

        } else if (pass.length < 5) {
            return 'Password should be at least 5 characters long';
        }

        return null
    }

    return {
        validateEmail,
        validatePassword
    }
} 