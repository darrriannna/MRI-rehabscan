import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/productAction";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import products from "../pages/ProductData"; // Adjust the path to where your products.js file is located

const Products = () => {
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addProduct(product));
  };

  const filterProduct = (cat) => {
    const updatedList = products.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  useEffect(() => {
    setLoading(false); // You can set loading to false since you're using local data
  }, []);

  const Loading = () => (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
      <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <Skeleton height={592} />
      </div>
    </>
  );

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-5">
        <button className="btn btn-outline-dark btn-bg m-2" onClick={() => setFilter(products)}>Allt</button>
        <button className="btn btn-outline-dark btn-bg m-2" onClick={() => filterProduct("knä")}>Knäskydd</button>
        <button className="btn btn-outline-dark btn-bg m-2" onClick={() => filterProduct("axel")}>Axel/Nacke</button>
        <button className="btn btn-outline-dark btn-bg m-2" onClick={() => filterProduct("hand")}>Hand & Handled</button>
        <button className="btn btn-outline-dark btn-bg m-2" onClick={() => filterProduct("fot")}>Fot & Häl</button>
        <button className="btn btn-outline-dark btn-bg m-2" onClick={() => filterProduct("ben")}>Ben</button>
        <button className="btn btn-outline-dark btn-bg m-2" onClick={() => filterProduct("arm")}>Arm</button>
        
      </div>

      {filter.map((product) => (
        <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <div className="card text-center h-100">
            <img
              className="card-img-top p-3"
              src={product.image}
              alt={product.title}
              height={300}
            />
            <div className="card-body">
              <h5 className="card-title">
                {product.title.substring(0, 12)}...
              </h5>
              <p className="card-text">
                {product.description.substring(0, 90)}...
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item lead">$ {product.price}</li>
            </ul>
            <div className="card-body">
              <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                Buy Now
              </Link>
              <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Skydd & Bandage</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;

