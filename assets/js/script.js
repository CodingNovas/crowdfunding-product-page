//localStorage.removeItem("totalAmount");
//localStorage.removeItem("backers");

/* ----------------------- [on load] ------------------------------*/

//Retrieve info from local storage 
if (typeof (Storage) !== "undefined") {
    // Retrieve total amount
    if (localStorage.totalAmount) {
        let webAmount = localStorage.getItem("totalAmount");
        // check if NaN value 
        if (webAmount = "NaN")
        {
            webAmount = 20;
        }
        document.getElementById("total-amount").innerHTML = webAmount;
    } else {
        document.getElementById("total-amount").innerHTML = 10;

    }
    // Retrieve backers
    if (localStorage.backers) {
        document.getElementById("backers").innerHTML = localStorage.getItem("backers");
    } else {
        document.getElementById("backers").innerHTML = 5;
    }

} else {
    document.getElementById("total-amount").innerHTML = 0;
    document.getElementById("backers").innerHTML = 0;
}

// Progress bar style on load
let root = document.documentElement;
let currentAmount0 = parseInt(document.getElementById("total-amount").innerHTML.replace(",", ""));
let widthCalc = (currentAmount0 / 100000) * 100
root.style.setProperty('--Width', widthCalc + "%");

/*--------------- [click toggle button ] ------------------- */
document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function () {
  (this.classList.contains("toggled")) ? this.classList.remove("toggled"): this.classList.add("toggled");
})

/*--------------- [increment total amounts & backer] -------------- */

let pledge = document.getElementsByClassName("continue");
for (let i = 0; i < pledge.length; i++) {
    document.getElementsByClassName("continue")[i].addEventListener("click", function () {
        //Fetch amount from imput 
        let amount = parseInt(document.getElementsByClassName("continue")[i].previousElementSibling.value);
        //Fetch default value if no amount is entered
        if (amount = "NaN")
        {
            let nodeEl = document.getElementsByClassName("continue")[i].previousElementSibling;
            amount = parseInt(nodeEl.getAttributeNode("min").value);
        }
        incrementTotal(amount);
        incrementBackers();
    })
}

/*----------------- [update total money raised] ------------------*/

function incrementTotal(amount) {
    let target = 100000;
    let amountPledged = parseInt(amount);
    let currentAmount = parseInt(document.getElementById("total-amount").innerHTML.replace(",", ""));
    let newAmount = currentAmount + amountPledged;
    document.getElementById("total-amount").innerHTML = newAmount.toLocaleString();
    /*progress bar*/
    let newWidth = (newAmount / target) * 100;
    root.style.setProperty('--Width', newWidth + "%");
    // Update local storage
    localStorage.setItem("totalAmount", newAmount);
}

/*------------------ [incrementation backers by 1] -----------------*/

function incrementBackers() {
    let currentBackers = parseInt(document.getElementById("backers").innerHTML.replace(",", ""))
    let newBackers = ++currentBackers;
    document.getElementById("backers").innerHTML = newBackers.toLocaleString();
    //Update local storage
    localStorage.setItem("backers", newBackers);
}

/*------------------- [toggle whether product is bookmarked] ------------------*/

document.getElementsByClassName("btn-bookmark")[0].addEventListener("click", function () {
    /*https://redstapler.co/toggle-active-button-state-javascript/*/
    (this.classList.contains("active-bookmark")) ? this.classList.remove("active-bookmark"): this.classList.add("active-bookmark");
});

/*------------------------- [countdown] -----------------------------*/

let countDownDate = new Date("Aug 11, 2021 00:00:00").getTime();
var x = setInterval(function () {
    let currentDate = new Date().getTime();
    let distance = countDownDate - currentDate;
    //Calculate days
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let contDown = days + "d";
    console.log(days);
    //Calculate hours and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //Fetch the right value according to distance left
    if(days == "0")
    { 
        contDown = hours + "h";
    }
    if ((days == "0") && (hours == "0"))
    {
        contDown = minutes + "m";
    }
    if ((days == "0") && (hours == "0") && (minutes == "0"))
    {
        contDown = seconds + "s";
    }
    //Upadate HTML    
    document.getElementById("countdown").innerHTML = contDown;
    //Once finished
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "THANKS!!!";
    }
}, 1000);



/*----------------------- [ modals ] ---------------------------*/

const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-modal");
const pledgeCards = document.getElementsByClassName("pledge-card");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function pledgeCardsData() {
    let pledgeData = [];
    for (pledgeCard of pledgeCards) {
        pledgeCardData = {};
        pledgeCardData.isOpen = false;
        pledgeCardData.element = pledgeCard;
        pledgeData.push(pledgeCardData);
    }
    return pledgeData;
}

function openModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

let pledgeCardsInfo = pledgeCardsData();
for (let i = 0; i < pledgeCardsInfo.length; i++) {
    for (let j = 0; j < pledgeCardsInfo[i].element.children.length - 1; j++) {
        pledgeCardsInfo[i].element.children[j].addEventListener("click", function () {
            if (!pledgeCardsInfo[i].isOpen) {
                pledgeCardsInfo[i].element.classList.add("open");
                pledgeCardsInfo[i].isOpen = true;
            } else if (pledgeCardsInfo[i].isOpen) {
                pledgeCardsInfo[i].element.classList.remove("open");
                pledgeCardsInfo[i].isOpen = false;
            }
        })
    }
}

/*-- FAO Mike: Kelv's additional modal scripts - to be checked ---*/
// Get the modal

var modalOne = document.getElementById("sub-pl-bamboo");
var modalTwo = document.getElementById("sub-pl-blackedt");

// Get the button that opens the modal
var btnOne = document.getElementById("btn-open-sub-pl-bamboo");
var btnTwo = document.getElementById("btn-open-sub-pl-blackedt");

// When the user clicks the button, open the modal 
btnOne.onclick = function () {
    modalOne.style.display = "grid";
}

btnTwo.onclick = function () {
    modalTwo.style.display = "grid";
}

// Close modal

// Get the <span> element that closes the modal
var closeOne = document.getElementById("close-sub-pl-bamboo");
var closeTwo = document.getElementById("close-sub-pl-blackedt");

// When the user clicks on <span> (x), close the modal
closeOne.onclick = function () {
    modalOne.style.display = "none";
}

closeTwo.onclick = function () {
    modalTwo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == closeOne) {
        modalOne.style.display = "none";
    }
}

window.onclick = function (event) {
    if (event.target == closeTwo) {
        modalTwo.style.display = "none";
    }
}

/* Below (calls class name) not working? Above (calls ID) works but then requires multiple instances  

// Close modal
var modalAny = document.getElementsByClassName("modal-any");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-pledge");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalAny.style.display = "none";
}

*/
let anyPledge = document.getElementById("any-pledge");
let bambooPledge = document.getElementById("bamboo-pledge");
let blackEditionPledge = document.getElementById("black-edition-pledge");
let anyBtn = document.getElementById("any-continue");
let bambooBtn = document.getElementById("bamboo-continue");
let blackEditionBtn = document.getElementById("black-edition-continue");

anyBtn.addEventListener("click", function() {
    getUserPledge(anyPledge, 0);
})

bambooBtn.addEventListener("click", function() {
    getUserPledge(bambooPledge, 25);
})

blackEditionBtn.addEventListener("click", function() {
    getUserPledge(blackEditionPledge, 75);
})

function getUserPledge(pledgeAmount, minAmount) {
    if (pledgeAmount.value >= minAmount) {
        let userPledge = pledgeAmount.value;
        incrementTotal(userPledge);
    }
    else {
        alert ("Please enter a higher pledge");
    }
}
