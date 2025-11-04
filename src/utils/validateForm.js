export const validateForm = (isSignInForm, email, password) => {

    // const isFullName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname)
    const isEmailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if (!isFullName && !isSignInForm) return "Full Name is not valid";
    if (!isEmailValidate) return "EmailId is not valid";
    if (!isPasswordValidate) return "Password is not valid";
    
    return null

}