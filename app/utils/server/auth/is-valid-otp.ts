const isValidOTP = (otp: string) => {
  const otpBase = Number(
    Math.floor(new Date().getTime() / 1000)
      .toString()
      .slice(-5)
  );
  const otpMin = otpBase - 60;
  const otpMax = otpBase + 60;

  return Number(otp) > otpMin && Number(otp) < otpMax;
};

export default isValidOTP;
