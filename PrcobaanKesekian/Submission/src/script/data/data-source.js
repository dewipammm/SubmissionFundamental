class DataSource {
  static searchMovie(keyword) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=bf8878f9a17b856739270352ebc0ceef&query=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results.length !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}
 
export default DataSource;