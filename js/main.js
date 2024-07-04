const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
let q = 0
const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
let questionEl = document.getElementById('question');
let answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');
const cards = document.querySelector('.cards');

const myCards = [
    {
        description: "Нou can view my profile on GitHub or find yourself. ( ReactJS ) ",
        name: "profile-github",
        linkGit: "https://github.com/Shrek1891/find-in-Git",
        linkShow: "https://find-in-git.vercel.app"
    },
    {
        description: "CRM system for teachers. ( ReactJS, supabase ) Login - test@test.com Password - 3718758 ",
        name: "profile-github",
        linkGit: "https://github.com/Shrek1891/techers_diary",
        linkShow: "https://techers-diary.vercel.app"
    },
    {
        description: "Family TODO list. ( Next, MongoDB ) ",
        name: "profile-github",
        linkGit: "https://github.com/Shrek1891/teachersflow",
        linkShow: "https://teachersflow.vercel.app/"
    },

]

myCards.forEach((myCard, index) => {
    const cardEl = document.createElement("div");
    if (index == 0) {
        cardEl.classList.add("active");
    }
    cardEl.innerHTML = `
     <div class="inner-card">
                    <div class="inner-card-front">
                        <p>
                            ${myCard.description}
                            <br><br>
                            <span class="blink">click me to get link</span>
                        </p>
                    </div>
                    <div class="inner-card-back">
                        <p>
                            <a class="github" href=${myCard.linkGit} target="_blank"> github link </a><br/>
                            <a class="vercel" href=${myCard.linkShow} target="_blank"> vercel link </a>
                        </p>
                    </div>
                </div>
`
    cardEl.classList.add("card");
    cardsContainer.appendChild(cardEl);
})


open.addEventListener("click", () => {
    container.classList.add('show-nav');
})


close.addEventListener("click", () => {
    container.classList.remove('show-nav');
})


let currentActiveCard = 0;
const cardsEl = document.querySelectorAll('.card');

//create a single card in DOM


function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/${myCards.length}`;
}


cards.addEventListener('click', () => {
    cards.children[currentActiveCard].classList.toggle('show-answer');
});


nextBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card left';

    currentActiveCard = currentActiveCard + 1;

    if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
    }
    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
})

prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card right';

    currentActiveCard = currentActiveCard - 1;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }
    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});






