// Utility function to get the user profile from sessionStorage
const getUserProfile = () => {
    const userProfileData = sessionStorage.getItem("user");
    return userProfileData ? JSON.parse(userProfileData) : null;
};

// Function to get the full name of the user (First + Last name, removing middle name)
export const getNameWithoutMiddleName = () => {
    const userProfile = getUserProfile();
    if (!userProfile) return "Unknown User";
  
    const { fname, lname } = userProfile; // First and last name
    return `${fname} ${lname}`.trim(); // Return first name + last name
  };

// Function to get the full name of the user
export const getUsername = () => {
    const userProfile = getUserProfile();
    return userProfile ? `${userProfile.fname} ${userProfile.lname}` : "Unknown User";
};

// Function to get the email of the user
export const getEmail = () => {
    const userProfile = getUserProfile();
    return userProfile ? userProfile.mail_id : "Email not available";
};

// Function to get the mobile number of the user
export const getMobileNumber = () => {
    const userProfile = getUserProfile();
    return userProfile ? userProfile.mobile : "Mobile number not available";
};

// Function to get the department name
export const getDepartment = () => {
    const userProfile = getUserProfile();
    return userProfile ? userProfile.dept_name : "Department not available";
};

// Function to get the designation of the user
export const getDesignation = () => {
    const userProfile = getUserProfile();
    return userProfile ? userProfile.designation_name : "Designation not available";
};

// Function to get the employee code
export const getEmployeeCode = () => {
    const userProfile = getUserProfile();
    return userProfile ? userProfile.emp_code : "Employee code not available";
};

// Function to get the role of the user
export const getRole = () => {
    const userProfile = getUserProfile();
    return userProfile ? userProfile.role : "Role not available";
};

