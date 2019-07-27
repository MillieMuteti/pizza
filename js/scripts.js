let cart = [];

let newOrdercart=[]

function Pizza(size,toppings,crust,quantity,type){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.quantity=quantity;
    this.type=type;
}

 
//user interface logic
$(document).ready(function(){ 
    $("#add").click(function(e){
        e.preventDefault();
        var pSize = $("#size").val();
        var pQuant = $("#quantity").val();
        var pCrust = $("#crust").val();
        var pTop = $("#toppings").val();
        var pType=$("input[type=checked").val();
        var newOrder=new Pizza(pSize,pTop,pCrust,pQuant,pType);
        cart.push(newOrder)
        console.log(cart)
        
    });

});