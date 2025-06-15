// your JS code here. If required.
document.getElementById("user-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission

    const firstName = document.getElementsByName("First Name")[0].value.trim();
  const lastName = document.getElementsByName("Last Name")[0].value.trim();
  const phone = document.getElementsByName("Phone Number")[0].value.trim();
  const email = document.getElementsByName("Email ID")[0].value.trim();

  const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`;
  alert(alertMessage);
});
