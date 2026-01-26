class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      nav {
        display: flex;
        width: 100%;
        height: min-content;
        flex-direction: row;
        justify-content: center;
      }

      .nav-ul {
        display: flex;
        justify-content: space-between;
        width: 50%;
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.75rem;
        text-decoration: none;
        list-style-type: none;
        padding: 0;
        position: relative;
      }

      .nav-li {
        position: relative;
        justify-content: center;
      }

      .nav-a {
        width: 100%;
        color: #7aa2f7;
        border: none;
        text-decoration: none;
        background-color: Transparent;
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 800;
      }

      .nav-a:hover {
        color: #3d59a1;
      }

      @media (max-width: 1024px) {
        nav {
          justify-content: normal;
        }

        .nav-ul {
          width: 100%;
          margin-left: 2vw;
          margin-right: 2vw;
        }
      }
    </style>

    <nav>
      <ul class="nav-ul">
        <li class="nav-li">
          <a class="nav-a" href="../nav/Linux" target="_parent">Linux</a>
        </li>

        <li class="nav-li">
          <a class="nav-a" href="../nav/Crypto" target="_parent">Crypto</a>
        </li>

        <li class="nav-li">
          <a class="nav-a" href="../nav/BSD" target="_parent">BSD</a>
        </li>
      </ul>
    </nav> 
    `;
  }
}

customElements.define("nav-component", NavBar);
