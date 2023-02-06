// let counter = 0;
// let text = document.getElementById('text');
//  function OnButtonClick(){
//
//      let spans = document.getElementsByTagName('span');
//      for(let i = 0; i<spans.length; i++){
//          console.log(spans[i].innerHTML);
//      }
//     counter++;
//     el.innerHTML = "Вы запустили ядерных боеголовок: " + counter;
//     console.log(counter);
// }

document.getElementById('main-form').addEventListener("submit", checkForm);
function checkForm(event) {
    event.preventDefault();
    let el = document.getElementById('main-form');

    let name = el.name.value;
    let password = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;

    let fail = "";

if(name == "" || password == "" || repass == "" || state == "") fail = "Заполните все поля";
    else if(name.length < 1 || name.length > 20) fail = "Введите корректное имя";
    else if(password != repass) fail = "Пароли не совпадают";
    else if(password.split("%").length > 1) fail = "Некорректный пароль";

    if(fail != "") document.getElementById('error').innerHTML = fail;
    else alert("Поля заполнены корректно");
}



