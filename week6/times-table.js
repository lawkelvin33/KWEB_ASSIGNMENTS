function displayTimes() {
  let input = document.getElementById("number").value;
  let result = document.getElementById("times-result");
  if (input >= 1 && input <= 9) {
    var str = "";
    for (var i = 1; i <= 9; i++) {
      str += input + " x " + i + " = " + input * i + "<br>";
    }
    result.innerHTML = str;
  } else {
    result.innerHTML = "Input Error!";
  }
}

/*Code A.7을 참고하여, 버튼을 클릭하면 input에 입력된 값이 1 이상 9 이하의 자연수면 입력된 값의 구구단을
#times-result에 출력하고, 아닌 경우에는 Input Error!를 출력하는 함수를 times-table.js의 displayTimes
함수에 작성하여라. input 태그에 입력된 값은 value 속성을 통해 접근할 수 있음을 이용하여라.*/
