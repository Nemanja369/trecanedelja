function jeProst(x){
    if(x == 1) return false
    for ( i = 2; i < x; i++){
        if(x % i == 0){   // x % i 0 - false  
            return false
        }
    }
    return true
}
console.log(jeProst(7))


function isDivisibleBy5(broj){
    return broj % 5 == 0
}



function sumNM( n, m){

}

let isValid = (a, b, c) => a>0 && b > 0 && c> 00 && a+b > c && a+c >b && b+c > a

let obim = (a, b, c) => {
    
    let O = a+b+c

return 

}
console.log(obim(1, 2, 5))