import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "./seo"

const Home = () => {
    return (
        <div id="content-page">
            <Seo title="Página Principal" />
            <div className="flag-container" id="header">
                <Link style={{ color: 'black' }} to="/"><StaticImage src="../images/Resources/Icons/united-states.png" alt="us-flag" className="flag"/></Link>
            </div>
            {/* <div className="flag-container" id="header">
                <Link style={{ color: 'black' }} to="/es"><StaticImage src="../images/Resources/Icons/mexico.png" alt="mexico-flag" className="flag"/></Link>
            </div> */}

            <div className="section-container">
                <Link to="/my-little-shop/es"><StaticImage src="../images/Resources/Pics/store-logo-esp.jpg" alt="wiisy" className="home-img" /></Link>
                <p className="container-text">¡Bienvenidos/as!</p>
            </div>

            <div className="section-container">
                <Link to="/what-if-i-say-yes/es"><StaticImage src="../images/Resources/Icons/logo-final-es.jpg" alt="wiisy" className="home-img" /></Link>
                <Link style={{ color: 'black' }} to="/what-if-i-say-yes/es"><h2>¿Y si digo que sí?</h2></Link>
                <p className="container-text">Lean aquí el texto original de mi hermano, que me dio la idea para crear este sitio web.</p>
            </div>
            
            <div className="section-container">
                <Link to="/about-me/es"><StaticImage src="../images/Resources/Pics/210.JPEG" alt="about-me" className="home-img" /></Link>
                <Link style={{ color: 'black' }} to="/about-me/es"><h2>Acerca de mí</h2></Link>
                <p className="container-text">¡Hola! Mi nombre es Lucía Cárdenas. Denle click <Link style={{ color: 'black' }} to="/about-me/es">aquí</Link> para que se enteren de por qué decidí crear este sitio web.</p>
            </div>

            <div className="section-container">
                <Link to="/blog/es"><StaticImage src="../images/Resources/Pics/503.jpg" alt="blog" className="home-img" /></Link>
                <Link style={{ color: 'black' }} to="/blog/es"><h2>Blog</h2></Link>
                <p className="container-text">Aquí verán cómo yo le he dicho que <b>¡sí!</b> a la vida. Entren, lean e inspírense para empezar a hacer lo suyo.</p>
            </div>

            <div className="section-container" id="contact-me">
                <Link to="/contact/es"><StaticImage src="../images/Resources/Pics/181.JPEG" alt="contact-me" className="home-img" /></Link>
                <Link style={{ color: 'black' }} to="/contact/es"><h2>Contáctenme</h2></Link>
                <p className="container-text">Soy toda oídos. ¿Me mandan sus preguntas y comentarios?</p>
            </div>            
        </div>
    )
}

export default Home;

