// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11(e) {
  document.querySelector('.key[data="' + e.code + '"]').classList.add("active");
  // if(document.querySelectorAll('.capslock').onkeydown){
  //     document.querySelector('.capslock').classList.toggle('active')
  // }

  if (event.getModifierState("CapsLock") == true) {
    document.querySelector(".capslock").classList.toggle("active");
  }
}
document.querySelector(".i-11").onkeydown = t11;

function keyUp() {
  document.querySelector(".out-11").innerHTML = document.querySelector(
    ".i-11"
  ).value;
  document.querySelectorAll(".key").forEach(function(elem) {
    elem.classList.remove("active");
  });
}
document.querySelector(".i-11").onkeyup = keyUp;

// ваше событие здесь!!!
