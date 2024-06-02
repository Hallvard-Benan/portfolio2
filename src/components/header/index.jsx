export default function index() {
  return (
    <header>
      <nav class="nav-menu">
        <div class="hamburger-menu">
          <label
            for="check"
            class="menu-btn"
            role="button"
            tabindex="0"
            aria-label="menu button"
          >
            <input type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <ul class="container nav-menu__list ">
          <li class="nav-menu__item">
            <a href="#projects" class="nav-menu__link">
              <i class="fa-solid fa-folder-open"></i>Projects{" "}
            </a>
          </li>
          <li class="nav-menu__item">
            <a href="#about" class="nav-menu__link">
              <i class="fa-solid fa-address-card"></i>About me
            </a>
          </li>
          <li class="nav-menu__item nav-menu__item--contact">
            <a
              class="nav-menu__link"
              aria-label="link to my email"
              href="mailto: hallvard.dev@gmail.com"
              target="_blank"
            >
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a
              class="nav-menu__link"
              target="_blank"
              aria-label="link to my github"
              href="https://github.com/Hallvard-Benan"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              class="nav-menu__link"
              target="_blank"
              aria-label="link to my linkedin"
              href="https://www.linkedin.com/in/hallvard-benan-282937249/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
