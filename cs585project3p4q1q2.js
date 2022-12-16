/**
 * CS585 Project3 Problem4 Question1&2
 * @author Zhixiang Wang
 */

const mongodb = require("mongodb");
const { MongoClient } = mongodb;

var { ObjectId } = mongodb;

const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

async function run() {
  try {
    // Create and connect to collection
    const database = client.db('test');
    database.createCollection('test');
    const test = database.collection('test');
    const bios = [
      {
        "_id": 1,
        "name": {
          "first": "John",
          "last": "Backus"
        },
        "birth": new Date("1924-12-03T05:00:00Z"),
        "death": new Date("2007-03-17T04:00:00Z"),
        "contribs": [
          "Fortran",
          "ALGOL",
          "Backus-Naur Form",
          "FP"
        ],
        "awards": [
          {
            "award": "W.W. McDowell Award",
            "year": 1967,
            "by": "IEEE Computer Society"
          },
          {
            "award": "National Medal of Science",
            "year": 1975,
            "by": "National Science Foundation"
          },
          {
            "award": "Turing Award",
            "year": 1977,
            "by": "ACM"
          },
          {
            "award": "Draper Prize",
            "year": 1993,
            "by": "National Academy of Engineering"
          }
        ]
      },
      {
        "_id": ObjectId("51df07b094c6acd67e492f41"),
        "name": {
          "first": "John",
          "last": "McCarthy"
        },
        "birth": new Date("1927-09-04T04:00:00Z"),
        "death": new Date("2011-12-24T05:00:00Z"),
        "contribs": [
          "Lisp",
          "Artificial Intelligence",
          "ALGOL"
        ],
        "awards": [
          {
            "award": "Turing Award",
            "year": 1971,
            "by": "ACM"
          },
          {
            "award": "Kyoto Prize",
            "year": 1988,
            "by": "Inamori Foundation"
          },
          {
            "award": "National Medal of Science",
            "year": 1990,
            "by": "National Science Foundation"
          }
        ]
      },
      {
        "_id": 3,
        "name": {
          "first": "Grace",
          "last": "Hopper"
        },
        "title": "Rear Admiral",
        "birth": new Date("1906-12-09T05:00:00Z"),
        "death": new Date("1992-01-01T05:00:00Z"),
        "contribs": [
          "UNIVAC",
          "compiler",
          "FLOW-MATIC",
          "COBOL"
        ],
        "awards": [
          {
            "award": "Computer Sciences Man of the Year",
            "year": 1969,
            "by": "Data Processing Management Association"
          },
          {
            "award": "Distinguished Fellow",
            "year": 1973,
            "by": " British Computer Society"
          },
          {
            "award": "W. W. McDowell Award",
            "year": 1976,
            "by": "IEEE Computer Society"
          },
          {
            "award": "National Medal of Technology",
            "year": 1991,
            "by": "United States"
          }
        ]
      },
      {
        "_id": 4,
        "name": {
          "first": "Kristen",
          "last": "Nygaard"
        },
        "birth": new Date("1926-08-27T04:00:00Z"),
        "death": new Date("2002-08-10T04:00:00Z"),
        "contribs": [
          "OOP",
          "Simula"
        ],
        "awards": [
          {
            "award": "Rosing Prize",
            "year": 1999,
            "by": "Norwegian Data Association"
          },
          {
            "award": "Turing Award",
            "year": 2001,
            "by": "ACM"
          },
          {
            "award": "IEEE John von Neumann Medal",
            "year": 2001,
            "by": "IEEE"
          }
        ]
      },
      {
        "_id": 5,
        "name": {
          "first": "Ole-Johan",
          "last": "Dahl"
        },
        "birth": new Date("1931-10-12T04:00:00Z"),
        "death": new Date("2002-06-29T04:00:00Z"),
        "contribs": [
          "OOP",
          "Simula"
        ],
        "awards": [
          {
            "award": "Rosing Prize",
            "year": 1999,
            "by": "Norwegian Data Association"
          },
          {
            "award": "Turing Award",
            "year": 2001,
            "by": "ACM"
          },
          {
            "award": "IEEE John von Neumann Medal",
            "year": 2001,
            "by": "IEEE"
          }
        ]
      },
      {
        "_id": 6,
        "name": {
          "first": "Guido",
          "last": "van Rossum"
        },
        "birth": new Date("1956-01-31T05:00:00Z"),
        "contribs": [
          "Python"
        ],
        "awards": [
          {
            "award": "Award for the Advancement of Free Software",
            "year": 2001,
            "by": "Free Software Foundation"
          },
          {
            "award": "NLUUG Award",
            "year": 2003,
            "by": "NLUUG"
          }
        ]
      },
      {
        "_id": ObjectId("51e062189c6ae665454e301d"),
        "name": {
          "first": "Dennis",
          "last": "Ritchie"
        },
        "birth": new Date("1941-09-09T04:00:00Z"),
        "death": new Date("2011-10-12T04:00:00Z"),
        "contribs": [
          "UNIX",
          "C"
        ],
        "awards": [
          {
            "award": "Turing Award",
            "year": 1983,
            "by": "ACM"
          },
          {
            "award": "National Medal of Technology",
            "year": 1998,
            "by": "United States"
          },
          {
            "award": "Japan Prize",
            "year": 2011,
            "by": "The Japan Prize Foundation"
          }
        ]
      },
      {
        "_id": 8,
        "name": {
          "first": "Yukihiro",
          "aka": "Matz",
          "last": "Matsumoto"
        },
        "birth": new Date("1965-04-14T04:00:00Z"),
        "contribs": [
          "Ruby"
        ],
        "awards": [
          {
            "award": "Award for the Advancement of Free Software",
            "year": 2011,
            "by": "Free Software Foundation"
          }
        ]
      },
      {
        "_id": 9,
        "name": {
          "first": "James",
          "last": "Gosling"
        },
        "birth": new Date("1955-05-19T04:00:00Z"),
        "contribs": [
          "Java"
        ],
        "awards": [
          {
            "award": "The Economist Innovation Award",
            "year": 2002,
            "by": "The Economist"
          },
          {
            "award": "Officer of the Order of Canada",
            "year": 2007,
            "by": "Canada"
          }
        ]
      },
      {
        "_id": 10,
        "name": {
          "first": "Martin",
          "last": "Odersky"
        },
        "contribs": [
          "Scala"
        ]
      }
    ];
    const options = { ordered: true };
    const results = await test.insertMany(bios, options);
    console.log(`${results.insertedCount} documents were inserted`);

    // Question 1 1.
    const q11 = [
      {
        "_id": 20,
        "name": {
          "first": "Alex",
          "last": "Chen"
        },
        "birth": new Date("1933-08-27T04:00:00Z"),
        "death": new Date("1984-11-07T04:00:00Z"),
        "contribs": [
          "C++",
          "Simula"
        ],
        "awards": [
          {
            "award": "WPI Award",
            "year": 1977,
            "by": "WPI"
          }
        ]
      },
      {
        "_id": 30,
        "name": {
          "first": "David",
          "last": "Mark"
        },
        "birth": new Date("1911-04-12T04:00:00Z"),
        "death": new Date("2000-11-07T04:00:00Z"),
        "contribs": [
          "C++",
          "FP",
          "Lisp"
        ],
        "awards": [
          {
            "award": "WPI Award",
            "year": 1963,
            "by": "WPI"
          },
          {
            "award": "Turing Award",
            "year": 1966,
            "by": "ACM"
          }
        ]
      },
    ]
    await test.insertMany(q11, options);

    // Question1 2.
    console.log('Operations for Question1 2.')
    const result_2 = test.find({
      $or: [{ "awards.2": { $exists: false } }, { contribs: "FP" }]
    });
    if ((await result_2.count()) === 0) {
      console.log("No documents found!");
    }
    await result_2.forEach((doc) => {
      console.log(doc)
    })

    // Question1 3.
    console.log('Operations for Question1 3.');
    await test.updateOne({
      name: {
        first: "Guido",
        last: "van Rossum"
      }
    }, { $push: { contribs: "OOP" } });
    const result_3 = test.find(
      {
        name: {
          first: "Guido",
          last: "van Rossum"
        }
      }
    )
    if ((await result_3.count()) === 0) {
      console.log("No documents found!");
    }
    await result_3.forEach((doc) => {
      console.log(doc)
    })

    // Question1 4.
    console.log('Operations for Question1 4.');
    await test.updateOne({
      name: {
        first: "Alex",
        last: "Chen"
      }
    }, {
      $set: {
        comments: [
          "He taught in 3 universities",
          "died from cancer",
          "lived in CA"
        ]
      }
    })
    const result_4 = test.find(
      {
        name: {
          first: "Alex",
          last: "Chen"
        }
      }
    )
    if ((await result_4.count()) === 0) {
      console.log("No documents found!");
    }
    await result_4.forEach((doc) => {
      console.log(doc)
    })

    // Question1 5.
    console.log('Operations for Question1 5.');
    const result_5_1 = await test.aggregate([
      { $match: { contribs: 'C++' } },
      // {$match: {contribs: "C++"}},
      { $group: { _id: { contribs: "C++" }, People: { $push: { first: "$name.first", last: "$name.last" } } } }
    ])
    const result_5_2 = await test.aggregate([
      { $match: { contribs: "Simula" } },
      // {$match: {contribs: "C++"}},
      { $group: { _id: { contribs: "Simula" }, People: { $push: { first: "$name.first", last: "$name.last" } } } }
    ])

    // if ((await result_5.count()) === 0) {
    //   console.log("No documents found!");
    // }
    await result_5_1.forEach((doc) => {
      console.log(doc)
    })
    await result_5_2.forEach((doc) => {
      console.log(doc)
    })

    //Question1 6.
    console.log('Operations for Question1 6.');
    const result_6 = await test.distinct("awards.by")
    // await result_6.forEach((doc) => {
    //   console.log(doc)
    // })
    console.log(result_6);

    //Question1 7.
    console.log('Operations for Question1 7.');
    const result_7 = await test.deleteMany({
      "awards.year": 2011
    })
    console.log("Deleted " + result_7.deletedCount + " documents");

    //Question1 8.
    console.log('Operations for Question1 8.');
    const result_8 = test.aggregate([
      // { },
      {
        $project:
        {
          name: 1,
          count: {
            $size: {
              $ifNull: [
                {
                  $filter: {
                    input: "$awards",
                    as: "award",
                    cond: { $eq: ["$$award.year", 2001] }
                  }
                }, []]
            }
          }
        }
      },
      {
        $match: {count: {$gte: 2}}
      }
    ])
    await result_8.forEach((doc) => {
      console.log(doc)
    })

    //Question1 9.
    console.log('Operations for Question1 9.');
    const result_9 = await test.find().sort({_id:-1}).limit(1)
    await result_9.forEach((doc) => {
      console.log(doc)
    })

    //Question1 10.
    console.log('Operations for Question1 10.');
    const result_10 = test.find({
      awards: {
        $elemMatch: {
          by: "ACM"
        }
      }
    }).limit(1);
    await result_10.forEach((doc) => {
      console.log(doc)
    })

    //Question2 1.
    console.log('Operations for Question2 1.');
    const result_2_1 = test.aggregate([
      {$unwind:"$awards"},
      { $group: { _id: "$awards.award", count: { $sum: 1 } } },
      {
        $project: {
          _id: 1,
          // Award: "$awards.award",
          count: 1
      }}
    ])

    await result_2_1.forEach((doc) => {
      console.log(doc)
    })

    //Question2 2.
    console.log('Operations for Question2 2.');
    const result_2_2 = test.aggregate([
      { $group: { _id: {year: {$year: "$birth"}}, _ids:{$push:"$_id"} } },
    ])

    await result_2_2.forEach((doc) => {
      console.log(doc)
    })

    //Question2 3.
    console.log('Operations for Question2 3.');
    const smallest = test.find().sort({ _id: 1 }).limit(1);
    const biggest = test.find().sort({ _id: -1 }).limit(1);
    await smallest.forEach((doc) => {
      console.log(doc)
    })
    await biggest.forEach((doc) => {
      console.log(doc)
    })
  } finally {
    await client.close();
  }
}

run().then(() =>  console.log('Successfully run!')).catch(console.dir)