// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://vishwaraviraaj08:vishwa08@cluster0.6sn3u0n.mongodb.net/BlogDB?retryWrites=true&w=majority";
//
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });
//
// async function addUser(userJSON) {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         await client.db("BlogDB").collection("users").insertOne(userJSON);
//         console.log("Successfully added user to database");
//         return true;
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
//
// async function addBlog(blog) {
//     try {
//         await client.connect();
//         await client.db("BlogDB").collection("posts").insertOne(blog);
//         console.log("Successfully added blog to database");
//         return true;
//     } catch (e) {
//         console.log(e);
//         return false;
//     } finally {
//         await client.close();
//     }
// }
//
//
// const express = require('express');
// const app = express();
// const cors = require("cors");
//
//
// console.log("App listen at port 3000");
// app.use(express.json());
// app.use(cors());
// app.get("/", (req, resp) => {
//     resp.send("App is Working");
// });
//
// app.post("/login", async (req, resp) => {
//     let res = addUser(req.body).catch(console.dir);
//     res.then((result) => {
//         resp.status(200).send("User Registered");
//     }).catch((e) => {
//         resp.status(500).send("Something Went Wrong");
//     });
// });
//
// app.post("/posts/new", async (req, resp) => {
//     addBlog(req.body).catch(console.dir).then((result) => {
//         resp.status(200).send("Blog Added");
//     }).catch((e) => {
//         resp.status(500).send("Something Went Wrong");
//     });
// });
// app.listen(3000);


const express = require('express');
const next = require('next');
const { MongoClient, ServerApiVersion } = require('mongodb');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// MongoDB connection setup
const uri = "mongodb+srv://vishwaraviraaj08:vishwa08@cluster0.6sn3u0n.mongodb.net/BlogDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Your Express.js app setup
const expressApp = express();
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));

expressApp.get("/", (req, resp) => {
    resp.send("App is Working");
});

expressApp.post("/login", async (req, resp) => {
    // let res = addUser(req.body).catch(console.dir);
    // res.then((result) => {
    //     resp.status(200).send("User Registered");
    // }).catch((e) => {
    //     resp.status(500).send("Something Went Wrong");
    // });

    const userJSON = req.body; // Assuming the request body contains user data
    console.log(100000000);
    try {
        const result = await addUser(userJSON);
        if (result) {
            resp.status(200).send("User Registered");
        } else {
            resp.status(500).send("Failed to add user");
        }
    } catch (e) {
        console.error(e);
        resp.status(500).send("Something Went Wrong");
    }


});


expressApp.post("/posts/new", async (req, resp) => {
    addBlog(req.body).catch(console.dir).then((result) => {
        resp.status(200).send("Blog Added");
    }).catch((e) => {
        resp.status(500).send("Something Went Wrong");
    });
});

async function addUser(userJSON) {
    try {
        await client.connect();
        await client.db("BlogDB").collection("users").insertOne(userJSON);
        console.log("Successfully added user to the database");
        return true;
    } finally {
        await client.close();
    }
}

async function addBlog(blog) {
    try {
        await client.connect();
        await client.db("BlogDB").collection("posts").insertOne(blog);
        console.log("Successfully added blog to the database");
        return true;
    } catch (e) {
        console.log(e);
        return false;
    } finally {
        await client.close();
    }
}

// Next.js request handler
app.prepare().then(() => {
    expressApp.all('*', (req, res) => {
        return handle(req, res);
    });

    expressApp.listen(3000, (err) => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
