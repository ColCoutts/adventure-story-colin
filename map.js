const questList = document.getElementById('quest-list');

const userProfileDisplay = document.getElementById('user-profile-display');
const json = window.localStorage.getItem('userProfile');
const userProfile = JSON.parse(json);
userProfileDisplay.textContent = userProfile.name + ' has a health of ' + userProfile.hp + ' and a purse of ' + userProfile.gold;

const questType = [
    'thunderdome',
    'Yeti Resort'
];

//create for loop 
for(let i = 0; i < questType.length; i++) {
    const questOptions = questType[i];
    const a = document.createElement('a');
    a.href = './quest.html?questOptions=' + encodeURIComponent(questOptions);
    a.textContent = questOptions;
    a.classList.add('quest-link');
    questList.appendChild(a);
}