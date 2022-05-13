import "../components/poses.component";

export class PosesPage extends HTMLElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      

    `;
  }

  connectedCallback() {
    this.innerHTML = `
            
            
            
            <h1>Poses Page</h1>
          
        
        `;
  }
}

customElements.define("poses-page", PosesPage);
