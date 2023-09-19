function printPowsOf2(number) {
    if (typeof(number) !== 'number') {
        console.error('incorrect type');
        return;
    }
    
    let nums = [];

    for (let a = 1; a <= number; a *= 2) {
        nums.push(a);
    }

    console.log(...nums);
}

printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);