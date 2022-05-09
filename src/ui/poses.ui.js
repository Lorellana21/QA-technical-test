import { html, LitElement } from "lit";

export class PosesUI extends LitElement {

    static get properties() {
        return {
            poses: {
                type: Object
            }
        }
    }

    render() {
        return html`
            <ul id="pose">
            ${this.poses.items && this.poses.items.map((pose) => html`
                <li class="pose" id="pose_${pose.id}">
                    ${pose.id} -- ${pose.sanskrit_name}
                </li>
            `)}
            </ul>
        `;
    }

    createRenderRoot() {
        return this;
    }

}

customElements.define('poses-ui', PosesUI);