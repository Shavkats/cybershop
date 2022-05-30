import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ReactLoading from "react-loading";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <React.Fragment>
        <div className="col-md-3">
          <ReactLoading
            color="#3c6cde"
            type="spokes"
            width={64}
            height={64}
            delay={100}
          />
        </div>
        <div className="col-md-3">
          <ReactLoading
            color="#3c6cde"
            type="spokes"
            width={64}
            height={64}
            delay={100}
          />
        </div>
        <div className="col-md-3">
          <ReactLoading
            color="#3c6cde"
            type="spokes"
            width={64}
            height={64}
            delay={100}
          />
        </div>
        <div className="col-md-3">
          <ReactLoading
            color="#3c6cde"
            type="spokes"
            width={64}
            height={64}
            delay={100}
          />
        </div>
      </React.Fragment>
    );
  };

  const filterProducts = (cat) => {
    const filteredList = data.filter((item) => item.category === cat);
    setFilter(filteredList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProducts("electronics")}
          >
            Electronics
          </button>
        </div>
        ;
        {filter.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <div className="col-md-3">
                <div className="card h-100 text-center p-4">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-primary"
                    >
                      Shop Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center text-info">
              Check Out Our New Arrivals
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
