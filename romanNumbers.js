const letters = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

function getNDigits(n) {
  var out = "";
  for (let i = 1; i <= n; i += 1) {
    out += letters[1];
  }
  return out;
}

function getRomanNumber(number) {
  romanNumber = "";
  if (number % 5 === 4) {
    return letters[1] + letters[5];
  }
  return getNDigits(number);
}

module.exports = getRomanNumber;


/*
8. Roman Numeral

Given a positive integer number determine its Roman numeral representation as a String
(eg. 42 -> "XLII").

The Roman 'letters' are:

1 -> "I" | 10 -> "X" | 100 -> "C" | 1000 -> "M"
2 -> "II" | 20 -> "XX" | 200 -> "CC" | 2000 -> "MM"
3 -> "III" | 30 -> "XXX" | 300 -> "CCC" | 3000 -> "MMM"
4 -> "IV" | 40 -> "XL" | 400 -> "CD" | 4000 -> "MMMM"
5 -> "V" | 50 -> "L" | 500 -> "D"
6 -> "VI" | 60 -> "LX" | 600 -> "DC"
7 -> "VII" | 70 -> "LXX" | 700 -> "DCC"
8 -> "VIII" | 80 -> "LXXX" | 800 -> "DCCC"
9 -> "IX" | 90 -> "XC" | 900 -> "CM"

You cannot write numerals like IM for 999.

Wikipedia states "Modern Roman numerals are written by expressing each digit separately
starting with the leftmost digit and skipping any digit with a value of zero."
Examples:

o) 1990 -> "MCMXC" (1000 -> "M" + 900 -> "CM" + 90 -> "XC")
o) 2008 -> "MMVIII" (2000 -> "MM" + 8 -> "VIII")
o) 99 -> "XCIX" ( 90 -> "XC" + 9 -> "IX")
o) 47 -> "XLVII" ( 40 -> "XL" + 7 -> "VII")
*/