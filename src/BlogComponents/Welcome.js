import { Carousel } from "../Carousel"

import p1 from '../Shared/Images/download.jpg'
import p2 from '../Shared/Images/c2.jpg'


const strArr = ['Find different tech related articles here.', 'Feel free to browse them.']
export const Welcome = () => {
    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-xl-5 col-lg-12 col-sm-12 p-5">
                    <p className="display-4 text-white">
                        Welcome to my Blog
                    </p>
                </div>
                <div className="col-xl-5 col-lg-12 col-sm-12 offset-xl-2 mt-auto mb-auto">
                    <Carousel images={[p2, p2]} strArr={strArr} />
                </div>
            </div>
        </div>
    )
}