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
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 20px auto;
        background-color: blue;
        
      }
      header nav ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 400px;
        list-style: none;
        position: relative;
      }
      /*mobile navigation*/

      .burguer {
        cursor: pointer;
        display: none;
      }
      .burguer div {
        margin: 4px;
      }
      .burguer .bar {
        background: white;
        width: 40px;
        height: 3px;
        border-radius: 5px;
      }
      
      @media (max-width: 800px) {
        .burguer {
          display: block;
        }
        header nav ul {
          position: absolute;
          top: 50px;
          right: 0px;
          flex-direction: column;
          width: 200px;
          height: 5vh;
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

  // static get properties() {
  //   return {
  //     link1: { type: String },
  //     link2: { type: String },
  //   };
  // }

  // constructor() {
  //   super();
  //   this.link1 = "Namasté";
  //   this.link2 = "Yoga session";
  // }
  
// open(){
  
//   const menu = this.querySelector("header nav ul");
  
//   burguer.addEventListener("click", function(){
//       menu.classList.toggle("open");
//   })

// }
// connectedCallback(){
//   super.connectedCallback();
//   //this.open();
//   const burguer = this.querySelector("#burguer");
//   console.log(burguer)
  
  
// }
// createRenderRoot() {
//   return this;
// }
  

  render() {
    return html`

      
    `;
  }
}

customElements.define("header-ui", HeaderUI);

