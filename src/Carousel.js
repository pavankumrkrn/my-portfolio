import { AppendTalk } from "./TalkingComponents/appendTalk";
export const Carousel = (props) => {
  return (
    <div
      id="carouselExampleCaption"
      className="carousel shd slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={props.images[0]} className="d-block w-100 car" alt="" />
          <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
            <p className="display-4 resp">
              <AppendTalk text={props.strArr[0]} />
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={props.images[1]} className="d-block w-100 car" alt="" />
          <div className="carousel-caption d-flex h-100 align-items-center justify-content-center">
            <p className="display-4 resp">
              <AppendTalk text={props.strArr[1]} />
            </p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaption"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaption"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
