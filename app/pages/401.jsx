import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';

function Unauthorized() {
    const { logout } = useAuthStore();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h1 className="display-4 text-danger">Unauthorized Access</h1>
                    <p className="lead">You do not have permission to access this page.</p>
                    <div className="mt-4">
                        <Link
                            to="/dashboard"
                            className="btn btn-primary mr-3"
                        >
                            Go to Dashboard
                        </Link>
                        <button
                            onClick={() => {
                                logout();
                                window.location.href = '/login';
                            }}
                            className="btn btn-secondary"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Unauthorized;