$(document).ready(function () {
    // Get the user's name from localStorage and display it in the header
    var userName = localStorage.getItem('userName');
    if (userName) {
      $('#userName').text(userName);
    }
  
    // Function to validate input fields
    function validateInputFields(number1, number2) {
      var error1 = $('#number1Error');
      var error2 = $('#number2Error');
      var valid = true;
      var isInput1Empty = false;
      var isInput2Empty = false;
  
      // Reset error messages
      error1.text('');
      error2.text('');
      
      // Null checks
      if (number1.trim() === '') {
        isInput1Empty = true;
        error1.text('Number 1 is required.');
        valid = false;
      }
      if (number2.trim() === '') {
        isInput2Empty = true;
        error2.text('Number 2 is required.');
        valid = false;
      }
  
      // Special character check
      var pattern = /^[0-9]+$/;
      if (!pattern.test(number1) && !isInput1Empty) {
        error1.text('Number 1 must only contain digits.');
        valid = false;
      }
      if (!pattern.test(number2) & !isInput2Empty) {
        error2.text('Number 2 must only contain digits.');
        valid = false;
      }
  
      return valid;
    }

    
  
    // Event handlers for the calculation buttons
    $('#addButton, #subtractButton, #multiplyButton, #divideButton').click((event) => {
      var number1 = $('#number1').val();
      var number2 = $('#number2').val();
      var resultField = $('#result');
  
      // Validate the input fields
      if (!validateInputFields(number1, number2)) {
        resultField.val(''); // Clear the result if input is invalid
        return;
      }

      var selectedOperation = event.target.id;
  
      // Perform the calculation based on the clicked button
      switch (selectedOperation) {
        case 'addButton':
          resultField.val(parseFloat(number1) + parseFloat(number2));
          break;
        case 'subtractButton':
          resultField.val(parseFloat(number1) - parseFloat(number2));
          break;
        case 'multiplyButton':
          resultField.val(parseFloat(number1) * parseFloat(number2));
          break;
        case 'divideButton':
          if (parseFloat(number2) === 0) {
            resultField.val('Infinite');
          } else {
            resultField.val(parseFloat(number1) / parseFloat(number2));
          }
          break;
        default:
          resultField.val('');
      }
    });
  });
  