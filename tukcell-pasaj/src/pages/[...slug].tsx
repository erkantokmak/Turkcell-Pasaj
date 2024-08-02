import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const category = () => {
  
  // const router = useRouter();
  // const { path } = router.query;
  // const [products, setProducts] = useState([]);
  // const [productDetails, setProductDetails] = useState(null);

  // useEffect(() => {
  //   if (path) {
  //     if (path.length === 1) {
  //       fetch(`/api/products?category=${path[0]}`)
  //         .then(response => response.json())
  //         .then(data => setProducts(data));
  //     } else if (path.length === 2) {
  //       fetch(`/api/products?category=${path[0]}&subcategory=${path[1]}`)
  //         .then(response => response.json())
  //         .then(data => setProducts(data));
  //     } else if (path.length === 3) {
  //       fetch(`/api/product/${path[2]}`)
  //         .then(response => response.json())
  //         .then(data => setProductDetails(data));
  //     }
  //   }
  // }, [path]);

  // if (!path) {
  //   return <div>Loading...</div>;
  // }

  // if (path.length === 3 && productDetails) {
  //   return (
  //     <div>
  //      Ürün Detay Sayfası
  //     </div>
  //   );
  // }

  return (
    <></>
    // <div>
    //   <h1>
    //     {path.length === 1 && `Category: ${path[0]}`}
    //     {path.length === 2 && `Category: ${path[0]} - Subcategory: ${path[1]}`}
    //   </h1>
    //   <ul>
    //     {/* {products.map(product => (
    //       <li key={product}>{}</li>
    //     ))} */}
    //     Ürün Listesi
    //   </ul>
    // </div>
  );
}

export default category