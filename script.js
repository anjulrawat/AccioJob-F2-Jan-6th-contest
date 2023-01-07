/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
arr.map(function(value){
  if(value.profession === "developer")
  {
    console.log(value);
  }
})
} 

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(function(value){
    if(value.profession === "developer")
    {
      console.log(value);
    }
  })
  } 
  

function addData() {
  let arr2 = [
    {id:4,name:"susan",age:"20",profession:"intern"}
  ];
  let arr3 = arr.concat(arr2);
console.log(arr3);
}

function removeAdmin() {
  //Write your code here
  let professionToRemove = "admin" ;

}

function concatenateArray() {
  //Write your code here
  let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ]; 
  let arr2 = [
    {id:4,name:"susan",age:"20",profession:"intern"}
  ];
  let result = arr.concat(arr2);
  console.log(result);
}
