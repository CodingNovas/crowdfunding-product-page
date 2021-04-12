
/*on load*/
let root = document.documentElement;
let currentAmount0 = parseInt(document.getElementById("total-amount").innerHTML.replace(",", ""));
let widthCalc = (currentAmount0 / 100000)*100
root.style.setProperty('--Width', widthCalc + "%");


/*update total money raised*/

document.getElementsByClassName("btn-bookmark")[0].addEventListener("click", incrementTotal);

function incrementTotal() {
    /* COMMENTS
        - Pass id of input in function to fetch amount
        - Update variable to fetch the amount from the right place
        let amountPledged = parseInt(document.getElementById("backers").innerHTML.replace(",",""))*/
    let target = 100000;
    let amountPledged = 50;
    let currentAmount = parseInt(document.getElementById("total-amount").innerHTML.replace(",", ""));
    let newAmount = currentAmount + amountPledged;
    document.getElementById("total-amount").innerHTML = newAmount.toLocaleString();
    let newWidth  = (newAmount/target)*100;
    

    root.style.setProperty('--Width', newWidth + "%");

}

/*incrementation backers by 1*/

document.getElementsByClassName("btn-bookmark")[0].addEventListener("click", incrementBackers);

function incrementBackers() {
    let currentBackers = parseInt(document.getElementById("backers").innerHTML.replace(",", ""))
    let newBackers = ++currentBackers;
    document.getElementById("backers").innerHTML = newBackers.toLocaleString();
}

/*toggle whether product is bookmarked*/

document.getElementsByClassName("btn-bookmark")[0].addEventListener("click", function () {
    /*https://redstapler.co/toggle-active-button-state-javascript/*/
    (this.classList.contains("active-bookmark")) ? this.classList.remove("active-bookmark"): this.classList.add("active-bookmark");
});

/*countdown*/
let countDownDate = new Date ("Aug 11, 2021 00:00:00").getTime();
var x = setInterval(function() {
    let currentDate = new Date().getTime();
    let distance = countDownDate - currentDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    console.log();

        if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "THANK YOU FOR YOUR SUPPORT!!!";
      }
    }, 1000);



/* modals */

const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");
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
for (let i=0; i < pledgeCardsInfo.length; i++) {
    for (let j=0; j < pledgeCardsInfo[i].element.children.length - 1; j++) {
        pledgeCardsInfo[i].element.children[j].addEventListener("click", function() {
            if (!pledgeCardsInfo[i].isOpen) {
                pledgeCardsInfo[i].element.classList.add("open");
                pledgeCardsInfo[i].isOpen = true;
            }
            else if (pledgeCardsInfo[i].isOpen) {
                pledgeCardsInfo[i].element.classList.remove("open");
                pledgeCardsInfo[i].isOpen = false;
            }
        })
    }
}
