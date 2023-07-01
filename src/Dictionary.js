import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  //state
  const [keyWord, setKeyword] = useState("");

  // Function
  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //Calling API
    // documentation : https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handelSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handelSearch} />
      </form>
    </div>
  );
}
