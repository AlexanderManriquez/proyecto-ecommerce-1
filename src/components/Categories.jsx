import Button from "@/components/Button";

function CategoryCard({ imageSrc, imageAlt, title, description }) {
  return (
    <div className="card w-1/4 flex flex-col justify-between items-center p-2 h-[450px] bg-gray-500 shadow-lg rounded-2xl">
      <img className="w-11/12 mx-auto rounded-2xl" src={imageSrc} alt={imageAlt} />
      <h2 className="text-center px-4">{title}</h2>
      <p className="text-center mx-4">{description}</p>
      <Button text="Ver Más" />
    </div>
  );
}

export default function Categories() {
  return (
    <section>
      <h1 className="text-center text-2xl m-4 p-4">Categorías</h1>
      <div className="container flex justify-around align-center">
        <CategoryCard
          imageSrc="https://cdn.pixabay.com/photo/2018/01/02/23/29/woman-3057294_1280.jpg"
          imageAlt="Mujer con ropa deportiva"
          title="Mujer"
          description="Descubre las últimas tendencias en moda femenina."
        />
        <CategoryCard
          imageSrc="https://cdn.pixabay.com/photo/2018/02/22/13/11/male-3172990_1280.jpg"
          imageAlt="Hombre con ropa de invierno"
          title="Hombre"
          description="Sumérgete en lo último de la moda masculina."
        />
        <CategoryCard
          imageSrc="https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg"
          imageAlt="Ropa de bebé"
          title="Niños"
          description="Explora moda para los más pequeños de la casa."
        />
      </div>
    </section>
  );
}
