document.addEventListener("DOMContentLoaded", function(){
    var h2 = document.querySelector("#book-list h2");
    h2.addEventListener("click", function (e) {
        // h2.innerHTML += "hello";
        console.log(e.target);
        console.log(e);
    });
    // console.log(h2);
    //----------------------------
    const link = document.querySelector("#page-banner a");
    link.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Navigation to", e.target.textContent, "was prevented.")
    });
    //-----DELETE-BUTTON----------
    /*var btns = document.querySelectorAll("#book-list .delete");
    btns.forEach(function (btn) {
        btn.addEventListener("click", function(e){
            // console.log(e.target);
            // console.log(e);
            const li = e.target.parentElement;
            // console.log(li);
            li.parentNode.removeChild(li);
        });
    });*/
    const list = document.querySelector("#book-list ul");
    list.addEventListener("click", function (e) {
        if (e.target.className == "delete") {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li); //list.removeChild(li) will also work here
        }
    });
    //-------ADD-BUTTON-----------
    // console.log(document.forms);
    const addform = document.forms["add-book"];
    addform.addEventListener("submit", function (e) {
        e.preventDefault();
        const value = addform.querySelector("input[type = 'text']").value;
        // console.log(value);
        const li = document.createElement("li");
        const bookname = document.createElement("span");
        const deletebtn = document.createElement("span");

        deletebtn.textContent = "Delete";
        bookname.textContent = value;

        /*bookname.className = "name";
        deletebtn.className = "delete";*/
        bookname.classList.add("name");
        deletebtn.classList.add("delete");

        li.appendChild(bookname); //append bookname span tag to li
        li.appendChild(deletebtn); //append delete button span tag to li
        list.appendChild(li); //append li to list (ul)
    })
    //-------HIDE-BOOKS-----------
    const hidebox = document.querySelector("#hide");
    hidebox.addEventListener("change", function (e) {
        if (hidebox.checked) {
            list.style.display = "none";
        } else {
            list.style.display = "initial";
        }
    })
    //-------SEARCH-BOOKS----------
    const searchbar = document.forms["search-books"].querySelector("input");
    searchbar.addEventListener("keyup", function (e) {
        const term = e.target.value.toLowerCase();
        // console.log(term);
        const books = list.getElementsByTagName("li");
        // console.log(books);
        Array.from(books).forEach(function (book) {
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        })
    });
    //-------TABBED-CONTENT--------
    const tabs = document.querySelector(".tabs");
    const panels = document.querySelectorAll(".panel");
    tabs.addEventListener("click", function (e) {
        if (e.target.tagName == "LI") {
            const targetpanel = document.querySelector(e.target.dataset.target);
            Array.from(panels).forEach(function (panel) {
                if (panel == targetpanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        }
    });
});