import { html, css, LitElement } from "lit";


export class HomePage extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      textButton: { type: String },
    };
  }
  constructor() {
    super();
    this.title = "Yoga Wizard";
    this.subtitle = "creates my yoga session";
    this.textButton = "Go";
  }
  connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return css`
      :host {
        display: block;
        overflow: hidden; 
      }
      .home-page {
        display: flex;
        position: absolute;
        width: 100vw;
        min-height: 100vh;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        animation: 5s fadeInWelcome;
      }
      .title {
        font-size: var(--size-title);
        color: var(--color-primary);
      }
      .subtitle {
        position: relative;
        font-weight: 600;
        font-size: var(--size-subtitle);
        color: var(--color-bg);
        top: -0.5em;
        right: 0.1em;
        animation: 5s bounceMove infinite;
      }
      .start-button {
        display: block;
        font-size: var(--size-button-text);
        font-weight: bold;
        color: var(--color-bg);
        background-color: var(--color-primary-light);
        text-align: center;
        width: 4em;
        padding: 0.5em;
        text-decoration: none;
        border-radius: 5em;
        transition: all 0.5s;
        cursor: pointer;
      }
      .start-button:hover {
        width: 5em;
        transition: all 0.5s;
        animation: wiggle 2s linear infinite;
      }
      .start-button::after {
        margin-left: -1.5em;
        opacity: 0;
        transition: all 0.5s;
      }
      .start-button:hover::after {
        margin-left: 0;
        opacity: 1;
      }
      
      @keyframes bounceMove {
        0% {
          transform: rotate(10deg);
        }
        50% {
          transform: rotate(-10deg);
        }
        100% {
          transform: rotate(10deg);
        }
      }
      @keyframes fadeInWelcome {
        from {
          transform: translateY(80%);
        }
        to {
          transform: translateY(0%);
        }
      }
      @keyframes wiggle {
        0%,
        7% {
          transform: rotateZ(0);
        }
        15% {
          transform: rotateZ(-15deg);
        }
        20% {
          transform: rotateZ(10deg);
        }
        25% {
          transform: rotateZ(-10deg);
        }
        30% {
          transform: rotateZ(6deg);
        }
        35% {
          transform: rotateZ(-4deg);
        }
        40%,
        100% {
          transform: rotateZ(0);
        }
      }
    `;
  }

  render() {
    return html`
        <section class="home-page">
          <h1 class="title">${this.title}</h1>
          <p class="subtitle">${this.subtitle}</p>
          <a
            class="start-button"
            id="start-button"
            href="/poses"
            >${this.textButton}</a
          >
        </section>
    `;
  }
}
customElements.define("home-page", HomePage);
