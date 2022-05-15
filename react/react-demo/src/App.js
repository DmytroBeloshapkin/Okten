import './App.css';
import SimpsonComponent from "./components/simpsonComponent";

function App() {

    return (
        <div className="wrap">
            <SimpsonComponent itemName={'Bart'}
            pic={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            />
            <SimpsonComponent itemName={'Homer'}
            pic={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}

            />
            <SimpsonComponent itemName={'Lisa'}
            pic={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}

            />


        </div>
    );
}

export default App;
