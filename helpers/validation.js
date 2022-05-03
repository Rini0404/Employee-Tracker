const validator = require('validator');

const validate = {
  stringCheck(str){
    return str !== '' || 'Enter a valid response.'
  },

  salaryValidate(num){
    if(validate.isDecimal(num)) return true;
    return 'Please enter a valid number.'
  },
  isSame(str1, str2){
    if (str1.length === str2.length) return true;
  }
};

module.exports = validator;