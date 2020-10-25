var plusBtn=document.getElementById('plus');
plusBtn.onclick=function () {
 document.getElementById('operator').value='+';
};

var minusBtn=document.getElementById('minus');
minusBtn.onclick=function () {
  document.getElementById('operator').value='-';
};

var multiBtn=document.getElementById('multiplication');
multiBtn.onclick=function () {
  document.getElementById('operator').value='*';
};
var devideBtn=document.getElementById('divided');
devideBtn.onclick=function () {
  document.getElementById('operator').value='/';
};

var reminBtn=document.getElementById('reminder');
reminBtn.onclick=function () {
  document.getElementById('operator').value='%';
};


var equal= document.getElementById('equal');
equal.onclick=function () {
  var operator= document.getElementById(operator).value;
  myCalculator(operator);
  var result= myCalculator(operator);
  document.getElementById('result').value=result;
}


function myCalculator(operator) {
  var firstNumber= Number(document.getElementById('firstValue'));
  var lastNumber= Number(document.getElementById('lastValue'));
  switch (operator) {
    case '+':
      var result=firstNumber+lastNumber;
      break;
    case '-':
      var result=firstNumber-lastNumber;
      break;
    case '*':
      var result=firstNumber*lastNumber;
      break;
    case '/':
      var result=firstNumber/lastNumber;
      break;

    case '%':
      var result=firstNumber%lastNumber;
      break;
  }
  return result;
};

var plusBtn=document.getElementById('plus');
plusBtn.onclick=function () {
    document.getElementById('result').value=myCalculator('+');
};








//
//
// var plusBtn=document.getElementById('plus');
// plusBtn.onclick=function () {
//   var firtNumber=Number(document.getElementById('firstValue').value);
//   var lastNumber=Number(document.getElementById('lasttValue').value);
//   var result= firtNumber+lastNumber;
//   document.getElementById('result').value=result
//
// };
//
// var minusBtn=document.getElementById('minus');
// minusBtn.onclick=function () {
//   var firtNumber=Number(document.getElementById('firstValue').value);
//   var lastNumber=Number(document.getElementById('lasttValue').value);
//   var result= firtNumber-lastNumber;
//   document.getElementById('result').value=result
//
// };
//
// var multiBtn=document.getElementById('multiplication');
// multiBtn.onclick=function () {
//   var firtNumber=Number(document.getElementById('firstValue').value);
//   var lastNumber=Number(document.getElementById('lasttValue').value);
//   var result= firtNumber*lastNumber;
//   document.getElementById('result').value=result
//
// };
//
// var divide=document.getElementById('divided');
// divide.onclick=function () {
//   var firtNumber=Number(document.getElementById('firstValue').value);
//   var lastNumber=Number(document.getElementById('lasttValue').value);
//   var result= firtNumber/lastNumber;
//   document.getElementById('result').value=result
//
// };
//
// var remindBtn=document.getElementById('reminder')
// remindBtn.onclick=function () {
//   var firtNumber=Number(document.getElementById('firstValue').value);
//   var lastNumber=Number(document.getElementById('lasttValue').value);
//   var result= firtNumber%lastNumber;
//   document.getElementById('result').value=result
// }