import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";



const Home = () => {
    return (
        <div>
            < Helmet >
                <title>Home</title>
            </Helmet >
            <Banner></Banner>
            <Cards></Cards>
            <Footer></Footer>
        </div>
    );
};

export default Home;