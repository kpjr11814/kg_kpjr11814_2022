function phonetic(num){

  var ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  var numString = num.toString();
  var numPhonetic= "";

  for(var i = 0; i < numString.length; i++){
    numPhonetic += ones[numString[i]];
  }
  return numPhonetic;
}

/*---------Program Starts Here-----------*/

var phoneticNums = ""
for (var i = 2; i < process.argv.length; i++){
  phoneticNums += phonetic(process.argv[i]) + ',';
}

phoneticNums = phoneticNums.substring(0, phoneticNums.length - 1);
console.log(phoneticNums)

