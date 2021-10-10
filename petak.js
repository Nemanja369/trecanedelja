let sastojak1 = {
    ime: 'Spagete',
    kolicina: 1,
    cena: 100
}
let sastojak2 = {
    ime: 'Pavlaka',
    kolicina: 2,
    cena: 135
}
let sastojak3 = {
    ime: 'meso',
    kolicina: 0.3,
    cena: 500
}

let recept1 = {
    ime: 'Spagete u sosu',
    tezina: 'Laki',
    sastojci: [sastojak1, sastojak2, sastojak3]
}

function ukupnaCenaSastojka(sastojak) {
    return sastojak.cena * sastojak.kolicina
}
function cenaJednogRecepta(recept) {
    let cena = 0
    for (i = 0; i < recept.sastojci.length; i++) {
        // cena += recept.sastojci[i].cena * recept.sastojci[i].kolicina
        cena += ukupnaCenaSastojka(recept.sastojci[i])
        return ukupnaCenaSastojka
    }



    console.log(cena)
}

console.log(ukupnaCenaSastojka(recept1));


//Napisati funkciju koja racuna ukupnu cenu jednog recepta
{
    let studenti = [{ ime: 'ana', prezime: 'petrovic', index: 123 },
    { ime: 'marko', prezime: 'petrovic', index: 124 },
    { ime: 'jelena', prezime: 'petrovic', index: 1234 }]

    

    studenti.forEach(student => {
        if (student.ime == 'marko') {
            student.prezime = 'jovic'
            console.log(studenti)
        }
    });

}
{
    let studenti = [{ ocene: [6, 9, 10], index: 123, osnovneStudije: true },
                    { ocene: [6, 9, 8], index: 456, osnovneStudije: false },
                    { ocene: [6, 9, 7], index: 789, osnovneStudije: true }]

                    const prosek = (niz)=>{
                        let sum = 0
                        niz.forEach(el => {
                            sum += el
                        })
                        return sum / niz.length
                    }
                studenti.forEach(student => {
                    if(student.osnovneStudije){
                        student.prosek = prosek(student.ocene)
                        console.log(prosek(student.ocene))

                    }
                    
                })
                console.log(studenti)
}
//parni
{
    let niz = [1, 3, 4, 8, 14, 15, 20]
    let parni = (niz) =>{ 
        return niz.filter((par) => par%2 ==0)   
}
console.log(parni(niz))
}
//Abs
{
    let niz = [1, 3, 4, 8, 14, 15, 20, -1]
    let abs = niz.map(ab => Math.abs(ab))
    console.log(abs)
}
//  Falsy

{
    let niz = [1, 3, 4, 8, 14, 15, 20, -1, false, NaN]
    let fals = niz.filter(el => el)
    console.log(fals)
}