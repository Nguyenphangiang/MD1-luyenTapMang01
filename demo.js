
let interG=[1,2,3,4,5,6,7,8,9,10];
let inputV= +prompt("Enter A Number:");
let bot=0;
for (let i = 0; i < interG.length; i++) {
    if (inputV==interG[i]){
        bot = i;
        break;
    }
}
 if (inputV==interG[bot]){
        alert("V is in the array")
 } else
        alert("V is not in the array");
