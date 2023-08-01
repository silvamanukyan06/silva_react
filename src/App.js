import logo from './logo.svg';
import './App.css';

function App() {
    const names = [
        {
            name: "John",
            surname: "Doe",
            age: 47,
            r: 172,
            g: 214,
            b: 199
        },
        {
            name: "Jane",
            surname: "Smith",
            age: 28,
            r: 203,
            g: 185,
            b: 220
        },
        {
            name: "Alice",
            surname: "Johnson",
            age: 33,
            r: 225,
            g: 253,
            b: 241
        },
        {
            name: "Bob",
            surname: "Brown",
            age: 65,
            r: 248,
            g: 192,
            b: 255
        },
        {
            name: "Charles",
            surname: "Davis",
            age: 50,
            r: 215,
            g: 234,
            b: 255
        },
        {
            name: "Eve",
            surname: "White",
            age: 70,
            r: 234,
            g: 250,
            b: 210
        },
        {
            name: "Mallory",
            surname: "Harris",
            age: 38,
            r: 255,
            g: 244,
            b: 172
        },
        {
            name: "Sam",
            surname: "Clark",
            age: 80,
            r: 190,
            g: 200,
            b: 253
        },
        {
            name: "Trudy",
            surname: "Thompson",
            age: 15,
            r: 233,
            g: 222,
            b: 171
        },
        {
            name: "Oscar",
            surname: "Anderson",
            age: 95,
            r: 199,
            g: 204,
            b: 251
        }
    ]



    return (
        names.map(x => <div style={{ display: "flex" }}>
            <div style={{ border: "1px solid black", width: "100px", height: "30px", padding: "5px" }}>{x.name} </div>
            <div style={{ border: "1px solid black", width: "100px", height: "30px", padding: "5px" }}>{x.surname} </div>
            <div style={{ border: "1px solid black", width: `${x.age}px`, backgroundColor: `rgb(${x.r},${x.g},${x.b},)` }}>{x.age} </div>


        </div>)



    );
}

export default App;
