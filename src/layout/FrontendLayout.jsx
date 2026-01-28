import { Outlet, Link } from "react-router";

const FrontendLayout = () => {
  return (
    <>
      <header className="h-50">
        <div className="d-flex justify-content-end">
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
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="text-center p-5 ">
        <p className="text-secondary">© 2026 RudyWu</p>
      </footer>
    </>
  );
};

export default FrontendLayout;
