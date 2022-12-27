var mongoose = require('mongoose');
var dotenv = require('dotenv');

// import person model
const personModel = require('./src/models/person');
const person = require('./src/models/person');

// connect to MongoDB
dotenv.config() // activate .env access
mongoose.set("strictQuery", false); // strictQuery deprecated
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connected to DB successfully !')
);

// ***** create a variable with the "person model"
// var person = new personModel({
//     name: "Youssef",
//     age: 5,
//     favoriteFoods: ["Pizza", "Spaghetti", "Cheeseburger"]
// })

// *****save the record "person" in the DB
// person.save(
//     (err,data)=>{
//         if (err){console.log("saving error --> : ", err)}else{
//             console.log(data.name , " saved correctly to the DB !")
//         }
//     }
// )

//  define a list of people
var arrayOfPeople = [
    {
        name: "Amal",
        age: 32,
        favoriteFoods: ["Seafood", "Pizza", "Salade"]
    },
    {
        name: "Dali",
        age: 33,
        favoriteFoods: ["Escalope", "Couscous", "Salade" , "Pizza"]
    },
    {
        name: "Anis",
        age: 29,
        favoriteFoods: ["Spaghetti", "Pizza", "Salade"]
    },
    {
        name: "Khaled",
        age: 26,
        favoriteFoods: ["Seafood", "Spaghetti", "Couscous"]
    }
]

// **** create many instances in the DB
// personModel.create(arrayOfPeople)
//     .then(()=>console.log('arrayOfPeeople added successfully !'))
//     .catch((err)=>console.log('an error was occured while adding arrayOfPeople --> :', err))

// ***** list all elements in the DB
// personModel.find()
//     .then((el)=>console.log('******* list of all ', el.length ,'elements in the DB --> :',el))
//     .catch(err=>console.log('an error while executing .find method --> :' , err))

// ***** find all persons named Youssef ----> return an array !!
// personModel.find({name : "Youssef"})
//     .then((el)=>console.log("******  ",el.length,' named Youssef was found --> :', el))
//     .catch(err=>console.log('an error while executing .find one method --> :' , err))

// ****** find one person who likes Seafood
// personModel.findOne({favoriteFoods:"Seafood"})
//     .then((el)=>console.log("*** find one ***  ",el.name , ' who likes Seafood was found --> :', el))
//     .catch(err=>console.log('an error while executing .find method --> :' , err))

// ****** find A person who likes "food"
let food = "Couscous";
// personModel.findOne({favoriteFoods:food})
//     .then((el)=>console.log("*** find one ***  ",el.name ,' who likes ', food ,' was found --> :', el))
//     .catch(err=>console.log('an error while executing .find method --> :' , err))

// **** find by ID
// personModel.findById("63aaed841b0d6abea9a3268b")
//     .then((el)=>console.log("*** ID ***  ",el.name , ' was found --> :', el))
//     .catch(err=>console.log('an error while executing .find method --> :' , err))

// ****** find edit then save
// let personID = "63aaed841b0d6abea9a3268b";
// let addedFood = "Humbourger"
// personModel.findById(personID)
//     .then(el=>{
//         el.favoriteFoods.push(addedFood);
//         console.log(el);
//         el.save(()=>console.log(addedFood, ' added to ', el.name , ' favorite foods successfully !'))
//     })

//  **** find one and update
// let personName = "Amal";
// personModel.findOneAndUpdate(
//     {name: personName},
//     {age: 20},
//     {new : true}
//     )
//     .then((el)=>console.log(el , ' updated successfully !'))

// ***** create another person with the "person model"
// var person2 = new personModel({
//     name: "Ahmed",
//     age: 15,
//     favoriteFoods: ["Pizza", "Spaghetti", "Cheeseburger"]
// })
// person2.save(()=>console.log('person2 saved successfully !'))

// ***** findone and delete
// let idToDelete = "63aafc8a069c2e6dec14ab89";
// personModel.findByIdAndRemove(idToDelete)
//     .then((e)=>console.log(e.name , " successfully deleted !"))
//     .catch(err=>console.log('an error occured while deleting --> : ', err))


// **** adding "Mary"
// let mary = new personModel({
//         name: "Mary",
//         age: 32,
//         favoriteFoods: ["Seafood", "Pizza", "Salade"]
//     })
// mary.save(
//     ()=>console.log("Mary added.")
//     )

// *** delete all people named Mary
// *** 
// model.remove() deprecated !
// personModel.remove(
//     {name : "Mary"},
//     (er, e)=>console.log(e,' Mary removed')
//     )

var deleteByName = (nameVal,done) => {
    personModel.deleteMany({name: nameVal},(err,deletedRecord)=>{
        if (err){console.log(err)
        }else{
            done(null,deletedRecord)
        }
    })
}

deleteByName("Mary",(err,data)=>{
    console.log(data)
})


// personModel.deleteMany(
//     {name : "Mary"},
//     (er, result)=>console.log(result,' Mary removed')
// )


// **** chain query
//  *** add list of people
var burritosPeople = [
    {
        name: "Mike",
        age: 32,
        favoriteFoods: ["burritos","Seafood", "Pizza", "Salade"]
    },
    {
        name: "Sanny",
        age: 33,
        favoriteFoods: ["burritos","Escalope", "Couscous", "Salade" , "Pizza"]
    },
    {
        name: "Clamenza",
        age: 29,
        favoriteFoods: ["burritos","Spaghetti", "Pizza", "Salade"]
    },
    {
        name: "Niro",
        age: 26,
        favoriteFoods: ["burritos","Seafood", "Spaghetti", "Couscous"]
    }
]

// personModel.create(burritosPeople)
//     .then(()=>console.log('burritos people added'))

// ****** find then sort then limit then select then exec
let queryFood = 'burritos'
// personModel.find({favoriteFoods:queryFood})
//     .sort({name:1})
//     .limit(2)
//     .select({name:true , favoriteFoods: true})
//     .exec()
//     .then((els)=>console.log(els))

