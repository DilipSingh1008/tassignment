function verifyOTP() {
    const enteredOTP = document.getElementById("otpInput").value;
    const correctOTP = "1234"; 
  
    if (enteredOTP === correctOTP) {
      alert("OTP Verified!");
      window.location.href = "Home.html"; 
    } else {
      alert("Invalid OTP. Try again.");
    }
  }
  