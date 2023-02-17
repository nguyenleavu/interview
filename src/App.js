import './App.css';
import Cart from './components/Cart/Cart';

function App() {
    return (
        <div className='app'>
            <div className='app_banner'>
                <div className='app_banner_item'>Wellcome to SolBuzz</div>
            </div>
            <h3>Explore</h3>
            <div className='app_cart'>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
                <Cart />
            </div>
        </div>
    );
}

export default App;
