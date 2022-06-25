import React from "react";

const Home = () => {

    return(<div className="textHome" style={{height: "100%" ,background:'#fafafa' , margin:"40", padding:"5" }} >
        <h2 style={{textAlign:"center" }}>Welcome to our MiniShop</h2>
        <div className="parag" style={{ marginTop:"40", padding:"5" }}>
        <p>
    *This E-commerce site was made using a fake API from <a href="https://www.escuelajs.co">EscuelaJS</a>.{<br/>}
    *As a mock project to practice front-end development using React. 
    </p>
    <p>*You can explore the site by selecting a button from the navigation bar.{<br/>}
    *You can also check <a href="https://github.com/Recoded-BPRM-Turkey-FEW-2022/react-ecommerce-abanon">source code on GitHub </a> 
     *If you are interested in the technical stuff!.{<br/>}
     *External links to the creators of this project were added to the footer. Enjoy your time {":)"}
    </p>
    </div>
    </div>)
}
export default Home;