import { css, html, LitElement } from "lit-element";

export class HeaderUI extends LitElement {
  static get styles() {
    return css`
      header {
        width: 100%;
        height: 100%;
      }
      header nav {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        width: 90%;
        height: 3rem;
        margin: 20px auto;
      }
      header nav ul {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        align-items: center;
        width: 400px;
        list-style: none;
        cursor: pointer;
        position: relative;
      }
      /*header-mobile navigation*/

      .burguer {
        cursor: pointer;
        display: none;
      }
      .burguer div {
        margin: 4px;
      }
      .burguer .bar {
        background-color: white;
        width: 40px;
        height: 3px;
        border-radius: 5px;
      }

      @media (max-width: 768px) {
        .burguer {
          display: block;
        }
        header nav ul {
          flex-flow: column;
          position: absolute;
          top: 30px;
          right: 0px;
          width: 200px;
          height: 6vh;
          background: var(--color-secondary);
          transition: transform 0.3s ease-in-out;
          border-radius: 10px;
          transform: translateX(100%);
        }
      }
      .open {
        transform: translateX(0%);
      }
    `;
  }

  static get properties() {
    return {
      link1: { type: String },
      link2: { type: String },
    };
  }

  constructor() {
    super();
    this.link1 = "Namasté";
    this.link2 = "Yoga session";
  }

  firstUpdated() {
    const burguer = this.querySelector(".burguer");
    console.log(burguer);
    const menu = this.querySelector("header nav ul");
    burguer.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  connectedCallback() {
    super.connectedCallback();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <header>
        <nav>
          <div class="burguer">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <ul>
            <li><a href="/">${this.link1}</a></li>
            <li><a href="/poses">${this.link2}</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-ui", HeaderUI);
