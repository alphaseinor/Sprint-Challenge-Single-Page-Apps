import React, { useState } from "react";

export default function SearchForm(props) {
  //console.log(props)
  const [newQuery, setNewQuery] = useState("")

  //handle submit

  const handleSubmit = submit => {
    submit.preventDefault();
    props.query(newQuery)
    setNewQuery("")
  }
  
  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Search By Name</label>
        <input 
          id="query"
          value={newQuery}
          name="search"
          type="text"
          onChange={e=> setNewQuery(e.target.value)}
        />
        <button type="sumbit">Search</button>
      </form>
    </section>
  );
}
