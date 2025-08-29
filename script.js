let hearts = 0;
        let coins = 100;

        const heartCount = document.getElementById("heart-count");
        const coinCount = document.getElementById("coin-count");
        const historyList = document.getElementById("history-list");

        // ❤️ Heart Button
        const heartButtons = document.getElementsByClassName("heart-btn");
        for (const btn of heartButtons) {
            btn.addEventListener("click", function() {
                hearts++;
                heartCount.textContent = hearts;
            });
        }

        // 📞 Call Button
        const callButtons = document.getElementsByClassName("call-btn");
        for (const btn of callButtons) {
            btn.addEventListener("click", function() {
                const card = btn.closest(".card");
                const serviceName = card.querySelector(".service-name").textContent;
                const serviceNumber = card.querySelector(".service-number").textContent;

                if (coins < 20) {
                    alert("Not enough coins to make a call!");
                    return;
                }

                coins -= 20;
                coinCount.textContent = coins;

                alert("Calling " + serviceName + " (" + serviceNumber + ")");

                // Add to history
                const entry = document.createElement("p");
                entry.textContent = `${serviceName} - ${serviceNumber}`;
                historyList.appendChild(entry);
            });
        }

        // 🗑 Clear History
        document.getElementById("clear-history").addEventListener("click", () => {
            historyList.innerHTML = "";
        });