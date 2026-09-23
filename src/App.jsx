import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a href="/" className="logo">
          SARONAK
        </a>

        <nav className="nav-links">
          <a href="#home">خانه</a>
          <a href="#categories">دسته‌بندی‌ها</a>
          <a href="#about">درباره ساروناک</a>
        </nav>

        <button className="login-button">ورود / ثبت‌نام</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="hero-badge">فروشگاه آنلاین ساروناک</span>

            <h1>
              استایل خودت را
              <br />
              <span>انتخاب کن.</span>
            </h1>

            <p>
              ساروناک یک تجربه ساده و مدرن برای پیدا کردن لباس،
              اکسسوری و استایل مورد علاقه شماست.
            </p>

            <div className="hero-actions">
              <button className="primary-button">مشاهده محصولات</button>
              <button className="secondary-button">دسته‌بندی‌ها</button>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-glow"></div>

            <div className="fashion-card">
              <span>NEW COLLECTION</span>
              <h2>SARONAK</h2>
              <p>STYLE • SIMPLE • MODERN</p>
            </div>
          </div>
        </section>

        <section className="categories" id="categories">
          <div className="section-heading">
            <span>EXPLORE</span>
            <h2>دسته‌بندی‌ها</h2>
            <p>محصول مورد علاقه‌ات را پیدا کن.</p>
          </div>

          <div className="category-grid">
            <article className="category-card">
              <div className="category-icon">W</div>
              <h3>لباس زنانه</h3>
              <p>استایل‌های متنوع و جدید</p>
              <a href="#women">مشاهده ←</a>
            </article>

            <article className="category-card">
              <div className="category-icon">T</div>
              <h3>تی‌شرت</h3>
              <p>مدل‌های ساده و جذاب</p>
              <a href="#tshirts">مشاهده ←</a>
            </article>

            <article className="category-card">
              <div className="category-icon">A</div>
              <h3>اکسسوری</h3>
              <p>جزئیات کوچک، استایل بزرگ</p>
              <a href="#accessories">مشاهده ←</a>
            </article>

            <article className="category-card">
              <div className="category-icon">B</div>
              <h3>کیف و کفش</h3>
              <p>برای کامل کردن استایل</p>
              <a href="#bags">مشاهده ←</a>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <div>
            <span className="section-label">ABOUT SARONAK</span>
            <h2>ساده، مدرن و متفاوت.</h2>
          </div>

          <p>
            این نسخه از ساروناک یک پروژه آموزشی با React و Vite است.
            هدف آن تمرین ساخت رابط کاربری، مدیریت کامپوننت‌ها و کار با
            Git و GitHub است.
          </p>
        </section>
      </main>

      <footer>
        <div>
          <strong>SARONAK</strong>
          <p>Simple style. Modern experience.</p>
        </div>

        <span>© 2026 Saronak</span>
      </footer>
    </div>
  );
}

export default App;