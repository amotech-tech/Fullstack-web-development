const products=[
    {name:"laptop", price:499,color:"white"},
     {name:"smartphone", price:899,color:"black"},
      {name:"mouse", price:50,color:"grey"},
       {name:"tablet", price:200,color:"red"},
        {name:"keyboard", price:500,color:"blue"},
]
const discount_prices=products.filter((product)=> product.name.includes("phone"));
console.log(products);
console.log(discount_prices);

