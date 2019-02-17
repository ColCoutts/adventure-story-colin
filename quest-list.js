// create options that relate to the thunderDomeQuest below
const thunderDomeOptions = [
    {
        id: 'fight',
        title: 'fight',
        description: 'You try to fight it',
        result: 'you fought the thing!',
        hp: -15,
        gold: 20
    },
    {
        id: 'trick',
        title: 'trick',
        description: 'You try to trick it',
        result: 'you tricked it!',
        hp: 5,
        gold: 30
    },
    {
        id: 'evade',
        title: 'evade',
        description: 'You try to evade it',
        result: 'you evaded it!',
        hp: -30,
        gold: 0
    }
];

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