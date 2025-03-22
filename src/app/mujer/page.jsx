import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ProductList from "../../components/ProductList";

export default function Mujer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "mujerProducts"));
      const productsList = querySnapshot.docs.map(doc => doc.data());
      setProducts(productsList);
    };

    fetchProducts();
  }, []);

  return <ProductList products={products} />;
}