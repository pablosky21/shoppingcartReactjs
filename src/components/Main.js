import React, { useEffect, useState } from "react";
import { Product } from "./Product";

export const Main = ({onAdd}) => {
  const [productosApi, setproductosApi] = useState([]);
  const getProductos = async () => {
    const resultados = await fetch("https://fakestoreapi.com/products");
    const productos = await resultados.json();
    setproductosApi(productos);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="card">
        { productosApi.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        )) }
      </div>
    </main>
  );
};
