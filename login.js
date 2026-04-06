// ===============================
// GLOBAL OTP VARIABLE
// ===============================
let generatedOTP = "";

// ===============================
// GENERATE 6 DIGIT OTP
// ===============================
function generateOTP(){
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    return generatedOTP;
}

// ===============================
// SHOW / HIDE PASSWORD
// ===============================
function togglePassword(id){
    let input = document.getElementById(id);

    if(input.type === "password"){
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// ===============================
// FORM SWITCHING
// ===============================
function showSignup(){
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("forgot-form").style.display = "none";
}

function showLogin(){
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("forgot-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

function showForgot(){
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("forgot-form").style.display = "block";
}

// ===============================
// EMAIL OTP (REGISTER)
// ===============================
function sendEmailOTP(){
    let email = document.getElementById("email").value;

    if(email === ""){
        alert("Please enter your email first");
        return;
    }

    let otp = generateOTP();
    alert("OTP sent to " + email + "\nYour OTP is: " + otp);
}

function verifyEmailOTP(){
    let userOtp = document.getElementById("emailOtp").value;

    if(userOtp === generatedOTP){
        alert("Email OTP Verified Successfully");
    } else {
        alert("Invalid OTP");
    }
}

// ===============================
// PHONE OTP (REGISTER)
// ===============================
function sendPhoneOTP(){
    let phone = document.getElementById("phone").value;

    if(phone.length !== 10){
        alert("Enter valid 10 digit mobile number");
        return;
    }

    let otp = generateOTP();
    alert("OTP sent to +91 " + phone + "\nYour OTP is: " + otp);
}

function verifyPhoneOTP(){
    let userOtp = document.getElementById("otp").value;

    if(userOtp === generatedOTP){
        alert("Phone OTP Verified Successfully");
    } else {
        alert("Invalid OTP");
    }
}

// ===============================
// FORGOT PASSWORD (EMAIL OTP)
// ===============================
function resetPassword(){
    let email = document.getElementById("resetEmail").value;

    if(email === ""){
        alert("Please enter your registered email");
        return;
    }

    let otp = generateOTP();

    alert("Password reset OTP sent to " + email + "\nOTP: " + otp);

    // Show OTP section
    document.getElementById("resetOtpSection").style.display = "block";
}

function verifyResetOTP(){
    let userOtp = document.getElementById("resetOtp").value;

    if(userOtp === generatedOTP){
        alert("OTP Verified! Now you can reset password.");
    } else {
        alert("Invalid OTP");
    }
}