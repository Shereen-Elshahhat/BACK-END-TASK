const fs =require("fs")

const addPerson =( id , fname , lname , age , city )=>{
    const allData= loadDate()
    
    allData.push({
        id: id,
        fname: fname,
        lname: lname,
        city: city,
        age: age
    })

    saveAllData(allData)
}

/////////////////
const loadDate =()=>{
try{
    const dataJson =fs.readFileSync("data10.json").toString()
    return JSON.parse(dataJson)
}catch{
    return []
}}

////////////////
const saveAllData =(allData)=>{
    const saveAllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json", saveAllDataJson)
}


///////////////////////////////////////
const deletData =(id)=>{
    const allData =loadDate()
    const datatokeep =allData.filter((obj)=>{
        return obj.id !==id
    })
    console.log(datatokeep)
    saveAllData(datatokeep)
}

/////////////
module.exports={
    addPerson,
    deletData
}