import { css, html, LitElement } from "lit";
import { AllPosesUseCase } from "../usecases/all-poses.usecase";
import "../ui/poses.ui";
import { FilterPosesUseCase } from "../usecases/filter-poses.usecase";

export class PosesComponent extends LitElement {
  static get properties() {
    return {
      posesOriginal: {
        type: Array,
        state: true,
      },
      posesFiltered: {
        type: Array,
        state: true,
      },
      title: { type: String },
      placeholder: { type: String },
      favoriteTitle: { type: String },
      searchText: {
        type: String,
      },
    };
  }
  constructor() {
    super();
    this.title = "My list of poses";
    this.placeholder = "Filter by name";
    this.favoriteTitle = "My Yoga session";
  }
  //lo quito para que me coja los estilos aqui
  // createRenderRoot() {
  //   return this;
  // }
  static get styles() {
    return css`
      :host {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        
      }
      .filter {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        padding-bottom: 0.5rem;
      }

      .filter__title {
        font-size: 1.5rem;
        color: var(--color-primary);
      }

      .filter__search {
        padding: 0.5rem;
        margin-bottom: 0.8rem;
        width: 8rem;
        border: 2px solid var(--color-primary);
        border-radius: 0.5rem;
        box-shadow: 0px 0px 11px 12px #bb13fe7a;
        background-color: var(--color-primary);
        outline: none;
        transition: all ease 0.3s;
      }

      .filter__search:focus {
        border-color: var(--color-secondary-links);
        background-color: var(--button-background);
        color: var(--color-primary);
      }
      .filter__search::placeholder {
        font-size: 0.9rem;
      }
      .wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .poses__list {
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        justify-content: space-between;
        width: 35%;
        margin-left: 1rem;
      }
      .favorites {
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        align-items: center;
        width: 60%;
        height: 500px;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 5px 5px var(--color-primary);
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      .favorites__title {
        font-size: 1.5rem;
        color: var(--color-primary);
      }
      .button {
        --button-color: var(--color-basic-positive);
        --button-border-color: var(--color-primary-light);
        --button-background: var(--color-strength);

        min-width: 8rem;
        height: 2.5rem;
        padding: 0 1.25rem;
        cursor: pointer;
        border-radius: 1rem;
        border: 0.4em solid var(--button-border-color);
        color: var(--button-color);
        background: var(--button-background);
        transition: all 0.35s ease;
      }
      span {
        font-size: 1rem;
        color: var(--color-primary);
      }
      .button:hover {
        --button-color: var(--color-primary-dark-extra);
        --button-border-color: var(--color-primary-dark-extra);
        --button-background: var(--color-primary-light);
      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    const allPosesUseCase = new AllPosesUseCase();
    this.posesOriginal = await allPosesUseCase.execute();
    this.posesFiltered = [...this.posesOriginal];
  }

  searchPoses() {
    const searchText = this.shadowRoot.querySelector("#searchText").value;
    console.log("searchText", searchText);
    const filterPosesUseCase = new FilterPosesUseCase();
    this.posesFiltered = filterPosesUseCase.execute(
      this.posesOriginal,
      searchText
    );
  }

  render() {
    return html`
      <section class="poses-component">
        <article class="filter">
          <h2 class="filter__title">${this.title}</h2>
          <input
            class="filter__search"
            type="search"
            id="searchText"
            aria-label="Filter Input"
            placeholder=${this.placeholder}
          />
          <button
            class="button"
            aria-label="Search Poses"
            @click="${this.searchPoses}"
          >
            <span>Search</span>
          </button>
        </article>
      </section>
      <div class="wrapper">
        <section class="poses__list">
          <poses-ui .poses="${this.posesFiltered}"></poses-ui>
        </section>
        <section class="favorites">
          <header class="favorites__header">
            <h2 class="favorites__title">${this.favoriteTitle}</h2>
            <button
              class="button"
              id="button"
              aria-label="Search Poses"
              @click="${this.reset}"
            >
              <span>Reset</span>
            </button>
          </header>
          <article>
            <ul class="favorites__list"></ul>
          </article>
        </section>
      </div>
    `;
  }
}

customElements.define("genk-poses", PosesComponent);
