const header = document.querySelector("header")
header.innerHTML = `
<nav class="navbar navbar-expand-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav bg-white">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="../../index.html"
                >Trang chủ</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                >Cửa hàng</a
              >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="../jacket/index.html"
                    >Jacket</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="../blazer/index.html"
                    >Blazer</a
                  >
                </li>

                <li>
                  <a class="dropdown-item" href="../pants/index.html">Pants</a>
                </li>
                <li>
                  <a class="dropdown-item" href="../jeans/index.html">Jeans</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                >Chính sách</a
              >
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="../../gioithieu.html"
                    >Giới thiệu về HD</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="../../muahang.html"
                    >Chính sách mua hàng</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="../../doitra.html"
                    >Chính sách đổi trả</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <a class="logo" href="../../index.html">
        <img src="../../Picture/logoHD.jpg" alt="" id="logo" />
      </a>
      <ul class="d-flex flex-row gap-3 user-function">
        <li class="search">
          <a href="../search/index.html"><i class="fa-solid fa-magnifying-glass"></i></a>
        </li>
        <li class="user">
          <a
            class="fa-solid fa-user"
            target="_blank"
            href="../user/index.html"
          ></a>
        </li>
        <li class="cart-shopping">
          <a href="../cart/index.html"><i class="fa-solid fa-cart-shopping"></i></a>
        </li>
      </ul>
`
