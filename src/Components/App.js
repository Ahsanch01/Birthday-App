import React from "react";
import { useState } from "react";
import List from "./List";
import data from "../data";
const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday </h3>
        <List data={people} />
        <button onClick={() => setPeople([])}> Clear All</button>
      </section>
    </main>
  );
};
export default App;
