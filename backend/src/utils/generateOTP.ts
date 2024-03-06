function generateOTP(): string {
    // Generate a random 4-digit number
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    return otp;
}

export default generateOTP