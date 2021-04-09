import Aos from "aos";
import React from "react";
import { blogItems } from "../Shared/blogitems";
import "./blog.css";
import { Welcome } from "./Welcome";

export const Blog = () => {
  const [items, setItems] = React.useState(blogItems);
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div id="Blog" data-aos="fade-up">
      <Welcome />
      <div class="container-fluid mt-5 mb-5 pb-5">
        <div className="row mt-4 mb-5">
          {items.map((i, index) => {
            return (
              <div className="col-lg-4 mt-2 mb-2 col-md-6 col-sm-12 p-5">
                <div
                  className="card trans cirl shd"
                  key={index}
                  onClick={() => {
                    window.open(i.link);
                  }}
                  data-aos="fade-right"
                >
                  <img src={i.image} alt="" className="card-img-top blog-img" />
                  <div className="card-body">
                    <div className="card-title">
                      <p className="text-white h5 und">
                        {i.name.split("").slice(0, 30).join("") + " ..."}
                      </p>
                    </div>
                    <div className="card-text">
                      <p className="text-white">
                        {i.description.split("").slice(0, 100).join("") +
                          " ..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
