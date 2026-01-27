import axios from "axios";
import { useEffect, useState } from "react";
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/${API_PATH}/products`);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error.response);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-3" key={product.id}>
              <div className="card ">
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <del>原價：{product.origin_price}</del> 售價：
                    {product.price}
                    <small className="text-body-secondary">
                      /{product.unit}
                    </small>
                  </p>
                  <button type="button" className="btn btn-primary">
                    查看更多
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
