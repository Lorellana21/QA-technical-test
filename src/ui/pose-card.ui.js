import { css, html, LitElement } from "lit";

export class PoseCardUI extends LitElement {
    

  static get styles() {
    return css`
      .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        border: solid white 2px;
        width: 200px;
        height: 210px;
        //animation: tracking-in-expand 3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        /* width: 12rem;
        height: 20rem;  */
      }
      .subtitle {
        font-weight: 600;
        padding: 0.5rem 0;
        color: white;
        margin-bottom: -1rem;
      }
      .size--l {
        font-size: 1.5em;
        font-weight: 900;
      }
      .size--m {
        font-size: 1em;
        font-weight: 700;
      }
      .highlight {
        display: flex;
        flex-direction: column-reverse;
        max-width: 400px;
        padding: 0 1rem 2rem 1rem;
        
      }
      .highlight:last-child {
        margin-right: auto;
      }
      .highlight__header {
        display: flex;
        flex-direction: column-reverse;
      }

      .highlight__figure {
        position: relative;
      }
      .highlight__img {
        display: block;
        width: 100%;
        height: auto;
        order: 1px solid #f1f1f1;
      }

      .highlight__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* order: -1; */
        padding: 1rem 0;
        border-bottom: 1px solid grey;
      }

      .highlight__author {
        font-size: 0.75rem;
      }
      @keyframes tracking-in-expand {
        0% {
          letter-spacing: -0.5em;
          opacity: 0;
        }
        40% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }

    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <article class="highlight">
          <header class="highlight__header">
            <h2 class="title size--l">
                sanskrit name
              </a>
            </h2>
            <p class="subtitle size--m">
              english name
            </p>
          </header>
          <figure class="highlight__figure">
            <img
              class="highlight__img"
              loading="lazy"
              src="https://picsum.photos/400/200?random=1"
              alt="Yoga pose"
            />
          </figure>
          <footer class="highlight__footer">
            <address class="highlight__author">Drop here</address>
          </footer>
        </article>
      </div>
    `;
  }

//   createRenderRoot() {
//     return this;
//   }
}

customElements.define("pose-card", PoseCardUI);
