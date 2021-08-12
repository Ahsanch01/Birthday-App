import React from "react";

function List({ data }) {
  return (
    <>
      {data.map((d) => {
        const { id, name, image, age } = d;
        return (
          <article key={d.id} className="person">
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age} Years</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
