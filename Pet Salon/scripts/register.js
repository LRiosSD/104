
let saloon={
    name:"The Fashion Pet",
    address:{
        number:"9876",
        street:"K St",
        city:"San Diego",
        state:"CA",
        zip:"92101",
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]
}
//name, age, gender, breed, service, owner name, contact phone
function displayInfo(){
    //display the information of the pet saloon address on the footer
    document.getElementById("footer-info").innerHTML=`    
    <br>
    <br>
    <P>${saloon.name}
    <p>${saloon.address.number} ${saloon.address.street}</p>
    <p>${saloon.address.city}, ${saloon.address.state} ZIP code: ${saloon.address.zip}</p>
    `;
}


// function Service(serviceA, serviceB, serviceC){
//     this.serviceA = serviceA;
//     this.serviceB = serviceB;
//     this.serviceC = serviceC;
// }

let x=0;

// constructor
//          <----- Local variables -------------------->
function Pet(petName, age, gender, breed, service, owner, phone){
    this.name = petName;
    this.age = age;
    this.breed =  breed;
    this.gender = gender;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
    this.id=x++;
}

function checkInput(variable, id, isValid)
{
    if(variable.length<1)
    {
        document.getElementById(id).classList.add("error");
        return false;
    }
    else
    {
        document.getElementById(id).classList.remove("error");
        //if some input before was not a valid input, we return false
        return true && isValid;
    }
}

function showPetsCards(){
    document.getElementById("petList").innerHTML = '';
    for(let i = 0; i<saloon.pets.length; i++)
    {
        document.getElementById("petList").innerHTML += createCard(saloon.pets[i]);
    }
}


function createCard(pet){
    return `
    <div id="${pet.id}" class="card my-card">
    <h2>${pet.name}</h2>
    <label>Age: ${pet.age}</label>
    <label>Breed: ${pet.breed}</label>
    <label>Gender: ${pet.gender}</label>
    <label>Service: ${pet.service}</label>
    <label>Owner: ${pet.owner}</label>
    <label>Phone: ${pet.phone}</label>
    <button class="bth btn-danger btn-sm" onclick="removePet(${pet.id});">delete</button>
    </div>
    `;
}



function getInfo(){
    let isValid = true;

    let petName = document.getElementById("txtPetName").value;
    isValid = checkInput(petName, "txtPetName", isValid);

    let age = document.getElementById("nbAge").value;
    isValid = checkInput(age, "nbAge", isValid);
    
    let gender = document.getElementById("dlGender").value;
    isValid = checkInput(gender, "dlGender", isValid);

    let breed = document.getElementById("dlBreed").value;
    isValid = checkInput(breed, "dlBreed", isValid);

    let service = document.getElementById("dlServices").value;
    isValid = checkInput(service, "dlServices", isValid);

    let owner = document.getElementById("txtOwner").value;
    isValid = checkInput(owner, "txtOwner", isValid);

    let phone = document.getElementById("pnOwner").value;
    isValid = checkInput(phone, "pnOwner",isValid);

    
    // we are calling the constructor here
    if(isValid == true)
    {
        let pet = new Pet(petName, age, gender, breed, service, owner, phone);
        saloon.pets.push(pet);
        console.log(pet);
        document.getElementById("petInfo").reset();
        showPetsCards();
    }
}


function removePet(index){
    //search the pet
    saloon.pets.forEach(function callback (pet,value){
        if(index===pet.id){
            console.log("I found it in the position",value);
            saloon.pets.splice(value,1);
        } });
    //remove the pet from the array
    //remove the pet from the html
    console.log("Removing pet", index);
    document.getElementById(index).remove();//remove the pet from html
}


function searchPet(){
    //get the value from the input search and store in variable
    let searchstring=document.getElementById("searchInput").value;

    saloon.pets.forEach(function callback(pet,value){
        if(searchstring.toLowerCase()===pet.name.toLowerCase()){
            document.getElementById(pet.id).classList.add("highlight");
        }
    });
}

function init(){
    displayInfo();
    let scooby=new Pet("Scooby", 50, "Male", "Dane","Grooming", "Shaggy", "555-55-5555");
    saloon.pets.push(scooby);
    showPetsCards();
}

function displayPetNames(){
    
}

window.onload=init;
