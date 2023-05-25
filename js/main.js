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
        description : "Нou can view my profile on GitHub or find yourself. (Create by ReactJS ) ",
        name: "profile-github",
        linkGit: "https://github.com/Shrek1891/find-in-Git",
        linkShow: "https://find-in-git.vercel.app"
    },
    {
        description : "Little sandbox on React for vanillaJS",
        name: "sand-box",
        linkGit: "https://github.com/Shrek1891/sand-box",
        linkShow: "https://sand-box.vercel.app"
    },
    {
        description : "The simplest training site created by classic react based on free movie API",
        name: "Movie",
        linkGit: "https://github.com/Shrek1891/movie2",
        linkShow: "https://movie2-vert.vercel.app"
    },
    {
        description : "The simplest training SPA created by classic react based on free food API",
        name: "Food SPA",
        linkGit: "https://github.com/Shrek1891/food-spa",
        linkShow: "https://food-spa-pi.vercel.app"
    },
    {
        description : "The simplest training vacation`s dashboard created by react with redux",
        name: "Dashboard",
        linkGit: "https://github.com/Shrek1891/dashbord-with-react",
        linkShow: "https://dashbord-with-react.vercel.app"
    },
    {
        description : "The simplest APP about country , created by react with asynchronous redux",
        name: "Flags",
        linkGit: "https://github.com/Shrek1891/countries-flags",
        linkShow: "https://countries-flags-omega.vercel.app"
    }
]

myCards.forEach( (myCard, index) => {
    const cardEl = document.createElement("div");
    if (index == 0 ) {
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






