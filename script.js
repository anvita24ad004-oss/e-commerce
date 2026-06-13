let customers =
JSON.parse(localStorage.getItem("customers")) || [];

let selectedId = null;

function displayCustomers() {

    let table =
    document.getElementById("customerTable");

    table.innerHTML = "";

    customers.forEach((customer) => {

        table.innerHTML += `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.address}</td>

            <td>
                <button onclick="editCustomer(${customer.id})">
                    Edit
                </button>

                <button onclick="deleteCustomer(${customer.id})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

    localStorage.setItem(
        "customers",
        JSON.stringify(customers)
    );
}

function addCustomer(){

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let phone =
    document.getElementById("phone").value;

    let address =
    document.getElementById("address").value;

    let customer = {
        id: Date.now(),
        name,
        email,
        phone,
        address
    };

    customers.push(customer);

    alert("Customer Inserted");

    displayCustomers();
}

function editCustomer(id){

    let customer =
    customers.find(c => c.id === id);

    document.getElementById("name").value =
    customer.name;

    document.getElementById("email").value =
    customer.email;

    document.getElementById("phone").value =
    customer.phone;

    document.getElementById("address").value =
    customer.address;

    selectedId = id;
}

function updateCustomer(){

    if(selectedId == null){
        alert("Select a record first");
        return;
    }

    let customer =
    customers.find(c => c.id === selectedId);

    customer.name =
    document.getElementById("name").value;

    customer.email =
    document.getElementById("email").value;

    customer.phone =
    document.getElementById("phone").value;

    customer.address =
    document.getElementById("address").value;

    alert("Record Updated");

    displayCustomers();
}

function deleteCustomer(id){

    customers =
    customers.filter(c => c.id !== id);

    alert("Record Deleted");

    displayCustomers();
}

/* Stored Procedure Demo */

function countCustomers(){

    let total = customers.length;

    document.getElementById("result")
    .innerHTML =
    "Total Customers = " + total;
}

/* Trigger Demo */

window.addEventListener("storage", () => {
    alert("Trigger Executed");
});

displayCustomers();