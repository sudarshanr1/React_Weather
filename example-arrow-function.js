/*var names = ['Sudarshan', 'Ravindranath','hi', 'hello'];
names.forEach(function(name){
  console.log('forEach ', name);
})

names.forEach((name)=>{console.log('Arrow '+name)});
names.forEach((name)=>console.log(name));

var returnMe = (name)=> name+'!';

console.log(returnMe('Sudarshan'));

var person = {
  name:'Sudarshan',
  greet: function() {
    var _this = this;
    names.forEach(function(name) {
      console.log(_this.name + 'Says hi to' + name);
    });
  }
}

person.greet();

var person1 = {
  name:'Sudarshan',
  greet: function() {
    names.forEach((name)=>console.log(this.name + 'Says hi to' + name));
  }
}
person1.greet();

*/

var add = function(a, b) {
  console.log(a+b);
}
add(5,4);
var addC = (a,b) => {
  console.log(a+b);
}
addC(5,4);
var addE = (a, b)=>console.log(a+b);
addE(5,4);
