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
        var pType=$("input[name=pizzaType]:checked").val();
        var newOrder=new Pizza(pSize,pTop,pCrust,pQuant,pType);
        cart.push(newOrder)
        console.log(cart)

        const pizzaSizes = [
            {
                size: "mega",
                price: 1200,
            },
            {
                size:"large",
                price: 1000,
            },
            {
                size: "medium",
                price: 800
            },
            {
                size: "small",
                price: 500
            }
        ]
      const pp =  pizzaSizes.find(u=> u.size === pSize)
      console.log(pp.price)
      var pizzaCrusts=[
          {
              crust: "stuffed",
              price: 200
          },
          {
              crust: "gluten-free",
              price: 250
          },
          {
              crust: "crispy",
              price: 200
          }
      ]
      const resultCrust = pizzaCrusts.find(u=> u.crust===pCrust)
      console.log(resultCrust.price)

      const  resultToppings =[
        {topping: "none",
    price: 200},
        {topping: "pepperoni",
    price: 200},
        {topping: "Mushroom",
    price: 200},
        {topping: "Blackolives",
    price: 200},
        {topping: "Greenpeppers" ,
    price: 200},
        {topping: "extra cheese",
    price: 200},
        {topping: "sausage",
    price: 200},
        {topping: "onions",
    price: 200},
        {topping: "pineapple",
    price: 200},
      ]
    });

});