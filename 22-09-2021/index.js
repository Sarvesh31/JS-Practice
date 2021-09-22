/*var titles = document.getElementsByClassName("title");
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));*/
/*Array.from(titles).forEach(function(item){
    console.log(item);
});*/
//----------------------------
const wrap = document.querySelector("#book-list li:nth-child(2) .name");
console.log(wrap);

var books1 = document.querySelector("#book-list li .name");
console.log(books1);

var books2 = document.querySelectorAll("#book-list li .name");
console.log(books2);
books2.forEach(function(book){
    console.log(books2);
});
/*Array.from(books2).forEach(function(book){
    console.log(book);
})*/
//----------------------------
var books3 = document.querySelectorAll("#book-list li .name");
books3.forEach(function(book){
    console.log(book.textContent);
    book.textContent += " asd"
})

const bookList1 = document.querySelector("#book-list");
console.log(bookList1.innerHTML);
bookList1.innerHTML += "<h2>Books</h2>"
//----------------------------
const banner = document.querySelector("#page-banner")//.firstChild;
// console.log("#page-banner node type: ", banner.nodeType);
console.log("Node type: ", banner.nodeType);
console.log("Node value: ", banner.nodeValue);
console.log("Node name: ", banner.nodeName);
console.log("Child nodes: ", banner.hasChildNodes());
console.log(banner);
/*banner.forEach(function(ban){
    // ban = ban.firstChild;
    console.log("Node type: ", ban.nodeType);
    console.log("Node value: ", ban.nodeValue);
    console.log("Node name: ", ban.nodeName);
})*/

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);
//----------------------------
const bookList2 = document.querySelector("#book-list");
console.log("Parent node: ", bookList2.parentNode.parentNode.parentNode.parentNode);
console.log("Parent element: ", bookList2.parentElement.parentElement.parentElement);
// console.log("Parent node: ", bookList2.parentElement.parentNode);
// console.log("Child node: ", bookList2.children);
//----------------------------
const bookList3 = document.querySelector("#book-list");
console.log("Next sibling: ", bookList3.nextSibling);
console.log("Next element sibling: ", bookList3.nextElementSibling);
console.log("Previous sibling: ", bookList3.previousSibling);
console.log("Previous element sibling: ", bookList3.previousElementSibling);
bookList3.previousElementSibling.querySelector("p").innerHTML += "<br>Hello";