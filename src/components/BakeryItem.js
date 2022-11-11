// TODO: create a component that displays a single bakery item
// TODO: create a component that displays a single bakery item

// import "./BakeryItem.css"

function BakeryItem(props) {
    return (
    <div>
        <h3>Name: {props.item.name}</h3>
        <p>{props.item.description}</p>
        <p>Price: {props.item.price} </p>
        <img src = {props.item.image} />
        <button onClick={() => {props.addToCart(props.item)}}>add to cart</button>
    </div>
    );
}

export default BakeryItem;
