import { css, html, LitElement } from "lit";

export class TitleUI extends LitElement {


    static get properties() {
        return {
            title: {
                type: String
            }
        }
    }
    render() {
        return html`
           <h1 part="title">${this.title}</h1>
           <slot></slot>
         `;
     }


}
customElements.define('title-ui', TitleUI);

customElements.whenDefined("title-ui").then(() => {
    console.log("title ha sido definido");
  });