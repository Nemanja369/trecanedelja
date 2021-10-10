let account = {
    userName:'pera',
    email: 'pera@',
    password: '',
    age: 33
}

// Pristupanje account.email


// niz.forEach((el) => {console.log(el)})

let osobe = [{imae: "PERA"},{}]

let keys = Object.keys(osobe[0])
console.log(keys)

let accaunt = {
    username: 'Pera',
    email: 'pera@gmail.com',
    password: 'dkjlsd346gs',
    age: 23,
    adresa: {
        //obj: {y:7},
        broj: 2,
        ulica: 'jfhjksd'
    }
}

let acc1 = {
    username: 'Pera',
    email: 'pera@gmail.com',
    password: 'dkjlsd346gs',
    age: 17,
    adresa: {
        broj: 2,
        ulica: 'jfhjksd'
    },
    dodatneInformacije: {
        avatar: 'imgnj.png'
    }
}
let acc2 = {
    username: 'Pera',
    email: 'pera@gmail.com',
    password: 'dkjlsd346gs',
    age: 23,
    adresa: {
        //obj: {y:7},
        broj: 2,
        ulica: 'jfhjksd'
    }
}

console.log(accaunt.username, accaunt.age);
console.log(accaunt.adresa.ulica + ' ' + accaunt.adresa.broj);
console.log(acc2.dodatneInformacije?.avatar);

console.log('-----------------------')

let osoba1 = {
    ime: 'ana',
    godine: 34
}

console.log(osoba1);

osoba1.prezime = 'peric'
osoba1.ime = 'Milica'

console.log(osoba1);

console.log(osoba1['ime']); //osoba1.ime

//  delete osoba1.ime

// // console.log('------');
//  console.log(osoba1);

console.log(Object.keys(osoba1));
console.log(Object.values(osoba1));
console.log(Object.entries(osoba1));


console.log('-------');

let o1 = {
    x: 7
}

let o2 = o1

o2.x = 9
o1.y = 0

console.log(o1, o2); // nije kopije vec isti objekat sa dve reference koje pokazuju na njega

let ob1 = {
    x: 6,
    f1: () => { console.log('hello'); }
}
//ob1.f1()
let ob2 = { ...ob1 } //ne radi za ugnjezdene objekte
ob2.y = 9
console.log(ob1, ob2); // dva razlicita objekta

let niz = [[1, 2], [3, 4], 5]
let niz2 = [...niz]
niz2[0][0] = 5

console.log(niz);
console.log(niz2);

console.log('----------');



let nizObjekata = [acc1, acc2, { username: 'Mika', password: 'jdfd7', age: 30 }]

console.log(nizObjekata);
console.log(nizObjekata[0].dodatneInformacije.avatar);

for (let i = 0; i < nizObjekata.length; i++) {
    if (nizObjekata[i].age >= 18)
        console.log(nizObjekata[i].age);
}

//foreach
nizObjekata.forEach((el) => { console.log(el.username); })



{
    let a = 9
    let x = { y: 5 }
    function funkcijaProba(obj, br) {
        obj.y = 9
        br = 6
        console.log(obj, br);
    }

    funkcijaProba(x)
    console.log(x, a);
}



{

    function kvadratBroja(x) {
        console.log(x * x);
    }

    let nizBrojeva = [1, 5, 2, 4, 7, 3]

    nizBrojeva.forEach(kvadratBroja)
}


{


    let o2 = { ime: 'Ana', prezime: 'Peric' }

    let keys = Object.keys(o2) //niz kljuceva kao stringovi
    console.log(keys);

    let pronadji = 'Ana'

    for (let i = 0; i < keys.length; i++) {

        if ('Ana' == o2[keys[i]]) {
            console.log(keys[i]);
        }
    }
}
{console.log('---------------------------------');
    let osobe = [{ ime: 'Pera', prezime: 'Peric' },
    { ime: 'Ana', prezime: 'Peric', godine: 34 },
    { ime: 'Mika', prezime: 'Peric', godine: 34 }]

    for (let i = 0; i < osobe.length; i++) {
        let keys = Object.keys(osobe[i])

        for (let j = 0; j < keys.length; j++) {

            if (34 == osobe[i][keys[j]]) {
                console.log(keys[j]);
            }
        }
    }
}
console.log("-----------------------------------------")

let recept1 = {
        ime: 'Шпагете у белом сосу',
        tezina: 'Средњи',
        sastojci: ['Шпагете', 'Павлака за кување', 'Бели лук', 'Ћуреће месо', 'Маслац', 'Јаја', 'Бибер', 'Со']
    }
    // Шпагете у белом сосу:
    // Тежина: Средњи
    // Састојци: Шпагете,Павлака за кување,Бели лук,Ћуреће месо,Маслац,Јаја,Бибер,Со

     function recept(x){
        let ime = Object.values(x)[0]
        let tezina = Object.values(x)[1]
        let sastojci = Object.values(x)[2]
        
    
        return ime + '\n' + tezina +'\n'+  sastojci
    //   return recept1.forEach((el) => { console.log(el.ime); })
       
     }
    console.log(recept(recept1))