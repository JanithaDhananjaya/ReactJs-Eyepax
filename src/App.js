import './App.css';
import Carousel from "./components/Carousel/Carousel";

function App() {

    const style = {
        width: '100%',
        height: '1000px',
        margin: '0 auto'
    }

    return (
        <div style={style}>
            <Carousel slides={5} infinate="false"/>
        </div>
    );
}

export default App;
