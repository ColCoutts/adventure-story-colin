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

let questOptions = null;

for(let i = 0; i < questList.length; i++){
    const currentQuest = questList[i];
    console.log(currentQuest);

    if(currentQuest.id === questUrl){
        title.textContent = currentQuest.title;
        description.textContent = currentQuest.description;
        pageTitle.textContent = currentQuest.title;
        image.src = currentQuest.image;
        questOptions = currentQuest.options;
    }
    //create ze buttons
    for(let i = 0; i < questOptions.length; i++) {
        const span = document.createElement('span');
        const label = document.createElement('label');
        span.textContent = questOptions[i].description;
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.value = questOptions[i].result;
        radio.name = questOptions[i].options;
        label.appendChild(radio);
        label.appendChild(span);
        options.appendChild(label);
    }

}



form.addEventListener('submit', function(event){
    event.preventDefault;

    const formData = new FormData(form);
    const optionId = formData.get(options);

    for(let i = 0; i < questOptions.length; i++) {
        const currentOptionId = questOptions[i].id;

        if(currentOptionId === optionId) {
            description.textContent = questOptions[i].result;

    
        }
    }

    form.remove();

    description.textContent = result;



});