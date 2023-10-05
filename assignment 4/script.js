const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
const regexAlphanumericOnly = /^[a-zA-Z0-9 ]+$/;

function validateAlphanumericField(event) {
  var inputValue = event.target.value;
  var element = document.getElementById(event.target.id);
  var errorDiv =
    element.nextElementSibling.nextElementSibling.nextElementSibling; //getting next error div

  if (!regexAlphanumericOnly.test(inputValue) && inputValue !== "") {
    element.classList.add("invalid");
    errorDiv.classList.remove("hidden");
    return false;
  }
  element.classList.remove("invalid");
  errorDiv.classList.add("hidden");
  return true;
}

function validateRadioSelection() {
}

function validateCheckboxes() { 
}

function validateEmail() {
  var emailInput = document.getElementById("emailId");
  var email = emailInput.value;
  var regexEmail = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;

  if (!regexEmail.test(email)) {
    emailInput.classList.add("invalid");
    var errorDiv = document.getElementById("error_email");
    errorDiv.classList.remove("hidden");
    return false;
  }

  emailInput.classList.remove("invalid");
  var errorDiv = document.getElementById("error_email");
  errorDiv.classList.add("hidden");

  return true;
}

function validatePhoneNumber() {
  var phoneNumberInput = document.getElementById("phoneNumber");
  var phoneNumber = phoneNumberInput.value;
  if (!regExPhone.test(phoneNumber)) {
    phoneNumberInput.classList.add("invalid");
    var errorDiv = document.getElementById("error_phone_number");
    errorDiv.classList.remove("hidden");
    return false;
  }
  phoneNumberInput.classList.remove("invalid");
  var errorDiv = document.getElementById("error_phone_number");
  errorDiv.classList.add("hidden");
  return true;
}

function validateZipCode() {
  var zipCodeInput = document.getElementById("zipcode");
  var zipCode = zipCodeInput.value;
  var regexPattern = /^[0-9]{6}$/;

  if (!regexPattern.test(zipCode)) {
    zipCodeInput.classList.add("invalid");
    var errorDiv = document.getElementById("error_zipcode");
    errorDiv.classList.remove("hidden");
    return false;
  }

  zipCodeInput.classList.remove("invalid");
  var errorDiv = document.getElementById("error_zipcode");
  errorDiv.classList.add("hidden");
  return true;
}

function changeDropdownSelection() {
  var select = document.getElementById("mySelect");
  var selectedOption = select.options[select.selectedIndex].text;

  // Update the label of the checkbox
  var checkboxLabel = document.getElementById("checkboxLabel");
  checkboxLabel.innerText = selectedOption;
}

function toggleSubmitButton() {
  var allFieldsFilled = true;
  var formFields = document.querySelectorAll(
    'input[type="text"], input[type="radio"], select, textarea'
  );

  formFields.forEach(function (field) {
    if (field.id !== "streetAddress2" && field.value.trim() === "") {
      allFieldsFilled = false;
    }
  });

  // Enable or disable the submit button based on the condition
  var submitButton = document.getElementById("submitBtn");
  submitButton.disabled = !allFieldsFilled;
}

function saveUserInfo() {
  // Gather data from the form fields
  var title = document.querySelector('input[name="title"]:checked').value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var emailId = document.getElementById("emailId").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var streetAddress1 = document.getElementById("streetAddress1").value;
  var streetAddress2 = document.getElementById("streetAddress2").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zipcode = document.getElementById("zipcode").value;
  var comments = document.getElementById("comments").value;
  var selectedDropdownValue = document.getElementById("mySelect").value;
  var dynamicCheckbox = document.getElementById("dynamicCheckbox").checked;

  // Create a new row in the HTML table
  var table = document.getElementById("resultsTable");
  table.classList.remove("tblHidden");

  // Create an array with the form field values
  var formFieldValues = [
    title,
    firstName,
    lastName,
    emailId,
    phoneNumber,
    streetAddress1,
    streetAddress2,
    city,
    state,
    zipcode,
    comments,
    selectedDropdownValue,
    dynamicCheckbox ? "Yes" : "No",
  ];

  // Create a new table row element
  var newRow = document.createElement("tr");

  // Loop through the form field values and create/append table data (td) elements
  for (var i = 0; i < formFieldValues.length; i++) {
    var td = document.createElement("td");
    td.textContent = formFieldValues[i];
    newRow.appendChild(td);
  }

  // Append the new row to the table
  var tableBody = document.querySelector("table tbody");
  tableBody.appendChild(newRow);

  // Clear the form fields
  document.querySelector('input[name="title"]:checked').checked = false;
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("emailId").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("streetAddress1").value = "";
  document.getElementById("streetAddress2").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("zipcode").value = "";
  document.getElementById("comments").value = "";
  document.getElementById("mySelect").value = "option1";
  document.getElementById("dynamicCheckbox").checked = false;

  // Disable the submit button
  document.getElementById("submitBtn").disabled = true;
}
