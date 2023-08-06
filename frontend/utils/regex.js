const checkSpecialCharacters = (text) => {
  // accept only letters and numbers
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(text);
};

export default checkSpecialCharacters;
