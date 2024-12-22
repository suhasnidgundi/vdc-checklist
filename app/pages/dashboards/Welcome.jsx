import React from 'react';
import { Link } from 'react-router-dom';
import {
  getNameWithoutMiddleName,
  getEmail,
  getMobileNumber,
  getDepartment,
  getDesignation,
  getEmployeeCode,
  getRole
} from '../../libs/user';
import useAuthStore from '../../store/authStore';

function Welcome() {
  const { isAuthenticated } = useAuthStore();

  const UnauthenticatedView = () => (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card border-0 shadow-lg" style={{ maxWidth: '800px' }}>
        <div className="card-body p-5">
          <h1 className="display-4 text-primary mb-4">Welcome to VDC Checklist</h1>
          <p className="lead text-muted mb-4">
            Streamline your workflow and enhance productivity with our comprehensive checklist management system.
          </p>
          <div className="d-flex" style={{gap: '1rem'}}>
            <Link to="/login" className="btn btn-primary btn-lg px-4">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline-primary btn-lg px-4">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const AuthenticatedView = () => {
    const userDetails = [
      { label: 'Email', value: getEmail(), icon: 'bi bi-envelope' },
      { label: 'Mobile', value: getMobileNumber(), icon: 'bi bi-phone' },
      { label: 'Department', value: getDepartment(), icon: 'bi bi-building' },
      { label: 'Designation', value: getDesignation(), icon: 'bi bi-person-badge' },
      { label: 'Employee Code', value: getEmployeeCode(), icon: 'bi bi-card-text' },
      { label: 'Role', value: getRole(), icon: 'bi bi-shield-lock' }
    ];

    return (
      <div className="container min-vh-100 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="display-1 text-primary mb-3">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <h1 className="display-5 mb-3">
                    Welcome back, {getNameWithoutMiddleName()}!
                  </h1>
                  <p className="lead text-muted">
                    We're glad to see you again. Here's your profile information:
                  </p>
                </div>

                <div className="row g-4">
                  {userDetails.map((detail, index) => (
                    <div key={index} className="col-md-6">
                      <div className="p-3 border rounded bg-light h-100">
                        <div className="d-flex align-items-center">
                          <i className={`${detail.icon} text-primary me-2 fs-5`}></i>
                          <div>
                            <div className="text-muted small">{detail.label}</div>
                            <div className="fw-medium">{detail.value}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <Link to="/dashboard" className="btn btn-primary btn-lg px-4">
                    Go to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return isAuthenticated ? <AuthenticatedView /> : <UnauthenticatedView />;
}

export default Welcome;