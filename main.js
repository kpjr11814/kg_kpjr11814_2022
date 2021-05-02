function phonetic(num){

  var ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  var numString = num.toString();
  var numPhonetic= "";

  for(var i = 0; i < numString.length; i++){
    numPhonetic += ones[numString[i]];
  }
  return numPhonetic;
}

arr1 = [3, 25, 209]
var phoneticNums = ""
for (var i = 0; i < arr1.length; i++){

  if(i + 1 < arr1.length){
    phoneticNums += phonetic(arr1[i]) + ', ';
  }
  else{
    phoneticNums += phonetic(arr1[i]);
  }
}

console.log(phoneticNums)

"# kg_kpjr11814_2022" 
