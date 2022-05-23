import React from "react"

function ProductsMenu(props){
    return (<ul style={{ listStyle: 'none' }}>
        {
            props.categories.map((category, index) => <li key={index} onClick={() => { props.selectProductCategory(index) }}>{category}</li>)
        }
    </ul>)
}

export default ProductsMenu