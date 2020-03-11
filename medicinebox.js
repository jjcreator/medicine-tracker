// Global declarations

let datesArray = Array.from(document.querySelectorAll(".expiration-date"));
let namesArray = Array.from(document.querySelectorAll(".medicine-name"));
let typesArray = Array.from(document.querySelectorAll(".medicine-type"));
let dateMethod = "fromLow";
let nameMethod = "fromA";
let descMethod = "fromA"
let expirationButton = document.querySelector("#by-expiration");
let alphabeticalButton = document.querySelector("#alphabetical");
let typeButton = document.querySelector("#by-description");
let hideButton = document.querySelector("#hide-button");
let dateMenu = document.querySelector("#dateMenu");
let medicineBox = document.querySelector("#medicine-box");
let searchInput = document.querySelector("#search-bar");


// sorting by date
const sortByDate = () => {
    nameMethod = "fromA";
    descMethod = "fromA"
    let toggle;
    if (dateMethod === "fromLow") {
        toggle = 1;
        dateMethod = "fromHigh"
    }
    else if (dateMethod === "fromHigh") {
        toggle = -1;
        dateMethod = "fromLow";
    }

    datesArray.sort((a, b) => {
        let expirationDate1 = new Date;
        expirationDate1.setFullYear(a.innerText.slice(6,10));
        expirationDate1.setMonth(a.innerText.slice(3,5)-1);
        expirationDate1.setDate(a.innerText.slice(0,2));
        
        let expirationDate2 = new Date;
        expirationDate2.setFullYear(b.innerText.slice(6,10));
        expirationDate2.setMonth(b.innerText.slice(3,5)-1);
        expirationDate2.setDate(b.innerText.slice(0,2));

        if (expirationDate1 > expirationDate2) return toggle;
        else return toggle * -1;
    });

    medicineBox.innerHTML = "";
    datesArray.forEach((item)=> {
        if (item.parentElement.style.display != "none") {
            medicineBox.appendChild(item.parentElement);
        }
    });
}

expirationButton.addEventListener("click", sortByDate);

//sorting by name
const sortByName = () => {
    descMethod = "fromA"
    dateMethod = "fromLow"
    let toggle;
    if (nameMethod === "fromA") {
    toggle = 1;
    nameMethod = "fromZ"
    }
    else if (nameMethod === "fromZ") {
    toggle = -1;
        nameMethod = "fromA";
    }

    namesArray.sort((a,b) => {
            let firstName = a.innerText;
            let secondName = b.innerText;
            if (firstName > secondName) return toggle;
            else return -toggle; 
        });
    medicineBox.innerHTML = "";
    namesArray.forEach((item)=> {
        if (item.parentElement.style.display != "none") {
            medicineBox.appendChild(item.parentElement);
        }
        
    });
}

alphabeticalButton.addEventListener("click", sortByName);

//sorting by description
const sortByDescription= () => {
    dateMethod = "fromLow";
    nameMethod = "fromA";
    let toggle;
    if (descMethod === "fromA") {
    toggle = 1;
    descMethod = "fromZ";
    }
    else if (descMethod === "fromZ") {
    toggle = -1;
        descMethod = "fromA";
    }

    typesArray.sort((a,b) => {
        let firstName = a.innerText;
        let secondName = b.innerText;
        if (firstName > secondName) return toggle;
        else return -toggle;
    });
    medicineBox.innerHTML = "";
    typesArray.forEach((item)=> {
        if (item.parentElement.style.display != "none") {
            medicineBox.appendChild(item.parentElement);
        }
    });
}

typeButton.addEventListener("click", sortByDescription);


// display todays date
const dateUpdate = () => {
    let today = new Date;
    today = today.toLocaleDateString();
    document.querySelector("#current-date").innerText = today;
}




// highlight soon expiring / expired 
const highlight = () => {
    datesArray.forEach((item)=> {
        let today = new Date;
        let thisYear = today.getFullYear();
        let expYear = item.innerText.slice(6,10);
        let thisMonth = today.getMonth();
        let expMonth = item.innerText.slice(3,5)-1;
        let thisDay = today.getDate();
        let expDay = item.innerText.slice(0,2);
    
        if (expYear > thisYear) {
            return;
        }
    
        if (expYear < thisYear) {
            item.style.backgroundColor = "gray";
        }
        if (expMonth < thisMonth) {
            item.parentElement.style.backgroundColor = "gray";
            return;
        }
        if (expMonth - thisMonth > 3) {
            return;
        }
        else {
            item.parentElement.style.backgroundColor = "yellow";
        }
    
        if (expMonth == thisMonth) {
            item.parentElement.style.backgroundColor = "red";
    
            if (thisDay > expDay) {
                item.style.backgroundColor = "gray";
            }
        } 
    });

}

// hide / show top bar


hideButton.addEventListener("click", ()=> {
    if (dateMenu.style.width == "0%") {
        hideButton.innerText = "UKRYJ";
        dateMenu.style.width = "65%";
        dateMenu.style.padding = "10px";
        
    }
    else {
        dateMenu.style.color = "transparent"
        hideButton.innerText = "POKAŻ";
        dateMenu.style.width = "0%";
        dateMenu.style.padding = "0px";
        
    }
});

dateMenu.addEventListener("transitionend", ()=> {
    if (dateMenu.style.width == "65%") {
        dateMenu.style.color = "white";
    }
});

// Search bar functionality

searchInput.addEventListener("keyup", (e)=> {
    let myValue = searchInput.value;
    namesArray.forEach((name)=> {
            name.parentElement.style.display = "flex";
        });
    searchMe(myValue);
    nameMethod = "fromA";
    dateMethod = "fromLow";
    descMethod = "fromA";
    sortByName();
});

const searchMe = (input) => {
    if (input != "") {
        let combinedArray = namesArray.concat(typesArray);
        let displayArray = [];
        
        combinedArray.forEach((item)=> {
            if (item.innerText.toUpperCase().includes(input.toUpperCase())) {
                if (displayArray.indexOf(item.parentElement) === -1) {
                    displayArray.push(item.parentElement);
                }
            }
            if (item.parentElement.style.display != "none") {
                item.parentElement.style.display = "none";
            }
        }
        );

    displayArray.forEach((parent)=> {
        parent.style.display = "flex";
    });
}
}
// run functions

dateUpdate();
highlight();