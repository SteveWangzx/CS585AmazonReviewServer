/**
 * CS585 Project3 Problem4 Question3
 * @author Zhixiang Wang
 */

const mongodb = require("mongodb");
const { MongoClient } = mongodb;
 
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

async function heightOfTree(parentReference, currNode) {
  const children = await parentReference.find({ parent: currNode })
  if ((await children.count()) == 0) {
    return 1;
  }
  const heights = [];
  while (await children.hasNext()) {
    var child = await children.next();
    const currHeight = await heightOfTree(parentReference, child._id);
    heights.push(currHeight);
  }
  const max_height = Math.max(...heights);
  return max_height + 1;
}

async function run() {
  try {
    const database = client.db('test');
    database.createCollection('parentReference');
    const parentReference = database.collection('parentReference');

    const results = await parentReference.insertMany([
      { _id: "MongoDB", parent: "Databases" },
      { _id: "dbm", parent: "Databases" },
      { _id: "Databases", parent: "Programming" },
      { _id: "Languages", parent: "Programming" },
      { _id: "Programming", parent: "Books" },
      { _id: "Books", parent: null }
   ]);
    console.log(`${results.insertedCount} documents were inserted`);
    
    //question3 1.
    console.log("operations on Question3 1.")
    var ancestors = [];
    var stack = [];
    const item = await parentReference.findOne({ _id: "MongoDB" })
    stack.push(item)
    var level = 1;
    while (stack.length > 0) {
      var current = stack.pop();
      var ancestor = await parentReference.findOne({ _id: current.parent })
      if (!ancestor) {
        break;
      }
      const res = {
        Name: ancestor._id,
        Level: level
      }
      level++;
      stack.push(ancestor);
      ancestors.push(res);
    }
    console.log(ancestors);

    //question3 2.
    console.log("operations on Question3 2.");
    const height = await heightOfTree(parentReference, "Books");
    console.log(height)

    //create Child-preferencing Model
    database.createCollection('childReference');
    const childReference = database.collection('childReference')
    const result_2 = await childReference.insertMany( [
      { _id: "MongoDB", children: [] },
      { _id: "dbm", children: [] },
      { _id: "Databases", children: [ "MongoDB", "dbm" ] },
      { _id: "Languages", children: [] },
      { _id: "Programming", children: [ "Databases", "Languages" ] },
      { _id: "Books", children: [ "Programming" ] }
    ])
    console.log(`${result_2.insertedCount} documents were inserted`);

    //question3 3.
    console.log("operations on Question3 3.");
    const result_3 = childReference.find({ children: "dbm" });
    await result_3.forEach((doc) => {
      console.log(doc)
    })

    //question3 4.
    console.log("operations on Question3 4.");
    var descendants = [];
    var stack_4 = [];
    var item_4 = await childReference.findOne({ _id: "Books" })
    stack_4.push(item_4)
    while (stack_4.length > 0) {
      var current_4 = stack_4.pop();
      var children = current_4.children;
      for (var i = 0; i < children.length; i++) {
        var child = await childReference.findOne({ _id: children[i] })
        descendants.push(child._id);
        stack_4.push(child);
      }
    }

    console.log(descendants)

  } finally {
    await client.close();
  }
}

run()