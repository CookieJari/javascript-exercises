function ftoc(temp){
  return Math.round((temp-32)*(5/9)*10)/10
}

function ctof(temp){
  return Math.round((temp * (9/5)+32)*10)/10
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
