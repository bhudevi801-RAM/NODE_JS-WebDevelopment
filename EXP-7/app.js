const express = require("express");
const app = express();
app.use(express.json());
let students = [
    { id: 56, name: "bhudevi", age: 19 },
    { id: 2, name: "Seetha", age: 20 }
];
app.get("/students", (req, res) => {
    res.json(students);
});
app.post("/students", (req, res) => {
    students.push(req.body);
    res.send("Student added successfully");
});
app.put("/students/:id", (req, res) => {
    let student = students.find(s => s.id == req.params.id);
    if (student) {
        student.name = req.body.name;
        student.age = req.body.age;
        res.send("Student updated successfully");
    } else {
        res.send("Student not found");
    }
});
app.delete("/students/:id", (req, res) => {
    students = students.filter(s => s.id != req.params.id);
    res.send("Student deleted successfully");
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});