// Prvi
{
    let niz = [5, 10, 16, 21]
    let niz2 = []
    function x(niz) {
        let zbir = 0
        let proizvod = 1
        for (i = 0; i < niz.length; i++) {
            if (niz[i] % 2 == 0) {
                zbir += niz[i]

            } else {
                proizvod *= niz[i]

            }

        }
        niz2.push(zbir)
        niz2.push(proizvod)

        return niz2
    }
    console.log(x(niz))
}
// Drugi
{
    let niz = [1, 'x', NaN, 0, undefined, true, null, 159]
    function x(niz) {
        let niz2 = []
        for (i = 0; i < niz.length; i++) {
            if (typeof niz[i] !== 'undefined' && typeof niz[i] !== 'boolean' &&
                !isNaN(niz[i]) && (niz[i] !== null) && niz[i] > 0) {
                niz2.push(niz[i])
                continue
            }
        }

        niz = [...niz2]
        return niz
    }

    console.log(x(niz))
}
// Treci
{
    let trojke = []
    let petice = []
    let triPet = []
    let triPetSedam = []
    let petSedam = []
    function prvihSto(n) {

        for (i = 1; i <= n; i++) {
            if (i % 3 === 0) {
                trojke.push(i)
            }
            if (i % 5 === 0) {
                petice.push(i)
            }
            if (i % 3 === 0 && i % 5 === 0) {
                triPet.push(i)
            }
            if (i % 5 === 0 && i % 7 === 0) {
                petSedam.push(i)
            }
            if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
                triPetSedam.push(i)
            }
        }
        return trojke + ' Fizz' + '\n' + petice + ' Buzz' + '\n' + triPet + 'Fizzbuzz' + '\n' +
            petSedam + ' BuzzZazz' + '\n' + triPetSedam + ' FizzBuzzZazz'
    }
    console.log(prvihSto(100))
}
// Cetvreti
{
    let x = 5
    let z = 9

    x = z - x
    z = z - x
    x = x + z
    console.log(z, x)
}

// Palindrom
{
    function najduziPalindrom(str) {

        let niz1 = [...str]
        // niz1 = str.split(" ")
        let temp2 = []
        let najduzi = ""
        let pal = []
        for (i = 0; i < niz1.length; i++) {
            let temp = []
            temp = niz1[i]

            for (j = i + 1; j < niz1.length; j++) {

                temp += niz1[j]
                if (temp.length > 2 && temp == temp.split("").reverse().join("")) {
                    temp2.push(temp);
                }
            }
            let brojac = 0
            
            for (k = 0; k <= temp2.length; k++) {
                if (brojac >= k.length) {
                    najduzi = temp2[k - 1]
                } else {
                    brojac = k.length
                }
console.log(brojac)
                console.log(najduzi)


                //    temp2.push(maksPal[k])
                //     let z = temp2.join()
                //     // if (temp2[0].length < temp2[k].length){
                //     //     temp2 = k
                //     // }
                //     console.log(z)
                // }


                // console.log(maksPal)
            }

        }
        return najduzi
    }
    console.log(najduziPalindrom("anavolimilovana"))
}

