import { Carousel } from "./Carousel";
import image1 from './Shared/Carousel/1.jpg'
import image3 from './Shared/Carousel/3.png'
const strArr = ['Hi !, I am Pavan Kumar Muntha...', 'A MERN stack developer...']
export const Home = () => {
    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="row">
                <div className="col-sm-12">
                    <Carousel images={[image1, image1]} strArr={strArr} />
                </div>
            </div>
        </div>
    )
}