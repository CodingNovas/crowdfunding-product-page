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
    pledgeCardsInfo[i].element.addEventListener("click", function() {
        if (!pledgeCardsInfo[i].isOpen) {
            this.classList.add("open");
            pledgeCardsInfo[i].isOpen = true;
        }
        else if (pledgeCardsInfo[i].isOpen) {
            this.classList.remove("open");
            pledgeCardsInfo[i].isOpen = false;
        }
    })
}
