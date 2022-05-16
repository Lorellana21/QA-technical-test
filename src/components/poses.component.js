import { css, html, LitElement } from "lit";
import { AllPosesUseCase } from "../usecases/all-poses.usecase";
import "../ui/poses.ui";
import { FilterPosesUseCase } from "../usecases/filter-poses.usecase";


export class PosesComponent extends LitElement {
  static get properties() {
    return {
      poses: {
        type: Object,
        state: true,
      },
      title: { type: String },
      placeholder: { type: String },
      favoriteTitle: { type: String}
    };
  }
  constructor() {
    super();
    this.title = "My list of poses";
    this.placeholder = "Filter by name";
    this.favoriteTitle = "My Yoga session";
  }
  static get styles() {
    return css`
      :host {
        width: 100%;
         display: flex;
        flex-direction: row;
      }
      .filter {
    display: flex;
    flex-flow: column wrap;
    /* justify-content: space-between;
    align-items: center; */
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
      }

    .filter__title {
        font-size: 1.5rem;
        color: var(--color-primary);
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
      .poses__list{
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        justify-content: space-between;
      }
      .favorites{
        width: 60%;
        height: auto;
        border: solid 4px white;
        margin-left: 2rem;
      }
      .favorites__title{
        font-size: 1.5rem;
        color: var(--color-primary);

      }
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    const allPosesUseCase = new AllPosesUseCase();
    this.poses = await allPosesUseCase.execute();
    this.firstUpdated();
  }
  
  //intento con firstupdated
  // firstUpdated(){
  //   const searchText = this.querySelector("#searchText").value;
  //   console.log("hola");
  //   const filterPosesUseCase = new FilterPosesUseCase();
  //   this.poses = filterPosesUseCase.execute(this.poses, searchText)

  // }
  
  searchPoses(){
    // console.log("hola");
    const searchText = this.shadowRoot.querySelector("#searchText").value;
    const filterPosesUseCase = new FilterPosesUseCase();
    this.poses = filterPosesUseCase.execute(this.poses, searchText)
    
  }
//no tiene que ser asincrono
  // async searchPoses(){
  //   const searchText = this.shadowRoot.querySelector("#searchText").value;
  //   const filterPosesUseCase = new FilterPosesUseCase();
  //   this.poses = await filterPosesUseCase.execute(this.poses, searchText)
  // }

  render() {
    return html` 
    <section class="filter">
      <h2 class="filter__title">${this.title}</h2>
      <article>
        <input
          class="filter__search"
          autoComplete="off"
          type="text"
          id="searchText"
          aria-label="Filter Input"
          name="search"
          placeholder=${this.placeholder}
        >
        <button aria-label="Search Poses" @click="${this.searchPoses}">Refresh</button>
  </article>
  </section>
  <section class="poses__list">
  <poses-ui .poses="${this.poses}"></poses-ui> 
  
  </section>
  <section class="favorites">
  <h2 class="favorites__title">${this.favoriteTitle}</h2>
  </section>
  `;
        
  }

  // createRenderRoot() {
  //   return this;
  // }

}

customElements.define("genk-poses", PosesComponent);
