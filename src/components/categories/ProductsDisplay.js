// import React from "react"


// const ProductsDisplay = (props) => {
//     return (
//         <div className={props.className} >
//             <div className="small-div">
//                 <i className={props.className}></i>
//                 <img src={props.img} alt='' />
//             </div>

//             <div className="big-div">
//                 <span className='div-title'>
//                     {props.title}
//                 </span>
//                 <br />
//                 <span>
//                     {props.description}
//                 </span>
//             </div>


//             {/* <section id="display-section">
//         <div class="model-section">
//             <div id="section-iphone">
//                 <h2 id="bar-iphone" style="background-color:orange; width: 104%; height: 40px; padding-bottom: 15px;"><u>Iphone</u></h2>
//                 <ul id="iphone-models" class="models">
//                     <!-- <li class="model-tile">
//                         <a id="itemcartpage-link" href="./itemcartpage.html?product=0001">
//                             <div>
//                                 <img src="assets/Images/iphone.jpg" />
//                                 <p>Apple Iphone 13</p>
//                                 <p>UGX 5,000,000</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a id="itemcartpage-link" href="./itemcartpage.html?product=P002">
//                             <div>
//                                 <img src="assets/Images/iphone.jpg" />
//                                 <p>Apple Iphone 12</p>
//                                 <p>UGX 4,000,000</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a id="itemcartpage-link" href="./itemcartpage.html?product=P003">
//                             <div>
//                                 <img src="assets/Images/iphone.jpg" />
//                                 <p>Apple Iphone 11</p>
//                                 <p>UGX 3,000,000</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/iphone.jpg" />
//                                 <p>Apple Iphone 11</p>
//                                 <p>UGX 5,000,000</p>
//                             </div>
//                         </a>
//                     </li> -->
//                     <!-- </ul> -->
//                 </div>
//             </div>
//             <br>
           
//         </div>
//         <br>

//         <div class="model-section">
//             <div id="section-samsung">
//                 <h2 id="bar-samsung" style="background-color:orange; width:104%; height: 40px; padding-bottom: 15px;"><u>Samsung</u></h2>
//                 <ul id="samsung-models" class="models">
//                     <!-- <li class="model-tile">
//                         <a id="itemcartpage-link" href="./itemcartpage.html?product=S001"></a>
//                             <div>
//                                 <img src="assets/Images/samsung galaxy s22.webp" />
//                                 <p>name</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/samsung-galaxy-s21-ultra-5g-.jpg" />
//                                 <p>name</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/samsung galaxy s22.webp" />
//                                 <p>name</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/samsung galaxy s22.webp" />
//                                 <p>name</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li> -->
//                     </ul>
//                 </div>
//             </div>
//             <br>
           
//         </div>

//         <div class="model-section">
//             <div id="section-infinix">
//                 <h2 id="bar-infinix" style="background-color:orange; width:104%; height: 40px; padding-bottom: 15px;"><u>Infinix</u></h2>
//                 <ul id="infinix-models" class="models">
//                     <!-- <li class="model-tile">
//                         <a id="itemcartpage-link" href="./itemcartpage.html?product=F001"></a>
//                             <div>
//                                 <img src="assets/Images/infinix.jpg" />
//                                 <p>Infinix Zero 6</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/infinix.jpg" />
//                                 <p>Infinix Zero 6</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/infinix.jpg" />
//                                 <p>Infinix Zero 6</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/infinix.jpg" />
//                                 <p>Infinix Zero 6</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li> -->
//                     </ul>
//                 </div>
//             </div>
//             <br>
           
//         </div>

//         <div class="model-section">
//             <div id="section-tecno">
//                 <h2 id="bar-tecno" style="background-color:orange; width:104%; height: 40px; padding-bottom: 15px;"><u>Tecno</u></h2>
//                 <ul id="tecno-models" class="models">
//                     <!-- <li class="model-tile">
//                         <a id="itemcartpage-link" href="./itemcartpage.html?product=T001"></a>
//                             <div>
//                                 <img src="assets/Images/tecno-camon-18p.jpg" />
//                                 <p>Tecno-camon-18p</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/tecno-pop5.jpg" />
//                                 <p>Tecno-pop5</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/tecno-spark-8.jpg" />
//                                 <p>Tecno-spark-8</p>
//                                 <p>price</p>
//                             </div>
//                         </a>
//                     </li>
//                     <li class="model-tile">
//                         <a>
//                             <div>
//                                 <img src="assets/Images/tecno-spark-go-2021.jpg" />
//                                 <p class="model-tag">Tecno-spark-go</p>
//                                 <p class="model-tag">price</p>
//                             </div>
//                         </a>
//                     </li> -->
//                     </ul>
//                 </div>
//             </div>
//             <br>
           
//         </div>

       
//         <br>
//         <br>

//     </section> */}

//         </div >

//     )
//     }

// export default ProductsDisplay;
