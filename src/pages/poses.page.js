import { html, css, LitElement } from "lit";
import "./../components/poses.component";


export class PosesPage extends LitElement {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
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
