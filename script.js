
/*const bookPage = document.createElement("ul");
bookPage.classList.add("book-items");
let bookList = ["Atomic Habits", "Purple Hibsiscus"];
let loopArray = () => {
    for (book of bookList){
    const bookItem = document.createElement("li");
    bookItem.classList.add("book-item");
    bookItem.innerText = `${book}`;
    bookPage.append(bookItem);
}};
loopArray();
let inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userBook = inputForm.querySelector("input").value;
    bookList.push(userBook);
    inputForm.querySelector("input").value = "";
    loopArray();
}
);
const main = document.querySelector("body");
main.appendChild(bookPage);*/

const bookPage = document.createElement("ul");
bookPage.classList.add("book-items");
let bookList = [];
let loopArray = () => {
    let books = bookList.map(book => `<li>${book}</li>`).join('');
    bookPage.innerHTML = books;
};
loopArray();
let inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let userBook = inputForm.querySelector("input").value;
    if (userBook == '') return;
    bookList.push(userBook);
    inputForm.querySelector("input").value = "";
   loopArray();
}
);

const main = document.querySelector("body");
main.appendChild(bookPage);