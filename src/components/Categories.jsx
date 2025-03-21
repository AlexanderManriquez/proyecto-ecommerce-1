import Button from "@/components/Button";

export default function Categories() {
    return (
        <section>
        <h1 className="text-center text-2xl m-4 p-4">Categorías</h1>
        <div className="container flex justify-around align-center">
            <div className="card w-1/4 flex flex-col justify-between items-center p-2 h-[450px] bg-gray-500 shadow-lg rounded-2xl">
                <img className="w-11/12 mx-auto rounded-2xl" src="https://cdn.pixabay.com/photo/2018/01/02/23/29/woman-3057294_1280.jpg" alt="Mujer con ropa deportiva"/>
                <h2 className="text-center px-4">Mujer</h2>
                <p className="text-center mx-4">Descubre las últimas tendencias en moda femenina.</p>
                <Button text="Ver Más" />
            </div>
            <div className="card w-1/4 flex flex-col justify-between items-center p-2 h-[450px] bg-gray-500 shadow-lg rounded-2xl">
                <img className="w-11/12 mx-auto rounded-2xl" src="https://cdn.pixabay.com/photo/2018/02/22/13/11/male-3172990_1280.jpg" alt="Hombre con ropa de invierno"/>
                <h2 className="text-center">Hombre</h2>
                <p className="text-center">Sumérgete en lo último de la moda masculina.</p>
                <Button text="Ver Más" />
            </div>
            <div className="card w-1/4 flex flex-col justify-between items-center p-2 h-[450px] bg-gray-500 shadow-lg rounded-2xl">
                <img className="w-11/12 mx-auto rounded-2xl" src="https://cdn.pixabay.com/photo/2017/02/08/02/56/booties-2047596_1280.jpg" alt="Ropa de bebé"/>
                <h2 className="text-center">Niños</h2>
                <p className="text-center">Explora moda para los más pequeños de la casa.</p>
                <Button text="Ver Más" />
            </div>
        </div>
    </section>
    )

}
