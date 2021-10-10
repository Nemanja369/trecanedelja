// let imena = [ 'pera', 'zika','ana'] // 


{
    let niz = [2, 4, 6, 8, 19]
    let y = 8
    let indeksi = []

    // for (const i of niz) {
    //     console.log(i)
    // }

}


{

}
let x = [1, 2, 3, 5, 6]
function dodajElement(x, el, indeks) {

    let tmp = []
    for (i = 0; i < x.length; i++) {

        if (i == indeks) {
            tmp.push(el)
        }
        tmp.push(x[i])

    }
    x = [...tmp]
    return x
}
console.log(dodajElement(x, 4, 3))

// prvi

{
    let niz = [5, 10, 16, 20]
    function x(niz) {
        let y = []
        for (i = 0; i < niz.length; i++) {
            if (niz[i] % 5 == 0) {
                y.push(niz[i])
            }
        }

        return y
    }
    console.log(x(niz))
}
//drugi
{
    let niz = [5, 10, 16, 20]
    let prVr = 0
    function x(niz) {
        let suma = 0
        for (i = 0; i < niz.length; i++) {
            suma += niz[i]
        }
        return prVr = suma / niz.length
    }
    console.log(x(niz))
}
//treci
{
    let niz = [5, 10, 16, 20]

    function x(niz) {
        let zbir = 0
        let proizvod = 1
        for (i = 0; i < niz.length; i++) {
            if (niz[i] % 2 == 0) {
                zbir += niz[i]
                
            }else {
                proizvod *= niz[i]
                
            }


        }
        return (zbir, proizvod)
    }
    console.log(x(niz))

}
// cetvrti
{
    let niz = [5, 10, 16, 20]

    function x(niz) {
        let zbir = 0
        let proizvod = 1
        for (i = 0; i < niz.length; i++) {
            if (i % 2 == 0) {
                zbir += niz[i]
                
            }else{
                proizvod *= niz[i]
                
            }


        }
        return (zbir, proizvod)
    }
    console.log(x(niz))
}
// peti 
{
    let niz = ["patar", "jakov", "aleksa"]
    function x(niz){
        for(i = 0; ; ){}
    }
}

