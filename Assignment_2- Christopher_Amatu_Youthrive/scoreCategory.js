function scoreCategory (score){
if(score >= 90){
    return "excellent"
}
else if (score >= 80 && score <=89){
    return "very good";
}
else if (score >= 70 && score <= 79){
    return "pass";
}
else  {
    return "fail";
}
}