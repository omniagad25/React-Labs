import './Hero.css';

function Hero(props) {
  const  name = props.name
  return (
    <div>
    <section id="home">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 custom-col">
                <h1 class="display-3">
                    {name}
                </h1>
                <p class="lead">ITI Trainee.</p>
                <div class="d-flex">
                    <a href="#portfolio" class="btn btn-outline-dark mr-3 p-2" id="contact">Contact Me</a>

                </div>
            </div>
        </div>
    </div>
  </section>
  </div>
  );
}

export default Hero;