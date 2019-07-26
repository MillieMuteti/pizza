//business logic
// function Pizzasize(mega,large,medium,small){
//     this.mega=mega;
//     this.large=large;
//     this.medium=medium;
//     this.small = small;
// }
// function ptoppings(none,pepporoni,mushroom,sausage,onions,pineapples,extracheese,greenpepper,blackolives){
//     this.none = none;
//     this.pepporoni = pepporoni;
//     this.mushroom = mushroom;
//     this.sausage = sausage;
//     this.onions = onions;
//     this.pineapples = pineapples;
//     this.extracheese = extracheese;
//     this.greenpepper = greenpepper;
//     this.blackolives = blackolives;
// }
function Pizza(size,toppings,crust,quantity){
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.quantity=quantity;

}


//user interface logic
$(document).ready(function(){ 
    $("#add").click(function(e){
        e.preventDefault();
        var pSize = $("#size").val();
        var pQuant = $("#quantity").val();
        var pCrust = $("#crust").val();
        var pTop = $("#toppings").val();
        var newOrder=new Pizza(pSize,pTop,pCrust,pQuant);

    
        
    });
});