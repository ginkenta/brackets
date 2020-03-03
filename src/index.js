module.exports = function check(str, bracketsConfig) {
  if(str.length % 2) return false;
  let string = str;
  for(let i = 0; i < str.length/2; i++){
    for(let j = 0; j < bracketsConfig.length; j++){
      const par = bracketsConfig[j].join('');
      if(string.includes(par)){
        string = string.replace(par,'');
      }
    }
  }
  return !string.length;
}
