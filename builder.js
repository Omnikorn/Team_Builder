const { empty } = require("rxjs");


class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
}
getName(){
    console.log(`The employees name is ${this.name}`)
}
getId(){
    console.log(`This epmloyees id is ${this.id}`)
}
getEmail(){
    console.log(`The employees email is ${this.email}`)
}
}


class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email,)
    this.officeNumber=officeNumber;
    ;}

    getRole(){
        return "Manager"
    }

}

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github=github
        }
        getGithub(){
            return(`the github name is ${this.github}`)
        }
        getRole(){
            return "Engineer"
        }
    }

    class Intern extends Employee {
        constructor(name,id,email,school) {
            super (name,id,email)
            this.school=school
            
        }

        getSchool(){
            return (`the school is ${this.school}`)
        }
        getRole(){
            return "Intern"
        }
    }
// function company(){
//     const harith = new Manager ("bruce",1,"b@h",4224)
//     const timmy = new Engineer("wayne",2,"w@h","waynegit")
//     const wombles = new Intern("mango",3,"m@h","mhag")

//     console.log("harith " + harith.officeNumber)
//     console.log("timmy " + timmy.email)
//     console.log("wombles " + wombles.id)
// }


//     company()    
    
module.exports = {
    employee: Employee,
    manager: Manager,
    engineer: Engineer,
    intern: Intern,
}

// console.log("export= " + module.exports.Engineer  )