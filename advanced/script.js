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
  document.getElementById("printBooks").innerHTML += `
  <div class="col">
    <div class="card col-12">
      <img class="card-img-top img-thumbnail" src="${booksData[book].image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${booksData[book].title}</h5>
          <p class="card-text">${booksData[book].author}</p>
          <p class="card-text">${booksData[book].read}</p>
        </div>
    </div>
  </div>
  `
}



function colorBooks () {
  for (book in booksData['read']) {
    if(read == false) {
      document.getElementById('printBooks').style.background = 'red';
    } else {
      document.getElementById('printBooks').style.background = 'green';
    }
  }
  return
}

