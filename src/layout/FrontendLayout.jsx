import { Outlet, Link } from "react-router";

const FrontendLayout = () => {
  return (
    <>
      <header>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              首頁
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              產品列表
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              購物車
            </Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2026 RudyWu</p>
      </footer>
    </>
  );
};

export default FrontendLayout;
