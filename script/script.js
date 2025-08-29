// get element function by id
function getElement(id){
    const element = document.getElementById(id)
    return element;
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

    const heartIcon = card.getElementsByClassName("heart-icon")[0];
    const copyBtn = card.getElementsByClassName("copy-btn")[0];
    const callBtn = card.getElementsByClassName("call-button")[0];
    const serviceName = card.getElementsByClassName("service-name")[0];
    const hotlineElement = card.getElementsByClassName("hotline-number")[0]

        // heart count btn
        heartIcon.addEventListener('click',function(){
            heartCount = heartCount + 1;
            heartCountElement.innerText = heartCount;
        })

        // copy count btn
        copyBtn.addEventListener('click',function(){
            const number = hotlineElement.innerText;
            alert('You copied hotline number : ' + number)
            copyCount = copyCount + 1;
            copyCountElement.innerText = copyCount;
        })







}



