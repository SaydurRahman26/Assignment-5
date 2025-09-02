let hearts = 0;
let coins = 100;
let copies = 0;

const heartCount = document.getElementById("heart-count");
const coinCount = document.getElementById("coin-count");
const historyList = document.getElementById("history-list");

const copyCount = document.querySelector("nav button:nth-child(3) span");


const heartButtons = document.getElementsByClassName("heart-btn");
for (const btn of heartButtons) {
    btn.addEventListener("click", function () {
        hearts++;
        heartCount.textContent = hearts;
    });
}

const callButtons = document.getElementsByClassName("call-btn");
for (const btn of callButtons) {
    btn.addEventListener("click", function () {
        const card = btn.closest(".card");
        const serviceName = card.querySelector(".service-name").textContent;
        const serviceNumber = card.querySelector(".service-number").textContent;

        if(coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        coins -= 20;
        coinCount.textContent = coins;

        alert("Calling " + serviceName + " (" + serviceNumber + ")");

        const now = new Date();
        const timeString = now.toLocaleTimeString();

        const entry = document.createElement("p");
        entry.textContent = `${serviceName} - ${serviceNumber} (at ${timeString})`;
        historyList.appendChild(entry);
    });
}

const copyButtons = document.querySelectorAll(".card .fa-copy");
for (const icon of copyButtons) {
    icon.parentElement.addEventListener("click", function () {
        const card = icon.closest(".card");
        const serviceNumber = card.querySelector(".service-number").textContent;

        navigator.clipboard.writeText(serviceNumber).then(() => {
            alert(`Copied number: ${serviceNumber}`);

            copies++;
            copyCount.textContent = copies;
        });
    });
}

document.getElementById("clear-history").addEventListener("click", () => {
    historyList.innerHTML = "";
});
