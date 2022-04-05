function saturdayFun(activity) {
    if (typeof activity !== 'undefined') {
        return `This Saturday, I want to ${activity}!`;
    } else if (typeof activity === 'undefined') {
        const activity = 'roller-skate';
        return `This Saturday, I want to ${activity}!`;
    }
}

function mondayWork(workSpot) {
    if (workSpot === 'work from home') {
        return `This Monday, I will ${workSpot}.`;
    } else if (typeof workSpot === 'undefined') {
        const workSpot = 'go to the office';
        return `This Monday, I will ${workSpot}.`;
    }
}

function wrapAdjective(visualFlair = '*') {
    return function(trait = 'special') {
        return `You are ${visualFlair}${trait}${visualFlair}!`;
    }
}

//wrapAdjective('!!')('incredibly lucky if you get this right');
