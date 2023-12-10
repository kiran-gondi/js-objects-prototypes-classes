'use strict'; 
(function() {

//Chapter 3 - START

    //Creating Property Getters & Setters
    let person = {
        name: {
            firstName: 'Jim',
            lastName: 'Cooper'
        },
        age: 29
    };

    Object.defineProperty(person, 'fullName',
    {
        get: function() {
            return this.name.firstName + ' ' + this.name.lastName;
        },
        set: function(value){
            var nameParts = value.split(' ');
            this.name.firstName = nameParts[0];
            this.name.lastName = nameParts[1];
        }
    });

    //display(person.fullName);
    person.fullName = 'Fred Jones';
    display(person.fullName);
    display(person.name.firstName);
    display(person.name.lastName);

    //Modifiying Properties with Property Descriptors
    /*let person = {
        firstName: 'Jim',
        lastName: 'Cooper',
        age: 29
    };

    Object.defineProperty(person, 'firstName', { configurable: false});
    //Object.defineProperty(person, 'firstName', { enumerable: false});
    //Object.defineProperty(person, 'firstName', { configurable: true}); --This is tricky one.
    //Object.defineProperty(person, 'firstName', {writable: true});

    delete person.firstName;
    display(person);*/

    /*refer above person object here too.

    Object.defineProperty(person, 'firstName', {enumerable: false });

    for(let propertyName in person) {
        display(propertyName + ': ' + person[propertyName]);
    }

    display(Object.keys(person));
    display(JSON.stringify(person));*/

    /*let person = {
        name: {
            firstName: 'Jim',
            lastName: 'Cooper'
        },
        age: 29
    };

    Object.defineProperty(person, 'name', {writable: false});

    //Object.freeze(person.name);
    person.name.firstName = 'Ted';

    display(person.name);*/

    // let person = {
    //     firstName: 'Jim',
    //     lastName: 'Cooper',
    //     age: 29
    // };

    // Object.defineProperty(person, 'firstName', {writable: false});
    // person.firstName = 'Ted';
    //display(Object.getOwnPropertyDescriptor(person, "firstName"));

    //Using Bracket Notation to Access JavaScript Properties
    /* refer above person object here too.

    // person['hair color'] = 'Brown';
    // display(person['hair color']);
    for(let propertyName in person){
        display(propertyName + ': ' + person[propertyName]);
    }*/


//Chapter 3 - END

    //Chapter 2 - START
    //Using Object.create()
    /*let person1 = {
        firstName: 'Jim',
        lastName: 'Cooper',
        age: 29
    };

    let person2 = Object.create(
        Object.prototype,
        {
            firstName: { value: 'Jim', enumerable: true, writable: true, configurable: true },
            lastName: { value: 'Cooper', enumerable: true, writable: true, configurable: true },
            age: { value: 29, enumerable: true, writable: true, configurable: true }
        }
    );

    display(person1);
    display(person2);
    //display(Object.is(person1, person2));
    display(person1 === person1);*/

    //Using Constructor Functions to Create Objects
    /*function Person(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAdult = function () { return this.age > 21 }
    }

    let jim = new Person('Jim', 'Cooper', 29);
    let sofia = new Person('Sofia', 'Cooper', 18);

    display(jim);
    display(jim.isAdult());
    display(sofia);
    display(sofia.isAdult());*/

    //Object Assign & Immutability
    /*let person1 = {
        firstName: 'Jim',
        lastName: 'Cooper',
        age: 29,
        isAdult: function() { return this.age > 18 }
    };

    let healthStatus = {
        height: 68,
        weight: 130
    };

    function mergeHealthStatus(person, healthStatus){
        return Object.assign({}, person, healthStatus);
    }

    let mergedPerson = mergeHealthStatus(person1, healthStatus);

    display(mergedPerson);

    display(person1);*/

    //Object Equality and the Object.is() function
    // ==, ===, Object.is(person1, person2);

    //Object Literal Method Declaration Shorthand Syntax
    //Inspecting Object properties with Object.keys() and for...in
    /*let person = {
        firstName: 'Jim',
        lastName: 'Bhim',
        age: 17,
        isAdult(){ return this.age >= 18 }
    };

    //display(person.isAdult());
    for(let propertyName in person){
        display(propertyName);
    }*/

    //Property Shorthand Syntax
    /*function registerUser(firstName, lastName){
        let person = {
            firstName,
            lastName
        };
        display(person);
    }

    registerUser('Jim', 'Bhim');*/

    /*let person = {
      firstName: 'Jim',
      lastName: 'Roland',
      age: 16,
      isAdult: function() { return this.age >= 18; }
    };
  
    //person.age = 22;
  
    //display(person.age);
    //display(person.lastName);
    display(person.firstName);
    display(person.isAdult());*/
    //Chapter 2 - END
  
})();