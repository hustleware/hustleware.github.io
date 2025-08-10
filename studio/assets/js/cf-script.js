window.onload = function () {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    theme: 'dark',
    showProgressBar: true,
  });
};

let searchParams = new URLSearchParams(window.location.search)
let param = searchParams.get('ref')
document.getElementById("ref").value = param;