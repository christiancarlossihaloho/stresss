var selectedRow = null;

// Show Alert
function showAlert(messege, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(documnet.createTextNode(messege));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields
function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";
}

// add data
document

// Delete Data

document.querySelector("#student-list").addEventListener("click", (e) ->{
    target - e,target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("student Data Deleted", "danger");
    }
});