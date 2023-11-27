const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const dotenv = require('dotenv')
dotenv.config({
    path: '../config.env'
})

const nameDataBase = 'User'
const DATABASE = `mongodb+srv://longvu:CJKtQNfhnx6xIk0c@cluster0.465fcyy.mongodb.net/${nameDataBase}?retryWrites=true&w=majority`;


// console.log(DB)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    // .then(() => {
    //     console.log('Connected to MongoDB!');

    //     const userSchema = new Schema({
    //         name: String,
    //         age: Number,
    //         email: String,
    //     }, { collection: 'readers' });

    //     const User = mongoose.model('User', userSchema);

    //     const newUser = new User({
    //         name: 'John Doe',
    //         age: 25,
    //         email: 'john@example.com'
    //     });

    //     newUser.save()
    //         .then(savedUser => {
    //             console.log('User saved:', savedUser);

    //             mongoose.connection.close();
    //         })
    //         .catch(error => {
    //             console.error('Error saving user:', error);
    //             mongoose.connection.close();
    //         });
    // })
    // .catch(error => console.error('Connection error:', error));


















// const DATABASE = 'mongodb+srv://longvu:CJKtQNfhnx6xIk0c@cluster0.465fcyy.mongodb.net/longvu?retryWrites=true&w=majority'

// mongoose.connect(DATABASE, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log('Connected!'));

// const userSchema = new Schema({
//     name: String,
//     age: Number,
//     email: String,
// });

// // Create a model from the schema
// const User = mongoose.model('User', userSchema);
// const db = mongoose.connection;

// console.log('Connected to database:', db.name);

// const client = new MongoClient(DB, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });



// async function run() {
//     try {
//         await client.connect();

//         const databaseName = 'TheMegaPages';
//         const database = client.db(databaseName);

//         const reader = database.collection('Reader');

//         const result = await reader.insertOne({
//             "fullName": "Nguyen Thi Hoai",
//             "Email_Address": "abc@gmail.com"
//         });


//         // await client.db("admin").command({
//         //     ping: 1
//         // });

//         console.log(`Document inserted with _id: ${result.insertedId}`);
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);