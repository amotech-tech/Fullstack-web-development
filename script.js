const person ={
    firstname:"spongebob",
    lastname:"squarepants",
    age:21,
    isEmployed:false,
    
     fullName : function() {
    return this.firstname + " " + this.lastname;
  }
}

const person2 ={
    firstname:"kim",
    lastname:"skils",
    age:19,
    isEmployed: true,
    eat: function(){
        return "i am eating"
    }
}

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.fullName());
console.log(person2.eat());