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
  font-size: var(--size-links-pages);
  box-shadow: 10px 5px 5px white;
  display: flex;
  flex-flow: row-reverse;
  gap: 1.5rem;
  align-items: center;
  width: 300px;
  list-style: none;
  cursor: pointer;
  position: relative;
  
}
a {
  text-decoration: none;
}
a:hover {
  color: violet;
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

@media (max-width: 400px) {
  .burguer {
    display: block;
  }
  header nav ul {
    flex-flow: column wrap;
    position: absolute;
    top: 10px;
    right: 25px;
    width: 180px;
    height: 20vh;
    gap: 0rem;
    background: var(--color-audio);
    transition: transform 0.3s ease-in-out;
    border-radius: 5em;
    border: 2px solid white;
    box-shadow: none;
    transform: translateX(150%);
    
  }
  header nav ul li{
    margin-top: 2.5rem;
    font-size: 1.5rem;
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
    const menu = this.querySelector("header nav ul");
    burguer.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.firstUpdated();
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
          <li><a href="/poses">${this.link2}</a></li>
          <li><a href="/">${this.link1}</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-ui", HeaderUI);
