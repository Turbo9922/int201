

function isValidPassword(password){
    if(password.length < 8)
        return false;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumber;
}    
console.log(isValidPassword("Password123"));
console.log(isValidPassword("pass123"));
console.log(isValidPassword("PASSWORD123"));
console.log(isValidPassword("Pass12"));   

