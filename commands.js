// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
// 2. Create a collection called bounties
use jaskis
'switched to db jaskis'
db
jaskis
db.createCollection('bounties')
{ ok: 1 }
show collections
bounties

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.bounties.insertOne(
    { name: "Thanoceros",
    species: "Rhinoceros",
    location: "Grasslands",
    wantedFor: "Eating too much grass",
    client: "Songbird",
    reward: 10000,
    captured: false }
    )
//   { acknowledged: true,
//     insertedId: ObjectId("62da1a792f0e81a540cc40da") }

// 2. Query for all bounties in the bounties collection
db.bounties.find()
// { _id: ObjectId("62da1a792f0e81a540cc40da"),
//   name: 'Thanoceros',
//   species: 'Rhinoceros',
//   location: 'Grasslands',
//   wantedFor: 'Eating too much grass',
//   client: 'Songbird',
//   reward: 10000,
//   captured: false }

// 3. Insert many bounties at once using the given objects
db.bounties.insertMany([
    {
      "name": "Lokinkajou",
      "species": "Kinkajou",
      "location": "Tropical rainforest",
      "wantedFor": "Partying too late at night",
      "client": "White tiger",
      "reward": 1000,
      "captured": false
    },
    {
      "name": "Nebullama",
      "species": "Llama",
      "location": "Grasslands",
      "wantedFor": "Drinking all the water from the ocean",
      "client": "Songbird",
      "reward": 2500,
      "captured": false
    },
    {
      "name": "Polarwind",
      "species": "Polar Bear",
      "location": "Arctic",
      "wantedFor": "Not hibernating",
      "client": "Sabertooth",
      "reward": 4000,
      "captured": false
    },
    {
      "name": "Wrecking Crows",
      "species": "Crow",
      "location": "Grasslands",
      "wantedFor": "Cawing too loudly",
      "client": "Red wolf",
      "reward": 40000,
      "captured": false
    },
    {
      "name": "Grandhog",
      "species": "Groundhog",
      "location": "Woodlands",
      "wantedFor": "Not coming out of the hole on time and prolonging winter",
      "client": "Songbird",
      "reward": 50000,
      "captured": false
    },
    {
      "name": "Grim Panda",
      "species": "Giant Panda",
      "location": "Temperate forest",
      "wantedFor": "Eating all the bamboo",
      "client": "Red wolf",
      "reward": 5000,
      "captured": false
    }
  ])
//   { acknowledged: true,
//     insertedIds: 
//      { '0': ObjectId("62da1c382f0e81a540cc40db"),
//        '1': ObjectId("62da1c382f0e81a540cc40dc"),
//        '2': ObjectId("62da1c382f0e81a540cc40dd"),
//        '3': ObjectId("62da1c382f0e81a540cc40de"),
//        '4': ObjectId("62da1c382f0e81a540cc40df"),
//        '5': ObjectId("62da1c382f0e81a540cc40e0") } }

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.bounties.find({location: "Grasslands"})
// { _id: ObjectId("62da1a792f0e81a540cc40da"),
//   name: 'Thanoceros',
//   species: 'Rhinoceros',
//   location: 'Grasslands',
//   wantedFor: 'Eating too much grass',
//   client: 'Songbird',
//   reward: 10000,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40dc"),
//   name: 'Nebullama',
//   species: 'Llama',
//   location: 'Grasslands',
//   wantedFor: 'Drinking all the water from the ocean',
//   client: 'Songbird',
//   reward: 2500,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40de"),
//   name: 'Wrecking Crows',
//   species: 'Crow',
//   location: 'Grasslands',
//   wantedFor: 'Cawing too loudly',
//   client: 'Red wolf',
//   reward: 40000,
//   captured: false }

// 2. Query for all bounties with a reward worth 10000 or more
db.bounties.find({ reward: {$gte: 10000} })
// { _id: ObjectId("62da1a792f0e81a540cc40da"),
//   name: 'Thanoceros',
//   species: 'Rhinoceros',
//   location: 'Grasslands',
//   wantedFor: 'Eating too much grass',
//   client: 'Songbird',
//   reward: 10000,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40de"),
//   name: 'Wrecking Crows',
//   species: 'Crow',
//   location: 'Grasslands',
//   wantedFor: 'Cawing too loudly',
//   client: 'Red wolf',
//   reward: 40000,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40df"),
//   name: 'Grandhog',
//   species: 'Groundhog',
//   location: 'Woodlands',
//   wantedFor: 'Not coming out of the hole on time and prolonging winter',
//   client: 'Songbird',
//   reward: 50000,
//   captured: false }

// 3. Query for all bounties, but exclude the client attribute from being shown
db.bounties.find({}, {client: 0})
// { _id: ObjectId("62da1a792f0e81a540cc40da"),
//   name: 'Thanoceros',
//   species: 'Rhinoceros',
//   location: 'Grasslands',
//   wantedFor: 'Eating too much grass',
//   reward: 10000,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40db"),
//   name: 'Lokinkajou',
//   species: 'Kinkajou',
//   location: 'Tropical rainforest',
//   wantedFor: 'Partying too late at night',
//   reward: 1000,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40dc"),
//   name: 'Nebullama',
//   species: 'Llama',
//   location: 'Grasslands',
//   wantedFor: 'Drinking all the water from the ocean',
//   reward: 2500,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40dd"),
//   name: 'Polarwind',
//   species: 'Polar Bear',
//   location: 'Arctic',
//   wantedFor: 'Not hibernating',
//   reward: 4000,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40de"),
//   name: 'Wrecking Crows',
//   species: 'Crow',
//   location: 'Grasslands',
//   wantedFor: 'Cawing too loudly',
//   reward: 40000,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40df"),
//   name: 'Grandhog',
//   species: 'Groundhog',
//   location: 'Woodlands',
//   wantedFor: 'Not coming out of the hole on time and prolonging winter',
//   reward: 50000,
//   captured: false }
// { _id: ObjectId("62da1c382f0e81a540cc40e0"),
//   name: 'Grim Panda',
//   species: 'Giant Panda',
//   location: 'Temperate forest',
//   wantedFor: 'Eating all the bamboo',
//   reward: 5000,
//   captured: false }

// 4. Query for a Groundhog in the Woodlands
db.bounties.find({ $and: [{species: "Groundhog"}, {location: "Woodlands"}] })
// { _id: ObjectId("62da1c382f0e81a540cc40df"),
//   name: 'Grandhog',
//   species: 'Groundhog',
//   location: 'Woodlands',
//   wantedFor: 'Not coming out of the hole on time and prolonging winter',
//   client: 'Songbird',
//   reward: 50000,
//   captured: false }

// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.bounties.updateOne({name: "Polarwind"}, { $set: {reward: "10000"}})
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0 }

// 2. Remove Lokinkajou
db.bounties.deleteOne({name: "Lokinkajou"})
// { acknowledged: true, deletedCount: 1 }

// 3. Delete all bounties sent by Songbird
db.bounties.deleteMany({client: "Songbird"})
// { acknowledged: true, deletedCount: 3 }

// 4. Update all captured statuses to true
db.bounties.updateMany({captured: false},{ $set: {captured: true}})
// { acknowledged: true,
//   insertedId: null,
//   matchedCount: 3,
//   modifiedCount: 3,
//   upsertedCount: 0 }


//Bonus  
//1. Joined after Dec 31, 2011.  
db.scavengers.find({joined: {$gte: ISODate('2011-12-31')}})
// { _id: ObjectId("62dc0e152f0e81a540cc40e6"),
//   name: 'Scarlet Wolf',
//   joined: 2015-05-01T00:00:00.000Z,
//   power: 'Hunting',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true } ] }
// { _id: ObjectId("62dc0e152f0e81a540cc40e7"),
//   name: 'Black Jaguar',
//   joined: 2018-04-23T00:00:00.000Z,
//   power: 'Camoflauge',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true },
//      { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true } ] }

//2. All scavengers that helped capture Thanoceros
db.scavengers.find({'captured.name': "Thanoceros"})
// { _id: ObjectId("62dc0e152f0e81a540cc40e3"),
//   name: 'Thowl',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Night vision',
//   weapon: 'Lasers',
//   captured: 
//    [ { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true },
//      { name: 'Polarwind',
//        species: 'Polar Bear',
//        location: 'Arctic',
//        wantedFor: 'Not hibernating',
//        client: 'Sabertooth',
//        reward: 10000,
//        captured: true } ] }
// { _id: ObjectId("62dc0e152f0e81a540cc40e4"),
//   name: 'Brown Recluse',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Inciting fear into the heart of enemies',
//   weapon: 'Webs',
//   captured: 
//    [ { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true },
//      { name: 'Wrecking Crows',
//        species: 'Crow',
//        location: 'Grasslands',
//        wantedFor: 'Cawing too loudly',
//        client: 'Red wolf',
//        reward: 40000,
//        captured: true } ] }
// { _id: ObjectId("62dc0e152f0e81a540cc40e7"),
//   name: 'Black Jaguar',
//   joined: 2018-04-23T00:00:00.000Z,
//   power: 'Camoflauge',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true },
//      { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true } ] }

//3. All scavengers who caught a bounty greater than 11000
db.scavengers.find({'captured.reward': {$gt: 11000}})
// { _id: ObjectId("62dc0e152f0e81a540cc40e4"),
//   name: 'Brown Recluse',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Inciting fear into the heart of enemies',
//   weapon: 'Webs',
//   captured: 
//    [ { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true },
//      { name: 'Wrecking Crows',
//        species: 'Crow',
//        location: 'Grasslands',
//        wantedFor: 'Cawing too loudly',
//        client: 'Red wolf',
//        reward: 40000,
//        captured: true } ] }
// { _id: ObjectId("62dc0e152f0e81a540cc40e5"),
//   name: 'Falconeye',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Flight',
//   captured: 
//    [ { name: 'Wrecking Crows',
//        species: 'Crow',
//        location: 'Grasslands',
//        wantedFor: 'Cawing too loudly',
//        client: 'Red wolf',
//        reward: 40000,
//        captured: true } ] }

//4. All scavengers that don't have a weapon.
db.scavengers.find({weapon: null})
// { _id: ObjectId("62dc0e152f0e81a540cc40e5"),
//   name: 'Falconeye',
//   joined: 2011-07-22T00:00:00.000Z,
//   power: 'Flight',
//   captured: 
//    [ { name: 'Wrecking Crows',
//        species: 'Crow',
//        location: 'Grasslands',
//        wantedFor: 'Cawing too loudly',
//        client: 'Red wolf',
//        reward: 40000,
//        captured: true } ] }
// { _id: ObjectId("62dc0e152f0e81a540cc40e6"),
//   name: 'Scarlet Wolf',
//   joined: 2015-05-01T00:00:00.000Z,
//   power: 'Hunting',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true } ] }
// { _id: ObjectId("62dc0e152f0e81a540cc40e7"),
//   name: 'Black Jaguar',
//   joined: 2018-04-23T00:00:00.000Z,
//   power: 'Camoflauge',
//   captured: 
//    [ { name: 'Grim Panda',
//        species: 'Giant Panda',
//        location: 'Temperate forest',
//        wantedFor: 'Eating all the bamboo',
//        client: 'Red wolf',
//        reward: 5000,
//        captured: true },
//      { name: 'Thanoceros',
//        species: 'Rhinoceros',
//        location: 'Grasslands',
//        wantedFor: 'Eating too much grass',
//        client: 'Songbird',
//        reward: 10000,
//        captured: true } ] }