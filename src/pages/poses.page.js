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
        width:100%;
            display: flex;
            flex-direction: column;
      }
      .main-content {
        text-align: center;
    display: flex;
    flex-wrap: wrap;
        column-gap: 20px;
        justify-content: space-between;
        /* align-content: flex-start;
    justify-content: start; */
    min-height: 100vh;
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
