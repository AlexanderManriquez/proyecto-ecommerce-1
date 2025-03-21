export default function Hero() {
    return (
        <header className="flex justify-between items-center p-4 text-white">
        <div className="w-1/2 ">
          <img
            className="max-w-full w-auto rounded-2xl"
            src="https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_1280.jpg"
            alt="Mujer con Gafas de sol"
          />
        </div>
        <div className="w-1/2 text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl">¡Encuentra tu estilo!</h1>
          <p className="text-sm w-1/2 mx-auto mt-8">
            Descubre las últimas tendencias en moda para mujer, hombre y niños.
          </p>
          <a href="#" className="mt-10 text-xl">Ver más...</a>
        </div>
      </header>
    )
}