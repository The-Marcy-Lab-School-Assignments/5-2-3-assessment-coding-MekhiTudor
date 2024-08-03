const { getId } = require("./utils");
/** FEEDBACK: Great job getting all test cases to pass! You are a superstar! */
class ToDoItem {
  constructor(description, priorityLevel) {
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.timeAlloted = "15 mins";
    this.isDone = false;
    this.id = getId();
  }
  getDescription() {
    console.log(this.description);
  }
  setTime(time) {
    this.timeAlloted = time;
  }
}

class ToDoList {
  toDoItems = [];
  static myList = [];
  constructor(name) {
    this.name = name;
    this.id = getId();
    ToDoList.myList.push(this);
  }
  createItem(description, priorityLevel) {
    const item = new ToDoItem(description, priorityLevel);
    this.toDoItems.push(item);
    return item;
  }
  getItems() {
    return [...this.toDoItems];
  }
  getCompletedCount() {
    let counter = 0;
    for (let i = 0; i < this.toDoItems.length; i++) {
      if (this.toDoItems[i].isDone === true) counter++;
    }
    return counter;
  }
  clearList() {
    this.toDoItems.length = 0;
    console.log("your list has been cleared");
  }
  static list() {
    return [...ToDoList.myList];
  }
  static findBy(listId) {
    /** FEEDBACK: Here you should use a more descriptive parameter name! */
    return ToDoList.myList.find((e) => e.id === listId);
  }
}

module.exports = {
  ToDoItem,
  ToDoList,
};
