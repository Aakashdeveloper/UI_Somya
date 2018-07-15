literal 

var animal = {
    type:'dog',
    color:'black'
}

var animal = {
    type:'dog',
    color:'black'
}
undefined
animal
{type: "dog", color: "black"}
typeof(animal)
"object"
animal.type
"dog"
animal.color
"black"
animal.legs= 4
4
animal
{type: "dog", color: "black", legs: 4}
animal.type="cow"
"cow"
animal
{type: "cow", color: "black", legs: 4}
delete animal.legs
true
animal
{type: "cow", color: "black"}
animal['color']
"black"
animal['type']
"cow"
animal['eyes']="red"
"red"
animal
{type: "cow", color: "black", eyes: "red"}

var database = {
    add:function(a,b){return a+b},
    sub:function(a,b){return a-b}
}

var sum = database.add(2,3)

/////////////////////constructor///////////////
var bob = new Object()
bob.age =10
bob.city = "london"

var bob = new Object()
bob.age =10
bob.city = "london"
"london"
bob
{age: 10, city: "london"}
bob.age
10
bob['age']
10
bob.eyes="black"
"black"
bob
{age: 10, city: "london", eyes: "black"}


var john = new Object();
john.age = 23
john.city="newyork"
john.setAge = function(newAge){
    john.age = newAge
}

var bob = new Object();
bob.age = 40;
bob.city ="amsterdam";
bob.setAge = function(newAge){
    bob.age = newAge
}

var createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 40;
bob.city ="amsterdam";
bob.setAge = createAge;


/////////////
function city(name,pop){
    this.name=name;
    this.pop = pop;
    this.country="India"
}

var jaipur = new city()

function database(){
    this.add = function(table,age){
        console.log("select * form "+table+" where age is greater than "+age)
    }
    this.update = function(table,age){
        console.log("delete * form "+table+" where age is greater than "+age)
    }
}

var product = new database();

product.add("student",10)


function database(){
    this.add = function(table,age){
        console.log("select * form "+table+" where age is greater than "+age)
    }
    this.update = function(table,age){
        console.log("delete * form "+table+" where age is greater than "+age)
    }
}

var product = new database()
undefined
product
database {add: ƒ, update: ƒ}
product.add("student",10)
VM310:3 select * form student where age is greater than 10
undefined
product.update("teacher",60)
VM310:6 delete * form teacher where age is greater than 60