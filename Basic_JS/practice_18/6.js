const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
   };
    
   const testArgs = ['sushi', 'hiking']
    
 
   let logPersonNameAndInterests = function() {
    console.log(`${Person.getFullName()} loves: ${testArgs.join(', ')}`);
  }

logPersonNameAndInterests();