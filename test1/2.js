
{
    let n = 5;
    console.log('*'.repeat(2*n))
    for( i = 1; i < n; i++){
        console.log('*'.repeat(n-i) + ' '.repeat(2*i) + '*'.repeat(n-i))   
    }
    
    for( i = 1; i < n; i++){
        console.log(('*'.repeat(i)) + ' '.repeat(2*(n-i)) + '*'.repeat(i))
    }
    console.log('*'.repeat(2*n))
}
