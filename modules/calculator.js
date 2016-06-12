var calculator = function(resObject){ //Get the object
  var newInput = resObject.screenInput;
  var firstNum = "";
  var runningTotal = null;
  var operator = null;
  console.log("in calculator with ");
  console.log(newInput);

  var evaluate = {
    '+': function (x,y) {return Number(x)+Number(y)},
    '-': function (x,y) {return Number(x)-Number(y)},
    '×': function (x,y) {return Number(x)*Number(y)},
    '÷': function (x,y) {return Number(x)/Number(y)}
  };

  for (var i=0; i<newInput.length; i++) {
    console.log("String position: " + i + ". Seeing: " + newInput[i] + " Running Total: " + runningTotal);
    if ( newInput[i] === "+" || newInput[i] === "-" || newInput[i] === "×" || newInput[i] === "÷") {
      console.log("In operator check");
      if (i==0) {return "ERROR"}
      else if (runningTotal == null) {
        operator = newInput[i];
        runningTotal = Number(firstNum);
        firstNum = "";
        console.log("Operator: " + operator + " runningTotal: " + runningTotal);
      } else {
        console.log("Operator switch, operator: " + operator);
        switch (operator) {
          case "+":
            runningTotal = evaluate['+'](runningTotal, firstNum);
            operator = newInput[i];
            firstNum = "";
            break;
          case "-":
            runningTotal = evaluate['-'](runningTotal, firstNum);
            operator = newInput[i];
            firstNum = "";
            break;
          case "×":
            runningTotal = evaluate['×'](runningTotal, firstNum);
            operator = newInput[i];
            firstNum = "";
            break;
          case "÷":
            runningTotal = evaluate['÷'](runningTotal, firstNum);
            operator = newInput[i];
            firstNum = "";
            break;
          default:
            return "wtf?";

          }//End Switch
      }//End Else

    } else {

      firstNum += newInput[i];
      console.log("firstNum: " + firstNum);
    }


  }//End For Loop
  if (operator != null) {
    runningTotal = evaluate[operator](runningTotal, firstNum);
  }
  console.log("Returning runningTotal: " + runningTotal);
  if(runningTotal % 1 !== 0) {runningTotal = runningTotal.toFixed(4)}
  if(runningTotal.isString) {runningTotal = "ERROR"}
  return runningTotal;
}

module.exports = calculator;
