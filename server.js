const express = require("express");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}
// app.use(routes);
app.listen(PORT,()  =>{
    console.log(`Server now listent to Port ${PORT}`);
})