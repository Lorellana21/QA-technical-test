import { html, LitElement } from "lit";
import { AllPosesUseCase } from "../usecases/all-poses.usecase";
import '../ui/poses.ui';

export class PosesComponent extends LitElement {

    static get properties() {
        return {
            poses: {
                type: Object,
                state: true
            }
        }
    }

    async connectedCallback() {
        super.connectedCallback();
        const allPosesUseCase = new AllPosesUseCase();
        this.poses = await allPosesUseCase.execute();
    }
    


    render() {
        return html`

            <poses-ui .poses="${this.poses}"></poses-ui>
            
        `;
    }


    createRenderRoot() {
        return this;
    }


}

customElements.define('genk-poses', PosesComponent);