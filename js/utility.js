function getRgbValue(r,g,b){
    return 'rgb(' +r+','+g+","+b+")";
}

function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
} 

// function isCollided(newBall, oldBall) {
//     var dx = newBall.x - oldBall.x;
//     var dy = newBall.y - oldBall.y;
//     var distance = parseInt(Math.sqrt(dx * dx + dy * dy));
//     if (distance < (newBall.width/2)+ (oldBall.width/2)) {
//         return true
//     }else {
//         return false;
//     }
// }
