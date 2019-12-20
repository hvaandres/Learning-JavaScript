const deleteFirstAndLast = arr => {
  if (arr.length >= 3) {
    return arr.slice(1, -1);
  } else {
    throw "You will need more than three items in the list to make sure we can delete the first one and the last one";
  }
};

deleteFirstAndLast([1, 2, 3, 4]); // [2,3]
deleteFirstAndLast(["<h1>", "Some content", "</h1>"]); // Error Message
deleteFirstAndLast(["Some content", "</h1>"]); // Error Message