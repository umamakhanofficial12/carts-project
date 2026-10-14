// const finalCarts = []

// async function getData() {
// let response =await fetch('https://dummyjson.com/products')
// let data = await response.json()
// console.log(data.carts)
// const carts = data.carts


// for (let i = 0; i < CaretPosition.length; i++){
//     // console.log(carts[i]. products)
//     finalCarts.push(...carts[i].products)
// }
// }

// getData()

// setTimeout(()=>{
// for (let i = 0 ; i<finalCarts.length;i++){
//     console.log(finalCarts[i])
// }
// },2000)




// let card = `
//     <div class="card">
//         <img src="product-image.jpg" class="card-img-top">
//         <div class="card-body">
//             <h5 class="card-title">Product Name</h5>
//             <p class="card-text">Product Price</p>
//         </div>
//     </div>
// `;



// fetch("https://dummyjson.com/products")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
    
// data.products.forEach(function(product) {

// });

// });


// console.log(data.products[Essence].title);


// console.log(data.products[200].price);



// let html = "";
// then(function(data) {
//     let html = "";

//     data.products.forEach(function(product) {

//     });
// });




fetch("https://dummyjson.com/products")
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let html = "";

    data.products.forEach(function(product) {

        html += `
            <div class="col-md-4 col-sm-6">
                <div class="card">
                    <img src="${product.thumbnail}" class="card-img-top">

                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>

                        <p class="card-text">Price: $${product.price}</p>

                        <button class="btn btn-primary">
                            View Product
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("products").innerHTML = html;

})
.catch(function(error) {
    console.log("Error:", error);
});
