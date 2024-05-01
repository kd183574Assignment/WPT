function Addition() {
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);
    var result = number1 + number2;
    console.log(result);
    var res = document.getElementById("result");
    res.value = result;
  }
  
  function Subtraction() {
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);
    var result = number1 - number2;
    console.log(result);
    var res = document.getElementById("result");
    res.value = result;
  }
  
  function Multiplication() {
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);
    var result = number1 * number2;
    console.log(result);
    var res = document.getElementById("result");
    res.value = result;
  }
  
  function Division() {
    var number1 = parseInt(document.getElementById("num1").value);
    var number2 = parseInt(document.getElementById("num2").value);
    var result = number1 / number2;
    console.log(result);
    var res = document.getElementById("result");
    res.value = result;
  }