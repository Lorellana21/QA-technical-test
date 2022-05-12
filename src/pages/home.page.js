import { html, css, LitElement } from "lit";
import "../ui/header.ui";

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

      

      /*title*/
      .namasté {
        display: flex;
        position: absolute;
        width: 100%;
        min-height: 80%;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        animation: 5s fadeInWelcome;
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
        animation: 5s bounceMove infinite;
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
    `;
  }

  render() {
    return html`
    <header-ui
    link1="Namasté"
    link2="Yoga session"></header-ui>
      <main>
        <section class="namasté">
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
      </main>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  _;
}

customElements.define("home-page", HomePage);
