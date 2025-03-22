export default function Footer() {
  return (
    <footer className="footer flex justify-between items-center p-4">
      <div className="footer-paymeth w-1/9 flex justify-around">
        <i className="footer-paymeth__icon fa-brands fa-cc-visa color-gray-100"></i>
        <i className="footer-paymeth__icon fa-brands fa-cc-mastercard"></i>
        <i className="footer-paymeth__icon fa-brands fa-cc-paypal"></i>
      </div>

      <div className="footer-copy">
        <p>© 2025 La Tienda. Todos los derechos reservados.</p>
      </div>
      <div className="footer-social w-1/9 flex justify-around">
        <i className="footer-social__icon fa-brands fa-facebook"></i>
        <i className="footer-social__icon fa-brands fa-instagram"></i>
        <i className="footer-social__icon fa-brands fa-twitter"></i>
        <i className="footer-social__icon fa-brands fa-youtube"></i>
        <i className="footer-social__icon fa-brands fa-pinterest"></i>
        <i className="footer-social__icon fa-brands fa-tiktok"></i>
      </div>
    </footer>
  );
}
