import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  searchNYT: terms => {
    // return axios.get({
    //   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    //     qs: {
    //       'api-key': "e87a45d844214a6e956e35d7e7aecd46",
    //       'q': "madonna",
    //       'begin_date': "19000101",
    //       'end_date': "20180101"
    //     }
    //   })
    console.log("searchNYT", terms)
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
    const key = "e87a45d844214a6e956e35d7e7aecd46"
    return axios.get(`${url}?api-key=${key}&q=${terms.topic}&begin_date=${terms.beginDate}&end_date=${terms.endDate}`)
    // return axios.get("https://dog.ceo/api/breeds/list")

  },

  getSavedArticles: () => {
    return axios.get("/saved-articles")
  }

    // return axios.get("https://dog.ceo/api/breeds/list")

  // //gets a single random dog
  // getRandomDog: function() {
  //   return axios.get("https://dog.ceo/api/breeds/image/random");
  // },
  // //probably used for searching for a particular breed
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  // //probably used for dropdown
  // getBaseBreedsList: function() {
  //   return axios.get("https://dog.ceo/api/breeds/list");
  // }
}

