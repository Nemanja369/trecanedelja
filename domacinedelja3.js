// 1. Deljivi sa 5
let niz = [3, 9, 15, 35, 48, 90]

function fu(niz) {
    let zni = []
    for (i = 0; i < niz.length; i++) {
        if (niz[i] % 5 == 0) {
            zni.push(niz[i])
        }
    }
    return zni
}
console.log(fu(niz))

// 2.
{
    let pokemon1 = {
        ime: 'pokemon1',
        vrsta: 'vrsta1',
        sposobnosti: ['sp1', 'sp2', 'sp3'],
        karakteristke: {
            napad: 89,
            odbraa: 60,
            brzina: 80
        }
    }
    let pokemon2 = {
        ime: 'pokemon2',
        vrsta: 'vrsta2',
        sposobnosti: ['sp1', 'sp2'],
        karakteristke: {
            napad: 89,
            odbraa: 60,
            brzina: 70
        }
    }
    let pokemon3 = {
        ime: 'pokemon3',
        vrsta: 'vrsta1',
        sposobnosti: ['sp2', 'sp3'],
        karakteristke: {
            napad: 89,
            odbraa: 60,
            brzina: 83
        }
    }
    let pokemon4 = {
        ime: 'pokemon4',
        vrsta: 'vrsta2',
        sposobnosti: ['sp1', 'sp4'],
        karakteristke: {
            napad: 89,
            odbraa: 60,
            brzina: 75
        }
    }

    let sviPokemoni = [pokemon1, pokemon2, pokemon3, pokemon4]



    // 3.

    let sveSposobnosti = (pok) => {
        let temp = []
        for (i = 0; i < pok.length; i++) {

            let x = pok[i].sposobnosti
            x.forEach(el => {
                if (!temp.includes(el))
                    temp.push(el)
            });

            // console.log(temp)
        }
        return temp
    }
    console.log(sveSposobnosti(sviPokemoni))

    // 4.

    let brzina = (pok) => {
        let temp = []
        //  pok.forEach(el=>)
        for (i = 0; i < pok.length; i++) {
            for (const iterator of Object.entries(pok[i].karakteristke)) {
                if (iterator.includes('brzina')) {
                    temp.push(iterator)
                }
                temp.sort()
            }
        }
        return temp
    }
    console.log(brzina(sviPokemoni))
    let speed = (pok) => {
        pok.forEach(el => console.log(el.ime)

        )
    }
    console.log(speed(sviPokemoni))


    // let jacina = () => {
    console.log('*********************************')
    // }
    let sviPodaci = (pok) => {
        let temp = []
        pok.forEach(el => {
            let str = ''
            let x = el.karakteristke
            for (const key in x) {
                str += key + ': ' + x[key] + ' '
            }
            temp.push(str)
            console.log(str)

        })

        return temp
    }
    console.log(sviPodaci(sviPokemoni))
}

function najjaci(pok){
    pok.forEach(el => 
        el.karakteristke.forEach())
}