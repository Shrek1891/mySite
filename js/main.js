const open=document.getElementById('open');
const close=document.getElementById('close');
const container=document.querySelector('.container');
let q=0
const cardsContainer=document.getElementById('cards-container');
const prevBtn=document.getElementById('prev');
const nextBtn=document.getElementById('next');
const currentEl=document.getElementById('current');
const showBtn=document.getElementById('show');
const hideBtn=document.getElementById('hide');
let questionEl=document.getElementById('question');
let answerEl=document.getElementById('answer');
const addCardBtn=document.getElementById('add-card');
const clearBtn=document.getElementById('clear');
const addContainer=document.getElementById('add-container');
const cards=document.querySelector('.cards');


open.addEventListener("click",()=>{
    container.classList.add('show-nav');
})


close.addEventListener("click",()=>{
    container.classList.remove('show-nav');
})



currentActiveCard=0;
const cardsEl=document.querySelectorAll('.card');
//create a single card in DOM


function updateCurrentText() {
    currentEl.innerText=`${currentActiveCard+1}/${cardsEl.length}`;
}




cards.addEventListener('click',()=>{
    cards.children[currentActiveCard].classList.toggle('show-answer');
});




nextBtn.addEventListener('click',()=> {
    cardsEl[currentActiveCard].className='card left';

    currentActiveCard=currentActiveCard+1;

    if (currentActiveCard>cardsEl.length-1) {
        currentActiveCard=cardsEl.length-1;
    }
    cardsEl[currentActiveCard].className='card active';

    updateCurrentText();
})

prevBtn.addEventListener('click',()=> {
    cardsEl[currentActiveCard].className='card right';

    currentActiveCard=currentActiveCard-1;

    if (currentActiveCard<0) {
        currentActiveCard=0;
    }
    cardsEl[currentActiveCard].className='card active';

    updateCurrentText();
});






