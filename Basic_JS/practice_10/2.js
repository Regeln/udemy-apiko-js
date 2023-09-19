function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let sum = 0;

    for (const n of initialArray) {
        if (typeof(n) !== 'number')
            continue;
        sum += n;
    }
   console.log(sum);
}
    
calculateSumOfArray();