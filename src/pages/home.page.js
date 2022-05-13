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
    this.subtitle = "creating my yoga session";
    this.textButton = "Start";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        min-height: 100%;
      }
      .namaste {
        display: flex;
        position: absolute;
        width: 100%;
        min-height: 80%;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        //animation: tracking-in-expand 5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        //animation: 5s fadeInWelcome;
      }
      .title {
        font-size: var(--size-title);
        color: var(--color-primary);
      }
      .subtitle {
        position: relative;
        font-size: var(--size-subtitle);
        color: var(--color-secondary);
        float: right;
        top: -0.5em;
        right: 0.1em;
        //margin-bottom: -0.3em;
        //animation: 5s bounceMove infinite;
      }
      .start-button {
        display: block;
        font-size: 1.2em;
        font-weight: bold;
        color: var(--color-tertiary);
        text-align: center;
        width: 4em;
        padding: 0.5em;
        border: 0;
        text-decoration: none;
        border: solid 0.2em #000;
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
      /*animations*/
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
      @keyframes tracking-in-expand {
        0% {
          letter-spacing: -0.5em;
          opacity: 0;
        }
        40% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
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
    
        <section class="namaste">
          <h1 class="title">${this.title}</h1>
          <p class="subtitle">${this.subtitle}</p>
          <a
            class="start-button"
            id="start-button"
            data-cy="start-button-enter"
            href="/poses"
            >${this.textButton}</a
          >
        </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

}

customElements.define("home-page", HomePage);
