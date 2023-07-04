import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  //states
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  // Function
  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //Calling API
    // documentation : https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiURL).then(handleDictionResponse);

    //documentation : https://www.pexels.com/api/documentation/#photos-overview
    let pexelsApiKey =
      "ulbhjfPhskoRxh2yypfbGjD8MCoPWQ7OLXetSVywChGGdKLMG28SvC1O";

    const headers = {
      "Content-Type": "application/json",
      Authorization: pexelsApiKey,
    };
    const url = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    axios.get(url, { headers }).then(handlePexelsResponse); //Calling photo api
  }

  function handelSubmit(event) {
    event.preventDefault();
    search();
  }

  function handelSearch(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handelSubmit}>
            <input
              type="search"
              defaultValue={props.defaultKeyword}
              onChange={handelSearch}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
