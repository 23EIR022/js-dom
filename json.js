const jsObject = {
   name: "Dhanu",
   age: 20,
  display: function() {
      console.log("Hello");
   },
};

   //Javascript object notation
  let jsonObject = {
    "name" : "Dhanu",
    "age":20,
   };
// methods(function inside objects) are not supported


// JSON Methods
   let stringJSON = JSON.stringify(jsObject);
   console.log(stringJSON);
   console.log(typeof stringJSON);

  let normalJSON = JSON.parse(stringJSON);
  console.log(normalJSON);
  console.log(typeof normalJSON);

 // local storage
   localStorage.setItem("username","Dhanu");
   let item = localStorage.getItem("username");
   console.log(item);

   localStorage.removeItem("username");
   let item2=localStorage.getItem("username");
   console.log(item2);

   // sessionStorage
   sessionStorage.setItem("username","Dhanu");