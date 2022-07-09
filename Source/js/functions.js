function atualizar(){
    var textContent = document.getElementById('editor-textarea').value
    document.getElementById('viewer').srcdoc= textContent
}

function save() {
  window.open("https://dev--html.abhay557.autocode.gg/")
     alert("Cleared The Code: " + copyText.value);
}

function copy() {
 var copyText = document.getElementById("editor-textarea");
copyText.select();
navigator.clipboard.writeText(copyText.value);
 alert("Copied The Code: " + copyText.value);
}

function download() {
 var copyText = document.getElementById("editor-textarea");
copyText.select();
var hiddenElement = document.createElement('a');
hiddenElement.href = 'data:attachment/text,' + (copyText.value);
hiddenElement.target = '_blank';
hiddenElement.download = 'WebHtml.txt';
hiddenElement.click();
}

function check() {
  document.getElementById("editor-textarea").style.color = "#00FFFF"; 
}