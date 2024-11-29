import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import useAuthStore from '../../store/authStore';
import { loginValidationSchema } from '../../utils/validation';
function Login() {

    const { login } = useAuthStore();
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            emp_code: '',
            password: '',
            remember: false,
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values) => {
            try {
                // Use the login method from authStore
                const response = await login({
                    emp_code: values.id,
                    password: values.password,
                    area: ""
                }, navigate);


            } catch (error) {
                setLoginError(error.message || 'Login failed');
                console.error(error);
            }
        },
    });

    return (
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