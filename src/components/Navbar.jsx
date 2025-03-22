export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800">
            <div className="flex">
                <a href="#" aria-label="Ir a la página principal">
                    <i className="fa-brands fa-web-awesome text-amber-400"></i>
                </a>
                <p className="ml-2">La Tienda</p>
            </div>
            <ul className="w-1/4 flex justify-around">
                <li><a className="" href="#" aria-label="Ver sección de Mujer">Mujer</a></li>
                <li><a className="" href="#" aria-label="Ver sección de Hombre">Hombre</a></li>
                <li><a className="" href="#" aria-label="Ver sección de Niños">Niños</a></li>
            </ul>
            <ul className="w-1/4 flex justify-around">
                <li>
                    <a className="" href="/login.html" aria-label="Iniciar sesión">Iniciar sesión</a>
                </li>
                <li>
                    <a className="" href="/signup.html" aria-label="Registrarse">Registrarse</a>
                </li>
                <li>
                    <a className="" href="/cart.html" aria-label="Abrir carrito de compras">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
