let result = [];

const insertItem = (item) => {
  // insert item into result
  result.push(item);

  return item;
};

const deleteItem = (item) => {
  // remove the first occurrence of item in result
  result.splice(
    result.findIndex((x) => x === item),
    1
  );
  // result.forEach(function (arrayItem, index) {
  //   if (item === arrayItem) {
  //     result.splice(index, 1);
  //     return item;
  //   }
  // });

  return item;
};

const lookupItem = (index) => {
  // return the item from result at index, deleting the obtained item
  let removedItem = result[index];
  result.splice(index, 1);

  return removedItem;
};

const printItems = () => {
  // return a string of the concatenated item in result, separated by commas
  let itemString = "";
  result.forEach(function (arrayItem, index) {
    itemString += arrayItem;
    if (index !== result.length - 1) {
      itemString += ",";
    }
  });
  return itemString;
};

insertItem(1);
insertItem(2);
insertItem(3);
insertItem(2);
insertItem(1);
console.log(printItems());
// expected: '1, 2, 3, 2, 1'
console.log(lookupItem(1));
// expected: 2
console.log(printItems());
// expected: '1, 3, 2, 1'

deleteItem(1);
console.log(printItems());
// expected: '3, 2, 1'
console.log(lookupItem(2));
// expected: 1
console.log(printItems());
// expected: '3, 2'

deleteItem(-1);
console.log(lookupItem(-1));
// expected: null
