const checkYuGiOh=(n)=>{
    let bagg=[]
    if (isNaN(n)===false){
    for(i=1; i<=n; i++){
    
        if(i===2){
            bagg.push('yu')
        }
        else if(i===3){
            bagg.push('gi')
        }
        else if(i===5){
            bagg.push('oh')
        }
        
        else if(i%2===0 && i%3===0 && i%5===0){
            bagg.push('yu-gi-oh')
        }
        else if(i%2===0 && i%3===0){
            bagg.push('yu-gi')
        }
        else if(i%3===0 && i%5===0){
            bagg.push('gi-oh')
        }
        else if(i%2===0 && i%5===0){
            bagg.push('yu-oh')
        }
        else if(i%2===0){
            bagg.push('yu')
        }
        else if(i%3===0){
            bagg.push('gi')
        }
        else if(i%5===0){
            bagg.push('oh')
        }
        else{
            bagg.push(i)
        }
            
    }
return bagg
}
else{
    console.log(`invalid parameter: ${n} `)
}
}
console.log(checkYuGiOh('100'))
console.log(checkYuGiOh('nine'))
console.log(checkYuGiOh(30))