import questList from './quest-list.js';

const title = document.getElementById('title');
const image = document.getElementById('image');
const form = document.getElementById('form');
const options = document.getElementById('options');
const pageTitle = document.getElementById('page-title');
const description = document.getElementById('description');

const searchParams = new URLSearchParams(window.location.search);
const questUrl = searchParams.get('questOptions');
console.log(questUrl);

for(let i = 0; i < questList.length; i++){
    const currentQuest = questList[i];

    if(currentQuest.id === questUrl){
        title.textContent = currentQuest.title;
        description.textContent = currentQuest.description;

    }

}



form.addEventListener('submit', function(event){
    event.preventDefault;


})