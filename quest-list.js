// create options that relate to the thunderDomeQuest below
const thunderDomeOptions = [
    {
        id: 'fight',
        title: 'fight',
        description: 'You fought it',
        hp: -15,
        gold: 20
    },
    {
        id: 'trick',
        title: 'trick',
        description: 'You tricked it',
        hp: 5,
        gold: 30
    },
    {
        id: 'evade',
        title: 'evade',
        description: 'You evaded it',
        hp: -30,
        gold: 0
    }
];
// 
const thunderDomeQuest = {
    id: 'thunderdome',
    title: 'Enter the Thunder Dome',
    description: 'Entered the Thunder Dome',
    image: '',
    options: thunderDomeOptions
};

const questList = [
    thunderDomeQuest
];

export default questList;