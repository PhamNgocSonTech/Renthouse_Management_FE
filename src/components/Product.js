import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import houseApi from "../api/houseApi";
import { useContext } from "react";
import { Store } from "../Store";

function Product(props) {
  const { room } = props;
  const category = room.rentHouse_Id.category_Id;
  // const check = product.countInStock
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x.objectId === item.objectId);
    console.log("existItem", existItem)
    const quantity = existItem ? existItem.quantity + 1 : 1;
    console.log("quantity", quantity)
    const data = await houseApi.getRoomById(item.objectId);
    console.log("check data", data)
    if (data.countInStock < quantity) {
      window.alert("sorry . This house is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: {
        ...item,
        quantity,
      },
    });
  };

  
  return (
    <Card key={room.objectId}>
      <Link to={`/classes/Room/${room.objectId}`}>
        {/* style={{width: '200px', height: '200px'}} */}
        <img 
          src={room.image}
          className="card-img-top"
          alt={room.nameRoom}
        />
      </Link>
      <Card.Body>
        <Link to={`/classes/Room/${room.objectId}`}>
          <Card.Title>{room.nameRoom}</Card.Title>
        </Link>
        <Card.Text>${room.price}</Card.Text>
        <Card.Text
          className="category"
          style={{
            color: category === "Featured" ? "#25b579" : "#ff9800",
          }}
        >
          {category}
        </Card.Text>
        <Card.Text>
          <i className="fa fa-location-dot"></i> {room.rentHouse_Id.address}
        </Card.Text>
      {room.countInStock === 0 ? (
          // <Button variant="light" disable={true}>
          //   Out of stock
          // </Button>
          <button>Out of stock</button>
        ) : (
          <button onClick={() => addToCartHandler(room)}>
            Click To Buy
          </button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Product;
