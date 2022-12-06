var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["apellido"] = document.getElementById("apellido").value;
    formData["edad"] = document.getElementById("edad").value;
    formData["telefono"] = document.getElementById("telefono").value;
    formData["patologia"] = document.getElementById("patologia").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.apellido;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.edad;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.telefono;
    cell5= newRow.insertCell(4);
        cell5.innerHTML = data.patologia;
    cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("apellido").value = selectedRow.cells[1].innerHTML;
    document.getElementById("edad").value = selectedRow.cells[2].innerHTML;
    document.getElementById("telefono").value = selectedRow.cells[3].innerHTML;
    document.getElementById("patologia").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.apellido;
    selectedRow.cells[2].innerHTML = formData.edad;
    selectedRow.cells[3].innerHTML = formData.telefono;
    selectedRow.cells[4].innerHTML = formData.patologia;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("edad").value = '';
    document.getElementById("telefono").value = '';
    document.getElementById("patologia").value = '';
    selectedRow = null;
}
