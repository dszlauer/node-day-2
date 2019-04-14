const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive"); // massive is a promise, it goes out gets info and comes back with data
const controller = require("./controllers/studentController");
const app = express();

require("dotenv").config();

app.use(bodyParser.json());
// massive connection to the etire dataBase on heroku
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  db.init();
  console.log("connected to db");
  db.query("select * from students").then(students => console.log(students));
});

app.get("/api/students", controller.getStudents);
app.post("/api/students", controller.postStudent);
app.put("/api/students/:student_id/:cohort", controller.updateStudent); // here we need to send student 'id' and 'cohort' number to update a student, we are doing this in controller, which updates the sql database file.
app.delete("/api/students/:id", controller.deleteStudent);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
