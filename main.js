var form = document.querySelector("#addForm");
var itemList = document.querySelector("#items");
var filter = document.querySelector("#filter");

// form submit event
form.addEventListener("submit", addItem);
// delete event
itemList.addEventListener("click", removeItem);
// Search items event - eventListener when key is pressed and released
filter.addEventListener("keyup", filterItems);

// add item
function addItem(e) {
  e.preventDefault();

  // get input value
  // id of <input> is item
  var newItem = document.querySelector("#item").value;

  //create new li element

  var li = document.createElement("li");

  // add class
  // and print input value in a list

  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newItem));

  // create delete button element

  var deleteBtn = document.createElement("button");

  // add classes to del button
  // through className we are giving the same style to new delete button as previous del buttons
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //append button to li
  li.appendChild(deleteBtn);

  // append li to list;

  itemList.appendChild(li);
}

// Remove item function
function removeItem(e) {
  // we only want deletion when button is clicked so calling delete class name
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure you want to delete this item?")) {
      // li points to item(parent) of the particular delete button

      var li = e.target.parentElement;

      // itemList contains all li and that item is removed from parent itemList

      itemList.removeChild(li);
    }
  }
}

// filter items (search items)

function filterItems(e) {
  // convert text to lowercase so uniform search is done regardless of caps

  var text = e.target.value.toLowerCase();

  // get list present in itemlist using tagname
  var items = itemList.getElementsByTagName("li");

  // convert html collection to array as some functionalities are restricted in html collection
  // iterating through items list

  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;

    //  making itemName lower case to compare with input text in search box
    // if no match it returns -1

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
