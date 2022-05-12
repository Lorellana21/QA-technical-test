import '../components/poses.component';
import "../ui/header.ui";

export class PosesPage extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            
            <header-ui></header-ui>
            <h1>Poses Page</h1>
        `;
    }

}

customElements.define('poses-page', PosesPage);