import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import 'react-responsive-modal/styles.css';
import { useGetAllProductsQueryByOrdered } from "../slices/orderedApi";


const History = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
 const history = useHistory();
 const { data, error, isLoading } = useGetAllProductsQueryByOrdered();


    return (
      <div className="home-container">
      {status === "success" ? (
        <>
          <h2>Order your drink!</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">€{product.price}</span>
                  </div>
                
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>    
    );
  };

export default History;
