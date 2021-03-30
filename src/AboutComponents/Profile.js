import profile from '../Shared/Images/portfolio-Convert.jpg'
import './certificates.css'

export const Profile = () => {
    return (
        <div className='mt-5 p-5'>
            {/* <div className="row justify-content-center"> */}
            {/* <div className="col-sm-12">
                    <div className="card nBack" >
                        <img src={profile} alt="" className="card-img-top round" />
                    </div>
                </div> */}
            {/* <div className="col-12 m-auto"> */}
            <div className="row justify-content-center mb-5">
                <div className="col-lg-4 col-md-4 col-10">
                    <div className="card nBack" >
                        <img src={profile} alt="" className="card-img-top round" />
                    </div>
                </div>
            </div>
            <p className="text-white text p-3">
                A software developer who is enthusiastic in developing applications, having expertise in full stack development.
                Web development is the love of my life, I dedicate most of my free time to developing angular and react applications as they make me feel like an artist.
                </p>
            {/* </div>
            </div> */}
        </div>
    )

}