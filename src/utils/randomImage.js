const images = {
    1: require('../assets/images/undraw/1.png'),
    2: require('../assets/images/undraw/2.png'),
    3: require('../assets/images/undraw/3.png'),
    4: require('../assets/images/undraw/4.png'),
    5: require('../assets/images/undraw/5.png'),
    6: require('../assets/images/undraw/6.png'),
    7: require('../assets/images/undraw/7.png'),
    8: require('../assets/images/undraw/8.png'),
    9: require('../assets/images/undraw/9.png'),
    10: require('../assets/images/undraw/10.png'),
    11: require('../assets/images/undraw/11.png'),
    12: require('../assets/images/undraw/12.png'),
}

export default function randomImage(){
    let min = 1;
    let max = 12;
    let random = Math.floor(Math.random()*(max-min + 1)) + min;
    return images[random];
}