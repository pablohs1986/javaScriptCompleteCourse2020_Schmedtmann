var JohnAverage = (89 + 120 + 103)/3;
var MikeAverage = (116, 94, 123)/3;
var MaryAverage = (97, 134, 1050)/3;

console.log(JohnAverage, MikeAverage, MaryAverage);

if ((JohnAverage > MikeAverage) && (JohnAverage > MaryAverage)){
    console.log("John's team wins!" + " Average:" + JohnAverage)
}else if ((MikeAverage > JohnAverage) && (MikeAverage > MaryAverage)){
    console.log("Mike's team wins!" + " Average:" + MikeAverage)
}else if ((MaryAverage > JohnAverage) && (MaryAverage > MikeAverage)){
    console.log("Mary's team wins!" + " Average:" + MaryAverage)
}else if((MikeAverage === JohnAverage) && (MikeAverage === MaryAverage)){
    console.log('tie!')
}