import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import useAuthStore from '../../store/authStore';
import DashboardLayout from '../../layouts/DashboardLayout';
import Welcome from '../dashboards/Welcome';

function Login() {

    const { checkAuth } = useAuthStore();

    const { login } = useAuthStore();
    const [loginError, setLoginError] = useState(null);
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    
    // Validation schema
    const validationSchema = Yup.object({
        emp_code: Yup.string()
            .matches(/^\d{6}$/, 'Invalid 6-digit number'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    const formik = useFormik({
        initialValues: {
            emp_code: '',
            password: '',
            remember: false,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // Use the login method from authStore
                const response = await login({
                    emp_code: values.id,
                    password: values.password,
                    area: ""
                });


            } catch (error) {
                setLoginError(error.message || 'Login failed');
                console.error(error);
            }
        },
    });

    return (
        isAuthenticated ? <DashboardLayout><Welcome /></DashboardLayout> :
            < HomeLayout >
                <div className="login-box">
                    <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                            <a className="h1"><b>VDC</b> Checklist</a>
                        </div>
                        <div className="card-body">
                            <p className="login-box-msg">Sign in to start your session</p>

                            {loginError && (
                                <div className="alert alert-danger">
                                    {loginError}
                                </div>
                            )}

                            <form onSubmit={formik.handleSubmit}>
                                <div className="input-group mb-3">
                                    <input
                                        type="id"
                                        className={`form-control ${formik.touched.id && formik.errors.id ? 'is-invalid' : ''}`}
                                        placeholder="ID"
                                        name="id"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.id}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                    {formik.touched.id && formik.errors.id && (
                                        <div className="invalid-feedback">
                                            {formik.errors.id}
                                        </div>
                                    )}
                                </div>

                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                    {formik.touched.password && formik.errors.password && (
                                        <div className="invalid-feedback">
                                            {formik.errors.password}
                                        </div>
                                    )}
                                </div>

                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input
                                                type="checkbox"
                                                id="remember"
                                                name="remember"
                                                onChange={formik.handleChange}
                                                checked={formik.values.remember}
                                            />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block"
                                            disabled={formik.isSubmitting}
                                        >
                                            {formik.isSubmitting ? 'Signing In...' : 'Sign In'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p className="mb-1">
                                <Link to="/forgot-password">I forgot my password</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </HomeLayout >

    );
}

export default Login;