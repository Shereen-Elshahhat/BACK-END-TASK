// // create object person (fname=ahmed,last=hassan,age=40,city=alex)/////////////

const yargs =require("yargs")

yargs.command({
    command: "add",
    describe:"add an item",
    builder:{
        fname:{
            describe:"this is first name description",
            demandOption: true,
            type:"string"
        },
        lname:{
            describe:"this is last name description",
            demandOption: true,
            type:"string"
        },
        age:{
            describe:"this is age description",
            demandOption: true,
            type:"string"
        },
        city:{
            describe:"this is city description",
            demandOption: true,
            type:"string"
        }
        
    },
    handler:()=>{
        console.log("you are already added an item")
    }
})

console.log(yargs.argv)

/////////delet an item/////////////

yargs.command({
    command: "delete",
    describe:"deldted an item",
    handler: ()=>{
        console.log("you are deleted an item")
    }

})
console.log(yargs.argv)

//////////////////////////////////////////////////////////////////


// change object to json

const person1=JSON.stringify(yargs.argv)
console.log(person1)

// store in file
const fs=require("fs")
fs.writeFileSync("data.json",person1)

// read file json
console.log(fs.readFileSync("data.json").toString)

//convert to object
const person2=JSON.parse(person1)
console.log(person2)

// change object to json
const person3=JSON.stringify(person2)
console.log(person3)

// store in file

fs.writeFileSync("data2.json",person3)
console.log(fs.readFileSync("data2.json").toString)


// task2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const data10=require("./data10")


const yargs =require("yargs")

yargs.command({
    command: "add",
    describe:"add an item",
    builder:{
        fname:{
            describe:"this is first name description",
            demandOption: true,
            type:"string"
        },
        lname:{
            describe:"this is last name description",
            demandOption: true,
            type:"string"
        },
       
        
    },
    handler:(x)=>{
        data10.addPerson(x.id,x.fname,x.lname,x.age,x.city)
    }
})

// console.log(yargs.argv)
yargs.parse

/////////delet an item/////////////

yargs.command({
    command: "delete",
    describe:"deldted an item",
    handler: ()=>{
        data10.deletData(x.id)
    }

})
console.log(yargs.argv)