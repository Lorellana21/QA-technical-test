import { css, html, LitElement } from "lit";
import { AllPosesUseCase } from "../usecases/all-poses.usecase";
import "../ui/poses.ui";

export class PosesComponent extends LitElement {
  static get properties() {
    return {
      poses: {
        type: Object,
        state: true,
      },
      title: { type: String },
      placeholder: { type: String }
    };
  }
  constructor() {
    super();
    this.title = "My list of poses";
    this.placeholder = "Filter by name";
  }
  static get styles() {
    return css`
      :host {
        width: 100%;
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
      .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
      }

    .filter__title {
        font-size: 1.5rem;
        color: #a349a4;
    }

    .filter__search {
        padding: 0.5rem;
        width: 8rem;
        border: 2px solid #ddd;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 11px 12px #bb13fe7a;
        background-color: #f8f8f8;
        outline: none;
        transition: all ease 0.3s;
    }

    .filter__search:focus {
            border-color: #a349a4;
            background-color: #fff;
        }
    .filter__search::placeholder {
            font-size: 0.9rem;
        }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    const allPosesUseCase = new AllPosesUseCase();
    this.poses = await allPosesUseCase.execute();
  }

  render() {
    return html` 
    <section className="filter">
      <h1 className="filter__title">${this.title}</h1>
      <form>
        <input
          className="filter__search"
          autoComplete="off"
          type="search"
          id="search"
          name="search"
          placeholder=${this.placeholder}
          onChange={handleInput}
        />
      </form>
  </section>
  <section class="poses__list">
  <poses-ui .poses="${this.poses}"></poses-ui> 
  </section>
  `;
        
  }

//   createRenderRoot() {
//     return this;
//   }
}

customElements.define("genk-poses", PosesComponent);
