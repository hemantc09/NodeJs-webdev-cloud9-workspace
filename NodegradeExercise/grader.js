var scroes = [90,3,55,23,45,223,23];

function average(scores)
{
    var maxScore = Math.max(...scroes);
    console.log(maxScore);
    
    var total = 0;
    var avg;
    scroes.forEach(function(score){
        total += score;
    });
     avg = total/scores.length;
     return Math.round(avg);
}


var retAvgScore = average(scroes);
console.log(retAvgScore);