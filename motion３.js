var passcode = "touchpass"

document.getElementById("pass").addEventListener("click", function () {
  var textbox = document.getElementById("message");
  var value = textbox.value;
  console.log(value);

  if (value == "passcode") {
    console.log("true")
    window.location = 'https://www.google.co.jp/';
} else{
  alert("パスワードが一致しません。パスワードを忘れた場合は開発者に問い合わせてください。")
}

}, false);
