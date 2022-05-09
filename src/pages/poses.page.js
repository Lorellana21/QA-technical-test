import '../components/poses.component';

export class PosesPage extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <h1>Poses Page</h1>
            <genk-poses></genk-poses>
        `;
    }

}

customElements.define('poses-page', PosesPage);