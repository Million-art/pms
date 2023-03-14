import Header from '../components/Header';
import Catagories from '../components/Catagories';
import Products from './Products';
import Footer from '../components/Footer';

export default function Home(){
    return (
        <div className="Home">
             <Header />
            <Catagories/>
            <Products/> 
             <Footer/>
        </div>
      );
}

 