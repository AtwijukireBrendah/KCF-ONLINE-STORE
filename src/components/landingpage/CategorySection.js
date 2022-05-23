// import React from "react";
// import Barner from "../categories/Barner";

// import CategoryList from "../categories/CategoryList";
// import CategoryProductsContainer from "../categories/CategoryProductsContainer";

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// const categoriesList = ["iphone", "tecno", "sumsang", "infinix"]

// function CategorySection(props) {

//     return (
//         <>
//             <div className='categorysection'>
//                 <CategoryList categories={categoriesList} className="left-div" />
//                 <Barner className="right-div" />
//             </div>
//             {
//                 categoriesList.map((category, index) => <CategoryProductsContainer title={category} />)
//             }
// {/* <h1>Main</h1>
// <h1>Main</h1>
// <h1>Main</h1>
// <h1>Main</h1>
// <h1>Main</h1>
// <h1>Main</h1>
// <h1>Main</h1> */}
// {/* 
// <section id="main">
//         <div class="left-div">
//             <div class="category-section">
//                 <ul class="phone-brands-list">

                    
//                     <li class="phone-brand" ><a href="#bar-iphone"><span style="padding-left:5px">{}</span></a></li>
//                     <li class="phone-brand" ><a href="#bar-samsung"><span style="padding-left:30px">{}</span></a></li>
//                     <li class="phone-brand" ><a href="#bar-infinix">Infinix</a></li>
//                     <li class="phone-brand" ><a href="#bar-tecno">Techno</a></li>

                   
                    
//                 </ul>
//             </div>
//         </div>

//         <div class="right-div">
//             <div>
//                 {/* <img src="assets/Images/flash-sale.jpg" /> */}
//                 {/* <p>Apple Iphone 13</p>
//                 <p>UGX 3,000,000</p>
//                 <p>10% Discount</p>
//             </div>
//         </div> */}


//     {/* </section>  */}


//         </>

//     )
// }

// export default CategorySection;


    


//     // function getDevicesByBrand(brandName) {
//     //     return products.filter(function (product) {
//     //         return product.brand.toLowerCase() === brandName.toLowerCase()
//     //     })
//     // }

//     // function createProductsHTMLList(products) {
//     //     return products.map(function (product, index) {
//     //         let liElement = document.createElement("li")
//     //         liElement.classList.add("model-tile")
//     //         liElement.id = index

//     //         let aElement = document.createElement("a")
//     //         aElement.id = "itemcartpage-link"
//     //         aElement.href = `./itemcartpage.html?product=${product.id}`
//     //         liElement.appendChild(aElement)
//     //         // aElement.style.textDecoration = 'none'
//     //         aElement.setAttribute('style', 'text-decoration:none')


//     //         let divElement = document.createElement("div")
//     //         aElement.appendChild(divElement)

//     //         let productImageElement = document.createElement("img")
//     //         productImageElement.src = product.image

//     //         let productNameElement = document.createElement("p")
//     //         productNameElement.innerText = product.name
//     //         productNameElement.setAttribute('style', 'color:black;font-size:large')

//     //         let productPriceElement = document.createElement("p")
//     //         productPriceElement.innerText = product.price
//     //         productPriceElement.setAttribute('style', 'color:black;font-size:x-large')

//     //         divElement.appendChild(productImageElement)
//     //         divElement.appendChild(productNameElement)
//     //         divElement.appendChild(productPriceElement)

//     //         return liElement
//     //     })
//     // }

//     // const iPhoneModelsElement = document.getElementById('iphone-models')
//     // const samsungModelsElement = document.getElementById("samsung-models")
//     // const tecnoModelsElement = document.getElementById("tecno-models")
//     // const infinixModelsElement = document.getElementById("infinix-models")

//     // infinixModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Infinix")))
//     // tecnoModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Tecno")))
//     // samsungModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Samsung")))
//     // iPhoneModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Apple")))


//     // let cart = JSON.parse(localStorage.getItem("cart"))

//     // if (typeof (cart) === 'object') {
//     //     cart = cart
//     // } else {
//     //     cart = []
//     // }

//     // // Initialise empty cart
//     // // const cart = []
//     // // localStorage.setItem("cart", JSON.stringify(cart))






//     // // search items

//     // function searchProduct(name) {
//     //     return products.filter(function (product) {
//     //         return product.name.toLowerCase().includes(name.toLowerCase())
//     //     })
//     // }
//     // function registerEvents() {
//     //     document.getElementById("btnSearch").addEventListener("click", function (e) {
//     //         let searchInput = document.getElementById("searchbar").value
//     //         let searchResults = searchProduct(searchInput)
//     //         console.log(searchResults)
//     //         alert(searchResults)
//     //     })
//     // }

//     // registerEvents()







