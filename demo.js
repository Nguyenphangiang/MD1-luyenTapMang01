
let arrs= [1,2,3,4,5,6,7,8,9,10,11,12,13];
for (let i = 0; i < arrs.length/2; i++) {
    let bot = arrs[i]
    arrs[i] = arrs[arrs.length-i-1]
    arrs[arrs.length-i-1]=bot

}
console.log(arrs);