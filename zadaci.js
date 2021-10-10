let post1 = {
    title: 'naziv posta 1',
    text: 'neki tekst 111',
    likes: 6,
    comments: ['kom1', 'kom2', 'kom3']
}
let post2 = {
    title: 'naziv posta 2',
    text: 'neki tekst 222',
    likes: 1,
    comments: ['kom2', 'kom3']
}
let post3 = {
    title: 'naziv posta 3',
    text: 'neki tekst 333',
    likes: 118,
    comments: ['kom1', 'kom2']
}
let users = [
    { username: 'Ana', password: 'jfdh34ha23', posts: [post1, post2, post3] },
    { username: 'Pera', password: '444jjj', posts: [post2, post3] },
    { username: 'Pavle', password: '46gfj', posts: [post1, post3] }]
// console.log(users)

let sviUseri = (users) => {
    users.forEach(user => {
        console.log(user.username);
        user.posts.forEach(post => console.log(post.title))
    })
}
sviUseri(users)

let x = (obj) => {
    let temp = []
    Object.keys(obj).forEach(key => {
        let str = `Username: ${obj[key].username}, posts: `
        Object.keys(obj[key].posts).forEach(post => {
            str += `|${obj[key].posts[post].title} `

        })

        console.log(str)

    })
}
// brlajkova
let y = (obj) => {
    let temp = []
    Object.keys(obj).forEach(key => {
        let brLike = 0
        let str = `Username: ${obj[key].username}, likes: `
        Object.keys(obj[key].posts).forEach(post => {

            brLike += obj[key].posts[post].likes

        })

        console.log(str + brLike)

    })

}
let brojacLajkova = (users) => {
    let sum = 0
    users.forEach(user => {
        console.log(user.username);
        user.posts.forEach(post =>
            sum += post.likes)
    })
    return sum
}
brojacLajkova(users)
// sa najvis
console.log('--------------------------------')
let maksBrLike = (users) => {
    let userKey = ''

    let maksBrLike = 0
    users.forEach(user => {
        let brLike = 0
        user.posts.forEach(post => {
            brLike += post.likes
        })
      //  console.log(brLike)
      //ss  console.log(maksBrLike)
        if (brLike > maksBrLike) {
            maksBrLike = brLike
            userKey = user
        }

    })
return userKey
   // console.log(userKey)
}
console.log(maksBrLike(users))

//Ispisati sve komentare koji sadrze u sebi string 'kom'
let komentari = (users) => {
    users.forEach(user=>{
        user.posts.forEach(post=>{
            let koments = post.comments.filter(comm => comm.includes('kom'))
            console.log(koments)
        })
        
        })
          
}
komentari(users)

let sortNiz = (users) => {
    let sortN = []
    users.forEach(user => {
        let brLike = 0

        user.posts.forEach(post => {
            brLike += post.likes
        })
        sortN.push({ user, brLike })
    })
 
    console.log(sortN)
    return sortN
}

function sortNiz2(user1, user2) {
    let brlajkovaUser1 = 0;
    let brlajkovaUser2 = 0;
    user1.posts.forEach(post => {
        brlajkovaUser1 += post.likes;
    });
    user2.posts.forEach(post => {
        brlajkovaUser2 += post.likes;
    });
    if(brlajkovaUser1 > brlajkovaUser2) {
        return 1
    } else if(brlajkovaUser1 < brlajkovaUser2) {
        return -1
    } else {
        return 0
    }
}

users.sort(sortNiz2)
console.log('************************************')
console.log(users)
// maksBrLike(users)



// Napisati funkciju koja vraca samo onaj post koji ima tacno N lajkova //pogledati funkciju find
function postNLajkova(users,N){
    let x 
    users.forEach(user => {
         x = user.posts.find(post=>post.likes == N)
    });
    return x
}
function postsN(posts,N){
    return posts.find(post=>post.likes==N)
}
console.log('-------------------');
console.log(postNLajkova(users,118));

function lajkovijednogKorisnika(korisnik){
    let zbir = 0
    korisnik.posts.forEach(post =>{
        zbir+=post.likes
    })
    return zbir
}

// Napisati funkciju koja vraca korisnika(ceo objekat user) sa najvise lajkova
function korisnikSaNajviseLajkova(korisnici){
    let maxKorisnik  = korisnici[0]
    korisnici.forEach(korisnik=>{
        if(maxKorisnik.likes < lajkovijednogKorisnika(korisnik)){
            maxKorisnik = korisnik
        }
    })
    return maxKorisnik
}
console.log(korisnikSaNajviseLajkova(users));
