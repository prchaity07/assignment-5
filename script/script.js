// get element function by id
function getElement(id){
    return document.getElementById(id);
}

// Id section for get access parent id
const cardContainer = getElement('card-container');
const heartCountElement = getElement('heart-count');
const coinCountElement = getElement('coin-count');
const copyCountElement = getElement('copy-count');
const historyList = getElement('history-list');
const clearHistoryBtn = getElement('clear-history-btn');

//  count section
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// loop section for get access for our card
const cards = document.getElementsByClassName('service-card');
for (const card of cards) {

    const heartIcon = card.querySelector(".heart-icon");
    const copyBtn = card.querySelector(".copy-btn");
    const callBtn = card.querySelector(".call-button");
    const serviceName = card.querySelector(".service-name");
    const hotlineElement = card.querySelector(".hotline-number");

    // heart count btn
    heartIcon.addEventListener('click', function(){
        heartCount = heartCount + 1;
        heartCountElement.innerText = heartCount;
    });

    // copy count btn
    copyBtn.addEventListener('click', function(){
        const number = hotlineElement.innerText;

        // for clipboard actually my challenge part
        navigator.clipboard.writeText(number).then(function() {
            alert('Hotline number copied: ' + number);
        }).catch(function() {
            alert('Failed to copy');
        });

        copyCount = copyCount + 1;
        copyCountElement.innerText = copyCount;
    });

    // call btn
    callBtn.addEventListener('click', function(){
            
        if (coinCount < 20) {
            alert("Not enough coins❗");
            return;
        }
        coinCount = coinCount - 20;
        coinCountElement.innerText = coinCount;
            alert("Calling Service: " + serviceName.innerText + 
            "\n📞Hotline: " + hotlineElement.innerText);

        const callHistoryEntry = document.createElement('div');
        callHistoryEntry.innerHTML = `
            <div class="flex justify-between items-center px-10 py-5">
                <div>
                    <h1 class="font-semibold text-xl">${serviceName.innerText}</h1>
                    <p class="font-normal text-xl">${hotlineElement.innerText}</p>
                </div>
                <div class="font-normal text-xl">
                    ${new Date().toLocaleTimeString()}
                </div>
            </div>
        `;

        historyList.appendChild(callHistoryEntry);
    });
}

// clear history button
clearHistoryBtn.addEventListener('click', function(){
    historyList.innerHTML = '';
});











