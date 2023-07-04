import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary(props) {
  //state
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  // Function
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    //Calling API
    // documentation : https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiURL).then(handleResponse);
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
          <form onSubmit={handelSubmit}>
            <input type="search" onChange={handelSearch} />
          </form>
          <div className="hint">Suggested words: yoga, wine, sunset...</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
