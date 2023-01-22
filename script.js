const submitButton = document.getElementById("submit-now");

submitButton.addEventListener("click", () => {
  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const massageInput = document.getElementById("massage-area");
  const errorData = document.getElementById("error-text");
  const sucessFull = document.getElementById("sucess-text");

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const massageValue = massageInput.value;

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    massageValue: massageValue,
  };

  if (nameValue && emailValue && massageValue) {
    // emailjs.send(service_anik01, template_q8pq0pp, templateParams, atJ7MCRFSQDPvQOmz);
    errorData.innerHTML = "";
    nameInput.value = "";
    emailInput.value = "";
    massageInput.value = "";
    sucessFull.innerHTML =
      '<P class="text-success">Your Massage Send Sucessfully</P>';
  } else {
    errorData.innerHTML = '<p class="text-warning" >Please Fill Up Data</p>';
    sucessFull.innerHTML = "";
  }
});
