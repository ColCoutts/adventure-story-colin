const questList = document.getElementById('quest-list');

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