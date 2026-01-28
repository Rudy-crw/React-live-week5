import { Link } from "react-router";
const Home = () => {
  return (
    <div className="home-page">
      {/* =========================================
          1. 全螢幕背景圖 (Hero Background)
          使用 fixed + z-index:-1 讓它成為「背景」，
          這樣就不會影響到 FrontendLayout 的 Header，
          且 Header 會自然地浮在圖片上方。
          ========================================= */}
      <div
        className="hero-background"
        style={{
          position: "fixed", // 關鍵：固定在視窗，不佔用排版空間
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh", // 佔滿全螢幕
          zIndex: -1, // 關鍵：放在最底層，才不會擋住 Header
          overflow: "hidden",
        }}
      >
        {/* 圖片本體 */}
        <img
          src=""
          alt="R-Garage Hero"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // 保持比例填滿
            filter: "brightness(0.6)", // 降低亮度，讓白色文字更清楚
          }}
        />
      </div>

      {/* =========================================
          2. 首頁主要內容 (Hero Content)
          因為背景圖已經獨立出去了，這裡只需要處理文字。
          利用 min-vh-100 讓文字垂直置中於畫面。
          ========================================= */}
      <div
        className="container d-flex flex-column justify-content-center align-items-center text-white"
        style={{
          minHeight: "100vh", // 讓內容區塊高度至少為視窗高度
          paddingTop: "80px", // 避開 Header 的空間 (依視需求調整)
        }}
      >
        <div className="text-center animate__animated animate__fadeInUp">
          <h1
            className="display-1 fw-bold text-uppercase mb-3"
            style={{ letterSpacing: "5px" }}
          >
            R-Garage
          </h1>
          <p className="fs-3 fw-light mb-4 text-white-50">
            釋放你的騎士靈魂 | 頂級重機租賃
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link
              to="/products"
              className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow"
            >
              立即預約
            </Link>
            <a
              href="#intro"
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill"
            >
              了解更多
            </a>
          </div>
        </div>
      </div>

      {/* =========================================
          3. 其他區塊 (介紹/特色)
          為了讓頁面有捲動感，背景圖設為 fixed，
          這些內容捲動時會蓋過背景圖 (Parallax 效果)。
          ========================================= */}
      <section
        id="intro"
        className="py-5 bg-light text-dark shadow position-relative"
      >
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-12 mb-5">
              <h2 className="fw-bold display-6">為什麼選擇我們？</h2>
              <div
                className="bg-primary mx-auto mt-3"
                style={{ width: "60px", height: "3px" }}
              ></div>
            </div>

            {/* 特色卡片 */}
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100">
                <div className="h1 text-primary mb-3">
                  <i className="bi bi-speedometer"></i>
                </div>
                <h4 className="fw-bold">極致性能</h4>
                <p className="text-muted">
                  提供 Ducati V4 S、BMW S1000RR
                  等頂級仿賽，保證原廠輸出，體驗最純粹的速度感。
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 h-100">
                <div className="h1 text-primary mb-3">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4 className="fw-bold">安全保障</h4>
                <p className="text-muted">
                  每台車輛皆定期由原廠技師檢修，並含強制險與道路救援服務，讓您無後顧之憂。
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="p-4 h-100">
                <div className="h1 text-primary mb-3">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h4 className="fw-bold">取車便利</h4>
                <p className="text-muted">
                  位於市中心交通樞紐，提供裝備租借服務。只需帶上您的駕照，隨時出發。
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-outline-dark px-5">
              查看全車系 (12款)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
