function ProductCard ({ name,price }){

    return(
        <div className="product-card">
            <h2>Product Name is { name }</h2>
            <h2>It's price is { price }</h2>
        </div>
    )

}
export default ProductCard