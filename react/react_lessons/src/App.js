import './App.css'
import Actor from "./components/Actor";
import Users from "./components/Users";



const actors = [
    {
        id: 1,
        name: 'Tom',
        img: 'https://img2.freepng.ru/20180326/wpw/kisspng-tom-cat-jerry-mouse-tom-and-jerry-cartoon-tom-jerry-5ab96b0e3c69e1.5469460515221010062475.jpg'
    },
    {
        id: 2,
        name: 'Jerry',
        img: 'https://w7.pngwing.com/pngs/276/41/png-transparent-jerry-jerry-mouse-tom-cat-tom-and-jerry-tom-and-jerry-television-mammal-heroes.png'
    },
    {
        id: 3,
        name: 'Legs',
        img: 'https://static.wikia.nocookie.net/tomandjerry/images/0/0d/Mammytwoshoes-1-.jpg'
    },
    {
        id: 4,
        name: 'Spike',
        img: 'https://static.wikia.nocookie.net/tomandjerry/images/0/0f/Quiz-tom-jerry-richtig-03-1035-10110.png'
    }
]

function App() {
    return (
        <div>
            {/*{actors.map(actor => <Actor key ={actor.id} name={actor.name} img={actor.img}/>)}*/}
            <Users/>
        </div>
    );
}

export default App;
