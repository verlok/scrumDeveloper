function getRomanNumber(number) {
  romanNumber = "";
  for (let i=1; i<=number; i+=1) {
    romanNumber+="I";
  }
  return romanNumber;
}

module.exports = getRomanNumber;