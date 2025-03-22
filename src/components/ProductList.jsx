import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <section>
      <h1 className="text-center text-3xl font-semibold my-8">
        Catálogo de Productos
      </h1>
      <div className="container flex flex-wrap justify-around">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.image}
            imageAlt={product.name}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
