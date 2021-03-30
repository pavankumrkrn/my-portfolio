import "./main.css";
import React from "react";
import { InputForm } from "./InputForm";

export const Main = () => {
    const [input, showInput] = React.useState(false)

    const change = () => {
        showInput(!input)
    }

    return (
        <div className="card shd sticky-top topCard position-absolute position-fixed" data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500">
            <div className="card-body">
                {/* <div className="card-title">
                    <p className="text-center text-white">
                        <b>
                            Contact Me
                           </b>
                    </p>
                </div>
                <hr className='aboutHr' /> */}
                <p className="text-white text-center">
                    <i class="fas fa-id-card fa-3x cur" onClick={change}></i>
                </p>

                <InputForm input={input} />
            </div>
        </div>
    )
}