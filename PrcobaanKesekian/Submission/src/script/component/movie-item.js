class MovieItem extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(255, 99, 71, 0.5);
          border-radius: 10px;
          overflow: hidden;
        }
        .profil-movie {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }
        .movie-info {
          padding: 24px;
        }
        .movie-info > h2 {
          font-weight: lighter;
        }
        .movie-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>
      
      <img class="profil-movie" src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" alt="Profil">
      <div class="movie-info">
        <h2>${this._movie.title}</h2>
        <p>${this._movie.origin_country}</p>
      </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);