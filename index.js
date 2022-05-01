const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(){
    return cats.push('Ralph')
}

function destructivelyPrependCat(){
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    return cats.pop(cats)
    
}

function destructivelyRemoveFirstCat(){
    return cats.shift(cats)
}

function appendCat(name){
    const appendCat = [...cats, 'Broom' ]
    return appendCat
}

function prependCat(name){
    const prependCat = ['Arnold',...cats]
    return prependCat
}

function removeLastCat(){
    const removeLastCat = cats.slice(0,2)
    return removeLastCat
}

function removeFirstCat(){
    const removeFirstCat = cats.slice(-2)
    return removeFirstCat
}
