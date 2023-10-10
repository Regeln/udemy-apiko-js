const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
     
let compose = (...functions) => (data) => functions.reduceRight((value, func) => func(value), data);

let modifyArray = (modifyCondition) => (data) => data.map(modifyCondition);
 
let capitalizeAllFirst; // use compose + modifyArray here
 
let allToLower; // use compose + modifyArray here
 
// capitalizeAllFirst(arr) // в консолі 'Result: Custom-Web-And-Mobile-Platforms length: 31'
// allToLower(arr) // в консолі 'Result: custom - web - and - mobile - platforms length: 39'