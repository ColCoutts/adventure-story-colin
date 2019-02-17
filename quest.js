import questList from './quest-list.js';
import displayInfo from './user-display.js'

displayInfo();

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

    if(currentQuest.id === questUrl){
        title.textContent = currentQuest.title;
        description.textContent = currentQuest.description;
        pageTitle.textContent = currentQuest.title;
        image.src = currentQuest.image;
        questOptions = currentQuest.options;
        
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
    //create ze buttons
}

const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const optionId = formData.get('options');
    console.log(optionId);

    for(let i = 0; i < questOptions.length; i++) {
        const currentOptionId = questOptions[i].id;
        console.log(currentOptionId);
        
        if(currentOptionId === optionId) {
            console.log(currentOptionId);
            description.textContent = questOptions[i].result;
            userProfile.scoreDaddy[optionId]++;
            userProfile.hp += questOptions[i].hp;
            console.log(userProfile.gold);
            userProfile.gold += questOptions[i].gold;
            //put updates from above back into userProfile in local storage
            const characterStatusChange = JSON.stringify(userProfile);
            console.log(characterStatusChange);
            window.localStorage.setItem('userProfile', characterStatusChange);

            //once the changes have been set in local storage below code pulls it back out where it should now have altered HP and GOLD
            displayInfo();
            break;
        }
    }
    form.remove();
});