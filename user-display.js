function displayInfo() {
    const userProfileDisplay = document.getElementById('user-profile-display');
    let json = window.localStorage.getItem('userProfile');
    let userProfile = JSON.parse(json);

    userProfileDisplay.textContent = userProfile.name + 'has a health of ' + userProfile.hp + 'and a purse of ' + userProfile.gold;
}

export default displayInfo;