export const InputForm = (props) => {

    if (props.input) {
        return (
            <div className="row justify-content-center">
                <form action="">
                    <div className="col-sm-12">
                        <input type="text" className="form-control" placeholder='Your Name' required id='name' />
                    </div>
                    <div className="col-sm-12 mt-3">
                        <input type="email" className="form-control" placeholder='Your email' required id='email' />
                    </div>
                    <div className="col-sm-12 mt-3">
                        <textarea name="text" className="form-control" required id="purpose" cols="30" rows="2" placeholder='Tell your purpose in few words...'></textarea>
                    </div>
                    <div className="col-sm-12 mt-3 text-center">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <div className=""></div>
        )
    }
} 