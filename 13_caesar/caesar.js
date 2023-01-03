const caesar = function (encoded, a) {
  a = a % 26;
  let decoded = [];
  let temp = encoded.split("");
  for (let i = 0; i < temp.length; i++) {
    let charCode = temp[i].charCodeAt(0);
    let newCharCode = charCode + a;
    if (65 <= charCode && charCode <= 90) {
      if (newCharCode > 90) {
        decoded[i] = String.fromCharCode(newCharCode - 26);
      } else if (newCharCode < 65) {
        decoded[i] = String.fromCharCode(newCharCode + 26);
      } else {
        decoded[i] = String.fromCharCode(newCharCode);
      }
    } else if (97 <= charCode && charCode <= 122) {
      if (newCharCode > 122) {
        decoded[i] = String.fromCharCode(newCharCode - 26);
      } else if (newCharCode < 97) {
        decoded[i] = String.fromCharCode(newCharCode + 26);
      } else {
        decoded[i] = String.fromCharCode(newCharCode);
      }
    } else {
      decoded[i] = temp[i];
    }
  }
  return decoded.join("");
};

// Do not edit below this line
module.exports = caesar;
