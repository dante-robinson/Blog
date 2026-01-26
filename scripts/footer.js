class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      footer {
      display: flex;
      color: #7aa2f7;
      justify-content: space-between;
      position: relative;
      margin-top: 0.5vh;
      margin-bottom: 0.5vh;
      height: min-content;
      width: 100%;
      }

      footer > div > a {
        display: flex;
        font-family: sans-serif;
        width: max-content;
      }

      footer > div > a > span {
        display: inline-block;
        color: #7aa2f7;
      }


      footer > div {
        display: flex;
        justify-content: space-between;
        width: 50%;
      }

      .footer-link {
        display: flex;
        text-decoration: none;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: #c0caf5;
      }

      @media (max-width: 799px) {
        footer {
          display: flex;
          flex-direction: column;
        }

        footer > div {
          width: 100%;
          padding-bottom: 3vh;
          justify-content: center !important;
        }
      }
    </style>

    <footer>
      <div style="justify-content: start" class="BitcoinModal">
        <a
          class="footer-link BitcoinModalButton"
          target="_parent"
          rel="noopener noreferrer"
          href="https://cointr.ee/dante_robinson"  
        >
          <span>Bitcoin Address</span>
        </a>
        
      </div>

      <div style="justify-content: end">
        <a
          class="footer-link"
          target="_parent"
          rel="noopener noreferrer"
          href="https://github.com/dante-robinson/Blog"
        >
          <span>Source Code on Github</span>
        </a>
      </div>
    </footer> 
    `;
  }
}

customElements.define("footer-component", Footer);
