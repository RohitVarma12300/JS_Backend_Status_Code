//in case of java

//we used spring boot for building servers 
// we set the the file using sping initializer which is present in pom.xml 


// here for case of javscript 

// we use express and node for building servers in javascript
//every dedetails of our projec twill lie in package.json

// Status code demo: run with `npm i express` then `node server.js`
const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Asha", email: "asha@example.com" },
  { id: 2, name: "Ravi", email: "ravi@example.com" },
];

// Fake auth: "Bearer admin-token" = admin, "Bearer user-token" = normal user
const tokens = { "admin-token": "admin", "user-token": "user" };

// 200 OK 
app.get("/allusers", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(200).json(user);
});

// 201 Created / 400 Bad Re
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }
  const user = { id: users.length + 1, name, email };
  users.push(user);
  res.status(201).location(`/users/${user.id}`).json(user);
});

// 401 Unauthorized / 403 Forbidden / 200 OK

app.get("/admin/users", (req, res) => {

  const header = req.headers.authorization || "";

  const role = tokens[header.replace("Bearer ", "")];

  if (!role) return res.status(401).json({ error: "Login required" });

  if (role !== "admin") return res.status(403).json({ error: "Admins only" });

  res.status(200).json(users);

});

 

// 500 Internal Server Error (unhandled exception on purpose)

app.get("/crash", () => {

  throw new Error("Something broke on the server");

});

 

// Central error handler

app.use((err, req, res, next) => {

  if (err.type === "entity.parse.failed") {

    return res.status(400).json({ error: "Malformed JSON" }); // bad client input

  }

  console.error(err); // developers check the logs

  res.status(500).json({ error: "Internal Server Error" });
  if (res.statusCode === 500) {
    //redirect to another service
  }
  return res;

});


 

app.listen(3000, () => console.log("Running on http://localhost:3000"));