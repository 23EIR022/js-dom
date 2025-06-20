//console.log("HEllo");
//cartQuantity=0;
let cartQuantity= Number(localStorage.getItem("cartQuantity"));
// if(!cartQuantity) {
//     localStorage.setItem("cartQuantity",0);
//     cartQuantity=0;
// }
   cartQuantity = cartQuantity || 0;

function updateQuantity(value) {
    cartQuantity=cartQuantity+value;
    localStorage.setItem("cartQuantity",cartQuantity);
}
function displayQuantity() {
    console.log(`cart: ${cartQuantity}`);
}
function resetCart() {
    cartQuantity=0;
    localStorage.setItem("cartQuantity",cartQuantity);
    console.log('The cart has been reset.');
}