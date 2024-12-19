import useBodyClass from '../../hooks/useBodyClass'
import { Link } from 'react-router-dom'

function Register() {

    useBodyClass('register-page')

    return (
        <div className="register-box">
            <div className="register-logo">
                <Link to="/"><b>VDC</b> Checklist</Link>
            </div>

            <div className="card">
                <div className="card-body register-card-body">
                    <p className="login-box-msg">Register a new membership</p>

                    <form action="" method="post">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Full name" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Retype password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                                    <label htmlFor="agreeTerms">
                                        I agree to the <Link to="/terms-and-condition">terms</Link>
                                    </label>
                                </div>
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                            </div>
                            {/* <!-- /.col --> */}
                        </div>
                    </form>

                    <Link href="/login" className="text-center">I already have a membership</Link>
                </div>
                {/* <!-- /.form-box --> */}
            </div>
            {/* <!-- /.card --> */}
        </div>
    )
}

export default Register