function findMultiples(integer, limit){
    let result = [];
    for(let i = integer; i<=limit; i+=integer){
        result.push(i)
    }
    return result
}

console.log(findMultiples(2,10))