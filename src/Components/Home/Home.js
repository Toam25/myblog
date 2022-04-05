import './Home.css'
function Home() {
    return (
        <section className="home" id="home">
            <div className="container">
                <div className="home-all-content">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content">
                                <h5>WELCOME TO MY WORLD</h5>
                                <h1>Bonjour, Je m'appel Rakotoarimanana Rado Nirina <br />
                                    <span id="type1">a developpeur</span>
                                </h1>
                                <a href="#" className="btn btn-hero">Mon blogs</a>
                                <a href="#" className="btn btn-hero">Télécharger mon CV</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-img">
                                <img src="http://localhost/wordpres/wordpress/wp-content/themes/portfoliox/assets/img/hero.png" alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home