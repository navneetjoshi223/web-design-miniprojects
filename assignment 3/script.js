//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");


var studentCt = document.getElementsByClassName("studentInfo").length;
var teacherCt = studentCt;

/* Logic for Full name and NUID */
var fullName = "Navneet Joshi";
var NUID = "002697887";

function onPageLoad() {
  document.getElementById("fullName").textContent = fullName;
  document.getElementById("NUID").textContent = NUID;
}

function toggleDropDownTextArea(event) {

  var containingRow = event.target.parentElement.parentElement;
  var adjacentdropDownTextArea = containingRow.nextElementSibling;
  adjacentdropDownTextArea.style.display === "block"
    ? (adjacentdropDownTextArea.style.display = "none")
    : (adjacentdropDownTextArea.style.display = "block");
}

function toggleCheckboxSelection(event) {
  // Set background color to yellow if checked
  var containingRow = event.target.parentElement.parentElement;
  event.target.checked ? containingRow.classList.add("selected-row") : containingRow.classList.remove("selected-row");

  setCheckboxAndSubmitBtnState();  

  // Dynamically add/remove Delete and Edit buttons in 2 new columns
  if(event.target.checked) {
    var deleteCol = document.createElement("td");
    deleteCol.innerHTML = `<button class="btnDelete" onClick="deleteStudent(event)">Delete</button>`;
    var editCol = document.createElement("td");
    editCol.innerHTML = `<button class="btnEdit" onClick="editStudent(event)">Edit</button>`;
    containingRow.appendChild(deleteCol);
    containingRow.appendChild(editCol);
    
  } else {
    console.log(containingRow);
    var tdElementsToRemove = containingRow.querySelectorAll("td:nth-last-child(-n+2)");
    tdElementsToRemove.forEach(td => {
      td.parentNode.removeChild(td);
    });

  }
  
}

function addStudent() {
  try {
    // Select the table
    const table = document.querySelector("table");
    console.log(studentCt);
    studentCt++;
    teacherCt++;
    // Creating new row for "Student Info"
    const studentInfoRow = document.createElement("tr");
    studentInfoRow.className = "studentInfo";
    studentInfoRow.id = `student${studentCt}`;
    studentInfoRow.innerHTML = `
        <td><input type="checkbox" class="chkBox" onClick="toggleCheckboxSelection(event)" /><br /><br /><img src="down.png" onClick="toggleDropDownTextArea(event)" width="25px" /></td>
        <td>Student ${studentCt}</td>
        <td>Teacher ${teacherCt}</td>
        <td>Approved</td>
        <td>Fall</td>
        <td>TA</td>
        <td>12345</td>
        <td>100%</td>
    `;

    // Creating new row for "Drop Down Text Area"
    const dropDownRow = document.createElement("tr");
    dropDownRow.className = "dropDownTextArea";
    dropDownRow.innerHTML = `
        <td colspan="8">
            Advisor:<br /><br />
            Award Details<br />
            Summer 1-2014(TA)<br />
            Budget Number: <br />
            Tuition Number: <br />
            Comments:<br /><br /><br />
            Award Status:<br /><br /><br />
        </td>
    `;

    // Append the new rows to the table body
    const tbody = document.querySelector("tbody");
    tbody.appendChild(studentInfoRow);
    tbody.appendChild(dropDownRow);

    alert(`Student ${studentCt} Record added successfully`);
  } catch (error) {
    alert("Error while adding student record");
  }
}

function deleteStudent(event) {
  console.log(event.target);
  var rowToDelete = event.target.parentElement.parentElement;
  var tdStudent = rowToDelete.querySelectorAll('td');
  var studentName = tdStudent[1].innerText;
  const confirmDeletion = confirm(`Do you want to delete ${studentName} details?`);
  if(confirmDeletion) {
    rowToDelete.remove();
    alert(`${studentName} Record deleted successfully`);
    //check the checkboxes clicked to see if header is hidden again
    setCheckboxAndSubmitBtnState();
  }
}

function editStudent(event) {
  console.log(event.target);
  var rowToDelete = event.target.parentElement.parentElement;
  var tdStudent = rowToDelete.querySelectorAll('td');
  var studentName = tdStudent[1].innerText;
  const userInput = prompt(`Edit details of ${studentName}`);
  if (userInput !== null && userInput !== "") {
    alert(`${studentName} data updated successfully`);
  }
}

function setCheckboxAndSubmitBtnState() {
  // If any checkbox is clicked, change Submit button to orange and clickable
  const checkboxes = document.querySelectorAll('.chkBox');
  const submitBtn = document.getElementById('button');
  var editAndDeleteCols = document.querySelectorAll('th:nth-last-child(-n+2)');
  var isAnyChkboxChecked = false;
  checkboxes.forEach(checkbox => {
    if(checkbox.checked) {
      isAnyChkboxChecked = true;
      submitBtn.classList.remove('btnDefault');
      submitBtn.classList.add('btnClickable');
      submitBtn.removeAttribute('disabled');
      // show the edit and delete table headers if any checkbox is clicked
      editAndDeleteCols.forEach(th => {
        th.classList.remove("colHidden");
      });
      return;
    }
  });
  if(!isAnyChkboxChecked) {
    submitBtn.classList.remove('btnClickable');
    submitBtn.classList.add('btnDefault');
    submitBtn.setAttribute('disabled', true);
    // hide edit and delete table headers if no checkboxes are clicked
    editAndDeleteCols.forEach(th => {
      th.classList.add("colHidden");
    });
  }
}

window.onload = onPageLoad;
