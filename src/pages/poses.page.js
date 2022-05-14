import { html, css, LitElement } from "lit";
import "./../components/poses.component";


export class PosesPage extends LitElement {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  
  static get styles() {
    return css`
      :host {
        display: block;
        min-height: 100%;
      }
      .main-content {
        display: flex;
        //position: absolute;
        width: 100%;
        min-height: 80%;
        flex-flow: column wrap;
        justify-content: start;
        align-items: center;
        padding: 2rem;
      }
    `;
  }

//   createRenderRoot() {
//     return this;
// }

  render() {
    return html`
    <section class="main-content" data-cy="main-content">
      <genk-poses></genk-poses>
  </section>
      `;
  }
}

customElements.define("poses-page", PosesPage);
