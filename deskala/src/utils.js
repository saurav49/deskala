const validateEmail = (email) => {
  //eslint-disable-next-line
  const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return validEmailRegex.test(email);
};

const validatePassword = (password) => {
  const validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

  return validPasswordRegex.test(password);
};

const validatePhoneNumber = (number) => {
  var phonenoRegx = /^\d{10}$/;
  return phonenoRegx.test(number);
};

export { validateEmail, validatePassword, validatePhoneNumber };
