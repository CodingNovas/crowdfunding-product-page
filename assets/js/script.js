/*update total money raised*/

document.getElementsByClassName("btn-bookmark")[0].addEventListener("click", incrementTotal);

function incrementTotal() {
    /* COMMENTS
        - Pass id of input in function to fetch amount
        - Update variable to fetch the amount from the right place
        let amountPledged = parseInt(document.getElementById("backers").innerHTML.replace(",",""))*/
    let amountPledged = 50;
    let currentAmount = parseInt(document.getElementById("total-amount").innerHTML.replace(",", ""));
    let newAmount = currentAmount + amountPledged;
    document.getElementById("total-amount").innerHTML = newAmount.toLocaleString();
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

/*progress bar*/

/* modals */

const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
}