
let datesArray = Array.from(document.querySelectorAll(".expiration-date"));
let namesArray = Array.from(document.querySelectorAll(".medicine-name"));
let dateMethod = "fromLow";
let nameMethod = "fromA";
let expirationButton = document.querySelector("#by-expiration");
let alphabeticalButton = document.querySelector("#alphabetical");

const sortByDate = () => {
    nameMethod = "fromA";
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
        expirationDate1.setMonth(parseInt(a.innerText.slice(3,5))-1);
        expirationDate1.setDate(a.innerText.slice(0,2));
        
        let expirationDate2 = new Date;
        expirationDate2.setFullYear(b.innerText.slice(6,10));
        expirationDate2.setMonth(parseInt(b.innerText.slice(3,5))-1);
        expirationDate2.setDate(b.innerText.slice(0,2));

        if (expirationDate1 > expirationDate2) return toggle;
        else return toggle * -1;
    });

    document.querySelector("#medicine-box").innerHTML = "";
    datesArray.forEach((item)=> {
        document.querySelector("#medicine-box").appendChild(item.parentElement);
    });
}

const sortByName = () => {
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
    document.querySelector("#medicine-box").innerHTML = "";
    namesArray.forEach((item)=> {
        document.querySelector("#medicine-box").appendChild(item.parentElement);
    });
}
   

expirationButton.addEventListener("click", sortByDate);
alphabeticalButton.addEventListener("click", sortByName);

const dateUpdate = () => {
    let today = new Date;
    today = today.toLocaleDateString();
    document.querySelector("#current-date").innerText = today;
}

dateUpdate();

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

let hideButton = document.querySelector("#hide-button");
let dateMenu = document.querySelector("#dateMenu");
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
})