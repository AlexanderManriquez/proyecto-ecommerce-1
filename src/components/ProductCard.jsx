export default function ProductCard({ imageSrc, imageAlt, title, price }) {
    return (
        <div className="card w-1/4 flex flex-col justify-between items-center p-2 h-[450px] bg-gray-500 shadow-lg rounded-2xl">
            <img className="w-11/12 mx-auto rounded-2xl" src={imageSrc} alt={imageAlt} />
            <h2 className="text-center px-4">{title}</h2>
            <p className="text-center mx-4">{price}</p>
            <Button text="Ver Más" />
        </div>
    );
}