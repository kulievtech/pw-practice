// Login Form
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const country = document.getElementById("country").value;
  const remember = document.getElementById("rememberMe").checked;
  loginMessage.textContent =
    username && password
      ? `Logged in as ${username} from ${country} ${
          remember ? "(Remember Me checked)" : ""
        }`
      : "Please enter username and password";
});

// Buttons
const btnOutput = document.getElementById("buttonOutput");
document
  .getElementById("btnClick")
  .addEventListener(
    "click",
    () => (btnOutput.textContent = "Click button clicked"),
  );
document
  .getElementById("btnDoubleClick")
  .addEventListener(
    "dblclick",
    () => (btnOutput.textContent = "Double click detected"),
  );
document
  .getElementById("disabledButton")
  .addEventListener(
    "click",
    () => (btnOutput.textContent = "Disabled button clicked"),
  );

// Form with Labels
const labelForm = document.getElementById("labelForm");
const labelFormOutput = document.getElementById("labelFormOutput");
labelForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  labelFormOutput.textContent =
    email && pass
      ? `Form submitted with email: ${email}`
      : "Please fill both fields";
});

// Search Box
const searchBox = document.getElementById("searchBox");
const searchOptions = Array.from(
  document.querySelectorAll("#searchOptions li"),
);
const searchOutput = document.getElementById("searchOutput");
searchBox.addEventListener("input", () => {
  const term = searchBox.value.toLowerCase();
  searchOptions.forEach(
    (li) =>
      (li.style.display = li.textContent.toLowerCase().includes(term)
        ? ""
        : "none"),
  );
  searchOutput.textContent = term ? `Filtering for: ${term}` : "";
});

// Checkboxes
const checkboxOutput = document.getElementById("checkboxOutput");
const checkboxes = document.querySelectorAll(".checkbox-group input");
checkboxes.forEach((c) =>
  c.addEventListener("change", () => {
    const selected = Array.from(checkboxes)
      .filter((c) => c.checked)
      .map((c) => c.value);
    checkboxOutput.textContent = `Checked: ${
      selected.length ? selected.join(", ") : "None"
    }`;
  }),
);

// Radio Buttons
const radioOutput = document.getElementById("radioOutput");
const radios = document.querySelectorAll(".radio-group input");
radios.forEach((r) =>
  r.addEventListener("change", () => {
    const selected = Array.from(radios).find((r) => r.checked);
    radioOutput.textContent = `Selected: ${selected ? selected.value : "None"}`;
  }),
);

// Dropdown
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownOutput = document.getElementById("dropdownOutput");
dropdownMenu.addEventListener("change", () => {
  dropdownOutput.textContent = dropdownMenu.value
    ? `Selected: ${dropdownMenu.value}`
    : "No option selected";
});

// Custom Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const dropdownDisplay = document.getElementById("dropdownDisplay");
  const dropdownOptions = document.getElementById("dropdownOptions");
  const customDropdownOutput = document.getElementById("customDropdownOutput");
  const customDropdownSearch = document.getElementById("customDropdownSearch");

  // Show/Hide dropdown & search input
  dropdownDisplay.addEventListener("click", () => {
    const isOpen = dropdownOptions.style.display === "block";
    dropdownOptions.style.display = isOpen ? "none" : "block";
    customDropdownSearch.style.display = isOpen ? "none" : "block";
    customDropdownSearch.value = "";
    filterOptions("");
    if (!isOpen) customDropdownSearch.focus();
  });

  // Filter dropdown options based on search input
  function filterOptions(term) {
    const options = dropdownOptions.querySelectorAll("li");
    options.forEach((li) => {
      li.style.display = li.textContent
        .toLowerCase()
        .includes(term.toLowerCase())
        ? "block"
        : "none";
    });
  }

  customDropdownSearch.addEventListener("input", (e) => {
    filterOptions(e.target.value);
  });

  // Selecting an option
  dropdownOptions.querySelectorAll("li").forEach((option) => {
    option.addEventListener("click", () => {
      dropdownDisplay.textContent = option.textContent;
      customDropdownOutput.textContent = "Selected city: " + option.textContent;
      dropdownOptions.style.display = "none";
      customDropdownSearch.style.display = "none";
    });
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-dropdown")) {
      dropdownOptions.style.display = "none";
      customDropdownSearch.style.display = "none";
    }
  });
});

// Multi-Select Dropdown
const multiDropdownDisplay = document.getElementById("multiDropdownDisplay");
const multiDropdownOptions = document.getElementById("multiDropdownOptions");
const multiDropdownOutput = document.getElementById("multiDropdownOutput");

// Toggle dropdown open/close
multiDropdownDisplay.addEventListener("click", () => {
  const isOpen = multiDropdownOptions.style.display === "block";
  multiDropdownOptions.style.display = isOpen ? "none" : "block";
});

// Clickable <li> toggles checkbox
multiDropdownOptions.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", (e) => {
    // Prevent double toggle if clicking directly on checkbox
    if (e.target.tagName !== "INPUT") {
      const checkbox = li.querySelector("input[type=checkbox]");
      checkbox.checked = !checkbox.checked;
    }

    // Update output
    const selected = Array.from(
      multiDropdownOptions.querySelectorAll("input[type=checkbox]:checked"),
    ).map((c) => c.value);

    multiDropdownOutput.textContent = selected.length
      ? `Selected hobbies: ${selected.join(", ")}`
      : "No hobbies selected";
  });
});

// Also update output if checkbox clicked directly
multiDropdownOptions.querySelectorAll("input[type=checkbox]").forEach((cb) => {
  cb.addEventListener("change", () => {
    const selected = Array.from(
      multiDropdownOptions.querySelectorAll("input[type=checkbox]:checked"),
    ).map((c) => c.value);

    multiDropdownOutput.textContent = selected.length
      ? `Selected hobbies: ${selected.join(", ")}`
      : "No hobbies selected";
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".multi-dropdown")) {
    multiDropdownOptions.style.display = "none";
  }
});

// Toggle Switch
const toggleSwitch = document.getElementById("toggleSwitch");
const toggleOutput = document.getElementById("toggleOutput");
toggleSwitch.addEventListener(
  "change",
  () =>
    (toggleOutput.textContent = `Toggle is ${toggleSwitch.checked ? "ON" : "OFF"}`),
);

// Textarea
const textarea = document.getElementById("textArea");
const textareaOutput = document.getElementById("textareaOutput");
textarea.addEventListener(
  "input",
  () => (textareaOutput.textContent = `Typed text: ${textarea.value}`),
);

// Button with data-testid
const testIdButton = document.getElementById("testIdButton");
const testIdOutput = document.getElementById("testIdOutput");
testIdButton.addEventListener(
  "click",
  () => (testIdOutput.textContent = "Data-testid button clicked"),
);

// Product List
const products = document.querySelectorAll(".product-item");
const selectedProducts = document.getElementById("selectedProducts");
products.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("selected");
    const selected = Array.from(
      document.querySelectorAll(".product-item.selected"),
    ).map((i) => i.textContent);
    selectedProducts.textContent = selected.length
      ? `Selected products: ${selected.join(", ")}`
      : "No products selected";
  }),
);
const productSearch = document.getElementById("productSearch");
productSearch.addEventListener("input", () => {
  const term = productSearch.value.toLowerCase();
  products.forEach(
    (p) =>
      (p.style.display = p.textContent.toLowerCase().includes(term)
        ? ""
        : "none"),
  );
});

// Hover Menu
const hoverOutput = document.getElementById("hoverOutput");
const submenuItem = document.getElementById("submenuItem");
submenuItem.addEventListener(
  "click",
  () => (hoverOutput.textContent = "Submenu clicked!"),
);

// Keyboard Actions
const keyboardInput = document.getElementById("keyboardInput");
const keyboardOutput = document.getElementById("keyboardOutput");
keyboardInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    keyboardOutput.textContent = `${keyboardInput.value} + Enter pressed`;
    e.preventDefault();
  }
});
keyboardInput.addEventListener("input", () => {
  keyboardOutput.textContent = keyboardInput.value;
});

// Mouse Actions Drag
const mouseBox = document.getElementById("mouseBox");
const dropZone = document.getElementById("dropZone");
const mouseOutput = document.getElementById("mouseOutput");

mouseBox.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const offsetX = e.clientX - mouseBox.getBoundingClientRect().left;
  const offsetY = e.clientY - mouseBox.getBoundingClientRect().top;

  function mouseMoveHandler(e) {
    mouseBox.style.left =
      e.clientX -
      offsetX -
      mouseBox.parentElement.getBoundingClientRect().left +
      "px";
    mouseBox.style.top =
      e.clientY -
      offsetY -
      mouseBox.parentElement.getBoundingClientRect().top +
      "px";
  }

  function mouseUpHandler() {
    const boxRect = mouseBox.getBoundingClientRect();
    const zoneRect = dropZone.getBoundingClientRect();

    if (
      boxRect.left + boxRect.width / 2 > zoneRect.left &&
      boxRect.left + boxRect.width / 2 < zoneRect.right &&
      boxRect.top + boxRect.height / 2 > zoneRect.top &&
      boxRect.top + boxRect.height / 2 < zoneRect.bottom
    ) {
      mouseOutput.textContent = "Mouse action: Drag & Drop successful!";
    } else {
      mouseOutput.textContent = "Drag & Drop failed";
      mouseBox.style.left = "0px";
      mouseBox.style.top = "0px";
    }

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  }

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
});

// Todo Drag & Drop
const dragItems = document.querySelectorAll(".drag-item");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");
let draggedItem = null;

dragItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    draggedItem = item;
    item.classList.add("dragging");
  });
  item.addEventListener("dragend", () => {
    draggedItem = null;
    item.classList.remove("dragging");
  });
});

function dragOverHandler(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeaveHandler() {
  this.classList.remove("over");
}

function dropHandler() {
  this.classList.remove("over");
  if (draggedItem) {
    this.appendChild(draggedItem);
  }
}

[todoList, doneList].forEach((list) => {
  list.addEventListener("dragover", dragOverHandler);
  list.addEventListener("dragleave", dragLeaveHandler);
  list.addEventListener("drop", dropHandler);
});

// WAITING FOR ELEMENTS
setTimeout(
  () => (document.getElementById("welcomeMessage").style.display = "block"),
  1000,
);
document.getElementById("loadDataButton").addEventListener("click", () => {
  const dataDiv = document.getElementById("data");
  dataDiv.textContent = "Loading data...";
  setTimeout(() => (dataDiv.textContent = "Data loaded successfully!"), 1500);
});
document.getElementById("nextStepButton").addEventListener("click", () => {
  const btn = document.getElementById("nextStepButton");
  btn.disabled = true;
  btn.textContent = "Processing...";
  setTimeout(() => {
    btn.textContent = "Step Completed!";
    btn.disabled = false;
  }, 2000);
});

// New Tab / Window
const openNewTabBtn = document.getElementById("openNewTabBtn");
const newTabOutput = document.getElementById("newTabOutput");

openNewTabBtn.addEventListener("click", () => {
  const newWindow = window.open("", "_blank");

  newWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>New Tab Page</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            text-align: center;
          }
          h1 {
            color: #764ba2;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1 id="newTabTitle">Welcome to the New Tab</h1>
          <p>This page was opened in a new tab.</p>
        </div>
      </body>
    </html>
  `);

  newWindow.document.close();
  newTabOutput.textContent = "New tab opened successfully";
});

// File Upload
const fileUpload = document.getElementById("fileUpload");
const uploadOutput = document.getElementById("uploadOutput");

fileUpload.addEventListener("change", () => {
  const files = Array.from(fileUpload.files); // convert FileList to array
  if (files.length === 0) {
    uploadOutput.textContent = "No file selected";
  } else {
    // Display all selected file names
    uploadOutput.textContent =
      "Selected files: " + files.map((f) => f.name).join(", ");
  }
});

// Single File Download
const singleDownloadBtn = document.getElementById("singleDownloadBtn");
const singleDownloadOutput = document.getElementById("singleDownloadOutput");

singleDownloadBtn.addEventListener("click", () => {
  const content =
    "This is a single sample file for Playwright download practice.";
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "single_sample.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  singleDownloadOutput.textContent = "Single file download initiated!";
});

// Multiple Files Download
const multiDownloadBtn = document.getElementById("multiDownloadBtn");
const multiDownloadOutput = document.getElementById("multiDownloadOutput");

multiDownloadBtn.addEventListener("click", () => {
  const files = [
    {
      name: "file1.txt",
      content: "This is file 1 for Playwright download practice.",
    },
    {
      name: "file2.txt",
      content: "This is file 2 for Playwright download practice.",
    },
    {
      name: "file3.txt",
      content: "This is file 3 for Playwright download practice.",
    },
  ];

  files.forEach((file, index) => {
    setTimeout(() => {
      const blob = new Blob([file.content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // Update output only after the last file
      if (index === files.length - 1) {
        multiDownloadOutput.textContent = "Three files downloaded!";
      }
    }, index * 200); // 200ms delay between each download
  });
});

// =====================
// POPUPS & ALERTS
// =====================

// Alert
document.getElementById("alertBtn").addEventListener("click", () => {
  alert("Hello! This is a simple alert dialog.");
});

// Confirm
document.getElementById("confirmBtn").addEventListener("click", () => {
  const result = confirm("Do you want to continue?");
  document.getElementById("confirmResult").textContent = result
    ? "Accepted"
    : "Cancelled";
});

// Prompt
document.getElementById("promptBtn").addEventListener("click", () => {
  const name = prompt("Please enter your name:");
  document.getElementById("promptResult").textContent = name
    ? `Hello, ${name}`
    : "No name entered";
});

// Popup Window
document.getElementById("popupBtn").addEventListener("click", () => {
  const popup = window.open("", "_blank", "width=500,height=400");

  popup.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Popup Window</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f4f6f8;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .card {
            background: white;
            padding: 25px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          }
          button {
            margin-top: 15px;
            padding: 10px 15px;
            background: #764ba2;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h2 id="popupTitle">Popup Page</h2>
          <p>This is a popup window.</p>
          <button onclick="window.close()">Close Popup</button>
        </div>
      </body>
    </html>
  `);

  popup.document.close();
  document.getElementById("popupResult").textContent =
    "Popup window opened successfully";
});
