/*JS FILE NOW OPENED*/

/*update total money raised*/


/*incrementation backers by 1*/

let test = document.getElementsByClassName("btn-bookmark")[0].addEventListener("click", incrementBackers);


function incrementBackers() {
 
    let currentBackers = parseInt(document.getElementById("backers").innerHTML.replace(",",""))
    console.log(currentBackers);
 let newBackers = ++currentBackers;
 document.getElementById("backers").innerHTML = newBackers.toLocaleString();
}

/*toggle whether product is bookmarked*/


/*progress bar*/
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
