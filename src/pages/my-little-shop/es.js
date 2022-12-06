import React from "react"
import Nav from "../../components/NavEs"
import Seo from "../../components/seo"
import GoTop from "../../components/GoTop"
import { StaticImage } from "gatsby-plugin-image"

const Hector = () => {
    return (
        <div className="text-container">
            <Seo title="About Me" />
            <Nav />
            <StaticImage src="../../images/Resources/Pics/store-logo-esp.jpg" alt="wiisy-logo" className="header-img" /><br/>
            <p className="content-text">
                
                Colecciones <i>Nature Speaks</i> y <i>What If I Say Yes</i> de Lucía Cárdenas<br/><br/>
                Tarjetas con sobre (4.5 x 5.5 pulgadas)<br/><br/>
                $3.50 USD cada tarjeta (más costos de envío)<br/><br/>
                Para realizar pedidos enviar correo a: <a href="mailto:whatifisayyes2021@gmail.com" style={{wordBreak: "break-all"}}>whatifisayyes2021@gmail.com</a><br/><br/>
            </p>

            <StaticImage src="../../images/Resources/Pics/Store/1.jpg" alt="wiisy-logo" className="store-img" />
            <span className="store-text">
            #1 #2 #3 <br/>
            #4 #5 #6 <br/>
            #7 #8 #9 <br/>
            </span>
            <StaticImage src="../../images/Resources/Pics/Store/2.jpg" alt="wiisy-logo" className="store-img" />
            <span className="store-text">
            #10 #11 #12 <br/>
            #13 #14 #15 <br/>
            #16 #17 #18 <br/>
            </span>
            <StaticImage src="../../images/Resources/Pics/Store/3.jpg" alt="wiisy-logo" className="store-img" />
            <span className="store-text">
            #19 #20 #21 <br/>
            #22 #23 #24 <br/>
            #25 <br/>
            </span>
            <StaticImage src="../../images/Resources/Pics/Store/4.jpg" alt="wiisy-logo" className="store-img" />
            <span className="store-text">
            #26 #27 #28 <br/>
            #29 #30 #31 <br/>
            #32 #33 #34 <br/>
            </span>
            <StaticImage src="../../images/Resources/Pics/Store/5.jpg" alt="wiisy-logo" className="store-img" />
            <span className="store-text">
            #35 #36 #37 <br/>
            #38 #39 #40 <br/>
            #41 <br/>
            </span>
            <StaticImage src="../../images/Resources/Pics/Store/6.jpg" alt="wiisy-logo" className="store-img" />
            <span className="store-text">
            #42 #43 <br/>
            </span>
            <StaticImage src="../../images/Resources/Pics/Store/7.jpg" alt="wiisy-logo" className="store-img" />
            <span className="store-text">
            #44 #45 #46 <br/><br/>
            </span>
            <GoTop />
        </div>
    )
}

export default Hector;