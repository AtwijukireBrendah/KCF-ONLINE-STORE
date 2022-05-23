import React, { useEffect, useImperativeHandle, useState, forwardRef } from "react"
import ProductsMenu from "./ProductsMenu"

const MainContainer = forwardRef((props, ref) => {

    const [products, setProducts] = useState([])
    const [productsToDisplay, setProductsToDisplay] = useState([])
    const [productCategories, setProductsCategories] = useState([])
    const [isFirstLoad, setIsFirstLoad] = useState(true)

    // running function in App.Js
    useImperativeHandle(ref, () => ({
        updateProductsList() {
            setProducts(props.products)
        }
    }))

    
    function selectProductCategory(productIndex){
        let productsToDisplayTemp = []
        let displayCategory = productCategories[productIndex]

        if (displayCategory === "All products"){
            productsToDisplayTemp = products
        } else {
            productsToDisplayTemp = products.filter((product) => product.category === displayCategory)
        }

        setProductsToDisplay(productsToDisplayTemp)
    }

    function getProductCategories(products){
        let categories = ["All products"]

        products.map((product) => {
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            }
        })

        return categories
    }

    useEffect(() => {

        if (isFirstLoad && productCategories.length != 0) {
            selectProductCategory(0)
            setIsFirstLoad(false)
        }

        if (products.length === 0 && props.products.length > 0){
            setProducts(props.products)
        }

        if (products.length > 0 && productCategories.length === 0){
            setProductsCategories(getProductCategories(products))
        }
    }, [products, productCategories, isFirstLoad])

    return (<>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', alignContent: 'stretch' }}>
            
            <ProductsMenu categories={productCategories} selectProductCategory={selectProductCategory} style={{width: '20vw', borderRight: '10px solid #717171', backgroundColor: 'red'}} />
            <div style={{width: '80vw'}}>
                <ul style={{ listStyle: 'none' }}>
                    {
                        productsToDisplay.map((product, index) => (
                            <li style={{ maxHeight: '100vh' }} key={index} onClick={() => { props.goToProduct(index) }}>
                                <div className="product">
                                    <img src={product.image} alt="title" width={"150px"} />
                                    <p>$ {product.price}</p>
                                    <div>
                                        <h3>{product.title}</h3>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </li>))
                    }
                </ul>
            </div>
        </div>
    </>)
})

// function MainContainer(props){

//     // useImperativeHandle()

// }


export default MainContainer