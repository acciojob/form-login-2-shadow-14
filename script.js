// your JS code here. If required.
document.getElementById("user-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission

  const firstName = document.getElementById("First Name").value.trim();
  const lastName = document.getElementById("Last Name").value.trim();
  const phone = document.getElementById("Phone Number").value.trim();
  const email = document.getElementById("Email ID").value.trim();

  const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`;
  alert(alertMessage);
});
