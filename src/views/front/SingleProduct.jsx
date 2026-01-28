import axios from "axios";
import { useEffect, useState } from "react";

// 下面為方法一 使用 navigate 傳遞 state
// import { useLocation } from "react-router";

import { useParams } from "react-router";
const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;

const SingleProduct = () => {
  // 下面為方法一 使用 navigate 傳遞 state
  // const location = useLocation();
  // const product = location.state?.productData;
  // -----

  //下面為方法二 使用 useParams 接收 :id 的內容，重新打 API 取得資料
  const { id } = useParams();
  const [product, setProducts] = useState();
  useEffect(() => {
    const handleView = async (id) => {
      try {
        const res = await axios.get(
          `${API_BASE}/api/${API_PATH}/product/${id}`,
        );
        setProducts(res.data.product);
      } catch (error) {
        console.log(error.response);
      }
    };
    handleView(id);
  }, [id]);
  // -----
  const addCart = async (id, qty) => {
    try {
      const data = {
        product_id: id,
        qty: 1,
      };
      const res = await axios.post(`${API_BASE}/api/${API_PATH}/cart`, {
        data,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return !product ? (
    <h2>查無產品</h2>
  ) : (
    <>
      <div className="container mt-3">
        <div className="card " style={{ width: "18rem" }}>
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
              <small className="text-body-secondary">/{product.unit}</small>
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addCart(product.id)}
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
