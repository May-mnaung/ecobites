// to connecting to MongoDB server and update a document of its values or to retrieve values

//to update MongoDB values using Node.js with the MongoDB driver 
//(Mongoose or MongoDB native driver)

// we use mongoDB native driver to  interact with MongoDB form a Node.js application.




//Use the following code to connect to your MongoDB server and update a document:

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/your-database-name';
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function updateDocument() {
  try {
    await client.connect();

    const collection = client.db('your-database-name').collection('your-collection-name');
    
    const filter = { /* your filter criteria */ };
    const update = { $set: { /* updated values */ } };

    const result = await collection.updateOne(filter, update);

    console.log(`${result.modifiedCount} document(s) updated`);
  } finally {
    await client.close();
  }
}

updateDocument().catch(console.error);



//Just like in the Node.js example, replace 'your-database-name', 
//'your-collection-name', filter, and update with your specific details.

//In both examples, you connect to the MongoDB server, 
//specify the filter criteria to select the document(s) you want to update, and define the update operation using $set. The updateOne function in Node.js and update_one in Python are used to perform the update, and the result.modifiedCount or result.modified_count will give you the number of documents updated.
