import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import HomeLayout from '../../layouts/HomeLayout';
import useAuthStore from '../../store/authStore_TEST';

function Login() {
    const navigate = useNavigate();
    const { login } = useAuthStore();
    const [loginError, setLoginError] = useState(null);

    // Validation schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                // Use the login method from authStore
                const response = await login({
                    email: values.email,
                    password: values.password
                });

                // Redirect based on user role
                switch(response.user.role) {
                    case 'BRANCH_MANAGER':
                        navigate('/BM_Dashboard');
                        break;
                    case 'CLUSTER_MANAGER':
                        navigate('/CM_Dashboard');
                        break;
                    case 'AVP':
                        navigate('/AVP_Dashboard');
                        break;
                    case 'ZONAL_MANAGER':
                        navigate('/ZONAL_Dashboard');
                        break;
                    case 'ADMIN':
                        navigate('/manage_branch');
                        break;
                    default:
                        navigate('/dashboard');
                }
            } catch (error) {
                setLoginError(error.message || 'Login failed');
                console.error(error);
            }
        },
    });

    // Quick login buttons for testing different roles
    const handleQuickLogin = (email) => {
        formik.setValues({
            email,
            password: 'password123'
        });
        formik.submitForm();
    };

    return (
        <HomeLayout>
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
                                    type="email"
                                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
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
                            </div>
                            
                            <div className="row">
                                <div className="col-12">
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

                        {/* Quick Login Buttons for Testing */}
                        <div className="mt-3">
                            <p>Quick Login (For Testing):</p>
                            <div className="d-flex justify-content-between">
                                <button 
                                    onClick={() => handleQuickLogin('bm@test.com')} 
                                    className="btn btn-sm btn-outline-primary"
                                >
                                    Branch Manager
                                </button>
                                <button 
                                    onClick={() => handleQuickLogin('cm@test.com')} 
                                    className="btn btn-sm btn-outline-success"
                                >
                                    Cluster Manager
                                </button>
                                <button 
                                    onClick={() => handleQuickLogin('avp@test.com')} 
                                    className="btn btn-sm btn-outline-info"
                                >
                                    AVP
                                </button>
                                <button 
                                    onClick={() => handleQuickLogin('zonal@test.com')} 
                                    className="btn btn-sm btn-outline-warning"
                                >
                                    Zonal Manager
                                </button>
                                <button 
                                    onClick={() => handleQuickLogin('admin@test.com')} 
                                    className="btn btn-sm btn-outline-danger"
                                >
                                    Admin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default Login;