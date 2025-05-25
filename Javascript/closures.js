//---------------1-----------------------
/*
function outer() {
    var a = 5;
    function inner() {
        console.log(a);
    }

    return inner;
}

outer()();
*/

//-------------2------------------------
/*
function outer(){ 
  function inner(){
    console.log(a);
  }
  var a =10;
  return inner;
}

var close = outer(); // this will give you outer function
close();
*/

//-------------------3------------------
/*
function outer(){ 
  function inner(){
    console.log(a);
  }
  let a =10; // let instead of var
  return inner;
}

var close = outer(); // this will give you outer function
close(); 
*/

//-------------------4--------------------