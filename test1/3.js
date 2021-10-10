// 1
{
let n = 33
let m = 20
let zbir = 0
let prosecnaVrednost = 0


if(n>m){
    t = n
    n = m
    m = t
}
 for( i = n; i < m; i++ ){
      zbir += i
 }
 prosecnaVrednost = zbir/ (m-n)
 console.log(prosecnaVrednost)
}
// 2

{
    let n = 20
    let m = 33
    let zbir = 0
    let prosecnaVrednost = 0
    let brojac =0
    let y
    
    if(n>m){
        t = n
        n = m
        m = t
    }

     for( i = n; i <= m; i++ ){
         
             i = i.toString()
             if(i.includes("2") ){
                brojac++
                 zbir += parseInt(i)
                
             }
             
         
          
     }
     prosecnaVrednost = zbir/brojac
     console.log(prosecnaVrednost)
    }




    