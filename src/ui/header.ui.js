import { html, LitElement } from "lit-element";

export class HeaderUI extends LitElement {
  static get properties() {
    return {
      link1: { type: String },
      link2: { type: String },
      burguer: {type: Boolean}
    };
  }
  constructor() {
    super();
    this.link1 = "Namasté";
    this.link2 = "Yoga session";
    this.burguer = false
  }

  
  __toggle() {
    const menu = this.querySelector("header nav ul");
    menu.classList.toggle("open");
    }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <header>
        <nav>
          <div class="burguer" @click=${this.__toggle}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
          <ul class="links">
            <li><a href="/poses">${this.link2}</a></li>
            <li><a href="/">${this.link1}</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}
customElements.define("header-ui", HeaderUI);
