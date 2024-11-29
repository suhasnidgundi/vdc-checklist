import * as Yup from 'yup';

// Validation schema
export const loginValidationSchema = Yup.object({
    emp_code: Yup.string()
        .matches(/^\d{6}$/, 'Invalid 6-digit number'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
});