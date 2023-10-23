window.onload = function () {
  var conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    theme: 'dark',
    showProgressBar: true,
    // submitCallback: function () {
    //   conversationalForm.addRobotChatResponse(
    //     "That is the end of the form. Thank you."
    //   );
    // }
  });
};

let searchParams = new URLSearchParams(window.location.search)
let param = searchParams.get('subject')
document.getElementById("subject").value = param;