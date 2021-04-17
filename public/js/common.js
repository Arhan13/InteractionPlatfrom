//Shared code of the project

$("#postTextarea").keyup((event) => {
  var textbox = $(event.target);
  var value = textbox.val().trim();

  var submitButton = $("submitPostButton");

  if (submitButton.length == 0) {
    //Not for the final user
    return alert("No submit button found");
  }
  if (value == "") {
    submitButton.prop("disabled", true);
  }

  submitButton.prop("disabled", false);
});
