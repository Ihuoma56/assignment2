const http = require("http");

const action = (req, res) => {
    console.log(req.method);
    console.log(req.url);

    if (req.method === "GET" && req.url === "/books") {
        res.write("Hello, what books would you like to get today");
    }
    if (req.method === "PUT" && req.url === "/books") {
        res.write("Hi there, what books are we returning today");
    }
    if (req.method === "DELETE" && req.url === "/books") {
        res.write("Oops, this is a list of deleted books");
    }
    if (req.method === "GET" && req.url === "/books/author/") {
        res.write("Here you go! A collection of authors and their various books");
    }
    if (req.method === "POST" && req.url === "/books/author/") {
        res.write("Kudos! I see you're something of a best-seller");
    }
    if (req.method === "PUT" && req.url === "/books/author/") {
        res.write("Oh fantastic! I see we're returning a book from our fave author");
    }
    res.end();

}
const server = http.createServer(action);

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});