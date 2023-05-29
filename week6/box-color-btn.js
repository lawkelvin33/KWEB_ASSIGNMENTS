function changeBoxColor() {
  let box = document.body.getElementsByClassName("box");
  box[1].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

/*Code A.8을 참고하여 버튼을 클릭하면 다섯 개 상자 중 두 번째 상자의 색을 변경하는 함수를 box-color-btn.js
의 changeBoxColor 함수에 작성하여라.*/
