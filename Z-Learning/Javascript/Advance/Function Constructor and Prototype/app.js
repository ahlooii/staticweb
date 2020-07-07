

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//Function Construtor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//inheritance Prototype
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
}
    

var john = new Person('john', 1990, 'teacher'); 
var jane = new Person('jane', 1950, 'phychic');
var mark = new Person('mark', 1974, 'entrepenuer');



var Contact = function (name, numbers, relation, job, address, friendship) {
    this.name = name;
    this.numbers = numbers;
    this.relation = relation;
    this.job = job;
    this.address = address;
    this.friendship = friendship;
}

Contact.prototype.loveNess = function () {
    console.log(0 + this.friendship);
}

var jay = new Contact('Lim Chun Keat','+60122969935','Sjkc Yuhua','Fam Business','Seri Damai',60)

var boon = new Contact('Ong Boon Shen','+60163367894','Smjk Yuhua','Web Developer(Backend)','Kajang Impian',80)

jay.loveNess()
boon.loveNess()