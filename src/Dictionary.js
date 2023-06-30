import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  //state
  const [keyWord, setKeyword] = useState("");

  // Function
  function search(event) {
    event.preventDefault();
    alert(keyWord);
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
