import Hero from "./Hero";

const FofView = () => {
    return(
      <div>
        <Hero text="404"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                404 Page not found
              </p>
            </div>

          </div>



        </div>
      </div>
    )
    }

export default FofView;