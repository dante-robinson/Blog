class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      header {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        font-size: 2.25rem;
        line-height: 3rem;
        color: #7aa2f7;
        height: 18vh;
        font-weight: 700;
        text-decoration: none;
      } 
    </style>
      
    <header>
      <a class="title" target="_parent" href="/">Dante's Blog</a>
    </header>
    `;
  }
}

customElements.define("header-component", Header);
