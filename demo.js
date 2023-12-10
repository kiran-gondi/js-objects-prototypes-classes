'use strict'; 
(function() {

//Chapter 6 - Using Built-in JS Objects - START

    //Searching Strings with the RegExp.exec() Function
    function findAlerts(logData) {
        let regex = /ERROR(.*?):(.*?);/g;
        
        let result = regex.exec(logData);
        while(result !== null) {
          display(result[1]);
          display(result[2]);
          display('---------------------------');
          result = regex.exec(logData);    
        }
      }
       
      let logData = 'INFO:Ok;ERROR(HIGH):Something broke;ERROR(LOW):Something fishy;ERROR(HIGH):So many errors;';
       
      findAlerts(logData);

    //Validating Strings with the RegExp.test() Function
    /*function checkPasswordComplexity(password){
        //let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$', 'gi');
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/gi;

        return regex.test(password);
    }

    display(checkPasswordComplexity('wek'));
    display(checkPasswordComplexity('Stronger1'));*/

    //Managing Dates with the Date Object
    //Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC
    /*let date = new Date(2050, 3, 25, 13, 1, 30, 50);
    date.setMonth(6);

    display(date.toString());

    display(date.getFullYear());
    display(date.getMonth()); //Zero-Based
    display(date.getDate());
    display(date.getHours());
    display(date.getMinutes());
    display(date.getSeconds());
    display(date.getMilliseconds());

    display(date.getUTCFullYear());
    display(date.getUTCMonth()); //Zero-Based
    display(date.getUTCDate());
    display(date.getUTCHours());
    display(date.getUTCMinutes());
    display(date.getUTCSeconds());
    display(date.getUTCMilliseconds());

    let date1 = new Date(2050, 3, 25, 13, 1, 30, 50);
    let date2 = new Date(2050, 3, 25, 13, 1, 30, 58);
    display(date2-date1);*/

    // let date = new Date(1000);
    //display(date.toString());

    //Using the JS Math Object
    //Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    // display(Math.PI);
    // display(Math.max(2, 34,89, 32));
    // display(Math.round(23.43));

//Chapter 6 - Using Built-in JS Objects - END

//Chapter 5 - JS Classes - START

    //Using Static Properties and Methods
    //Using Inheritance with JS Classes
    //Modifying Property Descriptors on Classes
    //Creating Getters and Setters with Classes
    //Adding Functions to Classes
    /*class Person{
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        
        static adultAge = 18;

        get fullName(){
            return this.firstName + ' ' + this.lastName;
        }

        set fullName(fullName){
            var nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }

        isAdult(){
            return this.age >= 18;
        }

    }

    display(Person.adultAge);

    display(Math.PI);

    display(Math.abs(-500));

    class Student extends Person {
        constructor(firstName, lastName, age){
            super(firstName, lastName, age);
            this._enrolledCourses = [];
        }

        static fromPerson(person){
            return new Student(person.firstName, person.lastName, person.age);
        }

        enroll(courseId){
            this._enrolledCourses.push(courseId);
        };

        getCourses(){
            return this.fullName + "'s enrolled courses are: " +
            this._enrolledCourses.join(', ');
        };
    }

    //Object.defineProperty(Person.prototype, 'fullName', { enumerable: true });

    let jim = new Person('Jim', 'Cooper', 22);
    //let jim = new Student('Jim', 'Cooper', 22);
    // jim.fullName = 'kg dd'
    // display(jim.fullName);
    //display(jim.isAdult());
    //display(jim);
    // jim.enroll('CS022');
    // display (jim.getCourses());
    // let jim = new Person('Jim', 'Cooper', 29);
    // display(jim);
    let jimStudent = Student.fromPerson(jim);
    display(jimStudent);*/

    //Creating Objects with Classes
    /*class Person{
        constructor(firstName, lastName, age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }

    let jim = new Person('Jim', 'Cooper', '12');
    display(jim);*/

//Chapter 5 - JS Classes - END

//Chapter 4 - JS Prototypes and Interfaces - START

    //Creating your Own Prototypal Inheritance Chains
    /*function Person(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        Object.defineProperty(this, 'fullName', {
            get: function(){
                return this.firstName + ' ' + this.lastName;
            },
            enumerable: true
        });
    }

    function Student(firstName, lastName, age){
        Person.call(this, firstName, lastName, age);
        this._enrolledCourses = [];

        this.enroll = function(courseId){
            this._enrolledCourses.push(courseId);
        };

        this.getCourses = function(){
            return this.fullName + "'s enrolled courses are: " +
            this._enrolledCourses.join(', ');
        };
    }
    //display(Student.prototype.constructor);
    Student.prototype = Object.create(Person.prototype);
    //display(Student.prototype.constructor);
    Student.prototype.constructor = Student;
    //display(Student.prototype.constructor);

    let jim = new Student('Jim', 'Cooper', 29);

    jim.enroll('CS020');
    jim.enroll('MA121');

    display(jim);
    // display(jim.__proto__);
    // display(jim.__proto__.__proto__);
    display(jim.getCourses());*/

    //Multiple levels of Inheritance
    /*function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.age = 4;

    let jim = new Person('Jim', 'Cooper');

    display(jim.__proto__);
    display(jim.__proto__.__proto__);
    display(jim.__proto__.__proto__.__proto__);*/

    //Changing a Functions Prototype
    /*function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.age = 29;

    var jim = new Person('Jim', 'Cooper');
    var sofia = new Person('Sofia', 'Cooper');

    Person.prototype = { age: 18 };

    let kris = new Person('Kris', 'Cooper');

    display(Person.prototype);
    display(jim.age);
    display(sofia.age);
    display(kris.age);*/

    //Instance vs Prototype Properties
    /*function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.age = 29;

    let jim = new Person('Jim', 'Cooper');
    let sofia = new Person('Sofia', 'Cooper');

    //jim.age = 11;

    // display(jim.age);
    // display(jim.__proto__.age);
    //display(sofia.age);
    jim.age = 22;
    display(jim.hasOwnProperty('age'));
    display(jim.age);*/

    //What is a Prototype?
    /*let myFunction = function() {}
    //Definition: A Funtions prototype is the object instance that will become 
    //the prototype for all objects created using this function as a constructor.
    display(myFunction.prototype);

    let person = {firstName: 'Jim'};
    //Defn: An objects prototype is the object instance from which the object 
    //is inherited.
    display(person.prototype);
    display(person.__proto__);*/

    /*function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.age = 29;

    display(Person.prototype);
    //A Funtions prototype is the object instance that will become the prototype for all objects created using this function as a constructor.
    let jim = new Person('Jim', 'Cooper');
    let sofia = new Person('Sofia', 'Cooper');
    sofia.__proto__.age = 19;

    display(jim.__proto__);
    display(sofia.__proto__);

    display(Person.prototype === jim.__proto__);*/


//Chapter 4 - JS Prototypes and Interfaces - END

//Chapter 3 - START

    //Creating Property Getters & Setters
    /*let person = {
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
    display(person.name.lastName);*/

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