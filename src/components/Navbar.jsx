export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="flex">
                <a href="#" target="_blank">
                    <i className="fa-brands fa-web-awesome text-amber-400"></i>
                </a>
                <p className="ml-2">La Tienda</p>
            </div>
            <ul className="w-1/4 flex justify-around">
                <li><a className="" href="#" target="_blank">Mujer</a></li>
                <li><a className="" href="#" target="_blank">Hombre</a></li>
                <li><a className="" href="#" target="_blank">Niños</a></li>
            </ul>
            <ul className="w-1/4 flex justify-around">
                <li>
                    <a className="" href="/login.html" target="_blank">Iniciar sesión</a>
                </li>
                <li>
                    <a className="" href="/signup.html" target="_blank">Registrarse</a>
                </li>
                <li>
                    <a className="" href="/cart.html" aria-label="Abrir carrito de compras" target="_blank">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
