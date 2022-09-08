/**
 * 工具库
 */

const numbers = '0123456789';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const specials = '~!@#$%^*()_+-=[]{}|;:,./<>?';
const str_CN = '白山云大前端团队出品';
 
const random_str = (length, options) => {
  length || (length = 8);
  options || (options = {});

  var chars = '';
  var result = '';

  if (options === true) {
    chars = numbers + letters + specials;
  } else if (typeof options == 'string') {
    chars = options;
  } else {
    if (options.numbers !== false) {
      chars += (typeof options.numbers == 'string') ? options.numbers : numbers;
    }

    if (options.letters !== false) {
      chars += (typeof options.letters == 'string') ? options.letters : letters;
    }

    if (options.specials) {
      chars += (typeof options.specials == 'string') ? options.specials : specials;
    }
  }

  while (length > 0) {
    length--;
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;

};

const random_num = (range) => {
  var random = Math.random(); //小于1的随机数
  
  return Math.round(random * range * 1000);
};

const random_boolean = () => {
  return Math.random() > 0.5 ? true : false
};

const random_CN = (length) => {
  var result = '';
  while (length > 0) {
    length--;
    result += str_CN[Math.floor(Math.random() * 10)];
  }
  return result;
};


module.exports = {
  random_str,
  random_num,
  random_boolean,
  random_CN,
}