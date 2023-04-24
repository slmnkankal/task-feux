import React from "react";

const Main = () => {
  return (
    <div className="row main-container">
      <div className="col-md-6 px-2 d-flex">
        <picture>
          <source
            media="(min-width:650px)"
            srcSet="https://picsum.photos/id/233/600/400"
          />
          <source
            media="(max-width:649px)"
            srcSet="https://picsum.photos/id/235/600/400"
          />
          <img src="img_orange_flowers.jpg" alt="Flowers" />
        </picture>
      </div>
      <div className="col-md-6 px-2 d-flex flex-column">
        <h1 className="mt-5">Tagline</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id
          recusandae voluptatibus fuga nemo tempora vitae quaerat explicabo
          deserunt incidunt nisi saepe aspernatur ipsam, quam eveniet nam vero
          obcaecati commodi.
        </p>
      </div>
    </div>
  );
};

export default Main;
