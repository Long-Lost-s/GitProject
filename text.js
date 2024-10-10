let a=3, b=4, c=5;
let answer
if (a==b) {
    if (a==c){
        answer="tat ca bang nhau"
    }
    else {
        answer="a bang b"
    }
}
else {
    if (a==c) {
        answer="a bang c"
    }
    else {
        if (b==c) {
            answer="b bang c"
        }
        else {
            answer="tat ca khac nhau"
        }
    }
}
alert(answer);