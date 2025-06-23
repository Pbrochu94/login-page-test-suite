import express from "express";
const app = express();
app.use(express.static("login-page-test-suite"));
app.use(express.json());
let validMail = [
    `valid@hotmail.com`,
    `valid@gmail.com`,
    `valid@outlook.com`,
];
let validPassword = [`hotCode123!`, `gCode123!`, `outCode123!`];
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (validMail.includes(email) && validPassword.includes(password)) {
        res.json({ success: true, token: "abc123token" });
    }
    else {
        res
            .status(401)
            .json({ success: false, message: "Invalid email or password" });
    }
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
