/* Advanced - Book List
Create an external JSON file that will contain the data( e.g. 
  `{'title': 'Javascript for Dummies',
   'author': 'Dummy Dumb Dumb',
   'read': 'false'
  }`
Iterate through the array of books. For each book, create a <p> element with the book title and author and append it to the page.
Each book should have an image cover.
Change the style of the book depending on whether you have read it or not.*/

let booksData = JSON.parse(books);
console.log(booksData);

for (book in booksData) {
  var textRead = booksData[book].read;
  
  document.getElementById("printBooks").innerHTML += `
  <div class="col">
    <div class="card col-12">
      <img class="card-img-top img-thumbnail" src="${booksData[book].image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${booksData[book].title}</h5>
          <p class="card-text">${booksData[book].author}</p>
        </div>
    </div>
  </div>
  `
  console.log(textRead);
  //if function, by default it checks the statement when you write it without any condition in the brackets.
  if (textRead) {
    document.getElementsByClassName("card-body")[book].style.backgroundColor = "purple";
  } else {
    document.getElementsByClassName("card-body")[book].style.backgroundColor = "pink";
  }
}

