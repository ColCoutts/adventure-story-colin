const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(form);

    const userProfile = {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 55,
        gold: 0,
        scoreDaddy: {
            fight: 0,
            trick: 0,
            evade: 0
        }
    };

    const json = JSON.stringify(userProfile);

    window.localStorage.setItem('userProfile', json);

    window.location = './map.html';
});