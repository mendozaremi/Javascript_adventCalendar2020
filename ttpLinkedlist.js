// Linked List

// create pointer
// while pointer is not equal to null
// keep iterating

// 1 -> 5 -> 7 -> 10 -> null

// PRINT FORWARD LINKED LIST
/*--------------------------------------------------*/
// create a node class for the linkedList
// class node {
//   this.value = value
//   this.next = next;
// }

// // create head which will be a new node
// head = new node();

// // let current equal head
// let current = head

// // print out linkedList using while loop
// while( current != null) {
//   // print out all values
//   console.log(current.value)

//   // current equals current.next 
//   current = current.next
// }
/*--------------------------------------------------*/
// PRINT BACKWARD LINKED LIST
/*--------------------------------------------------*/
// REVERSE LINKED LIST
/*--------------------------------------------------*/

// 1. LinkedLists
// Node class for a linked list node
class ListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

// Generate a linked list from an array
function generateList(arr) {
  if (arr.length === 0) { return null; }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

let array1 = [1,5,7,10]
let head = generateList(array1)

function printForward(node) {
  let value = []
  while( node != null) {
    value.push(node.value)
    // console.log(node.value)
    node = node.next
  }
  return value
}

// console.log(printForward(head).join())

function printbackward(node) {
  let forward = printForward(head)
  return forward.reverse().join(' ')
}

function reverseList(node) {
  let list = printForward(node)
  let newList = generateList(list.reverse())
  return newList
}


// printbackward(head)
// reverseList(head)


let newList = [1,5,7,10,12,15]
let fhead = generateList(newList)

// swap 5 for 12
let a = 5;
let b = 15;

function swap(node,a,b){
  let head = node
  let pointer = node.next
  
  while (node != null && pointer != null) {
     if(pointer.value === a || pointer.value === b) {
       if(pointer.value === a) {
         head.next.value = b
       }else if (pointer.value === b) {
           head.next.value = a
       }
     }
     head = head.next
     pointer = pointer.next
  }
  return printForward(node)
  // let arrayFromNode = printForward(node)
  // let aIndex,bIndex
  // for(let i = 0; i < arrayFromNode.length; i++) {
  //   if(arrayFromNode[i] === a) {
  //       aIndex = i
  //   }
  //   if(arrayFromNode[i] === b) {
  //     bIndex = i
  //   }
  // }
  // arrayFromNode[aIndex] = b
  // arrayFromNode[bIndex] = a
  // return generateList(arrayFromNode)
}

swap(fhead,a, b)
// node is a linked list so we call the printforward function for the array

// zoom ended but you can keep going imwatching