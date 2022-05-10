import '../ui/title.ui';


export class HomePage extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <title-ui title="Yoga Wizard">
            <p>yoga session planner</p>
            </title-ui>
        `;
    }

}

customElements.define('home-page', HomePage);