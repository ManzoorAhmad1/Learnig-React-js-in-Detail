import { useState } from "react";

const StateComponent = (props) => {
    const [color, setColor] = useState("red")
    const [model, setModel] = useState("BMW")
    const [car, setCar] = useState({
        name: "Suzuki",
        color: "yellow",
        price: `${1450}`,
        country: "Pakistan"
    })
    const [showData, setShowData] = useState(false)
    const changingHandler = () => {
        setColor("blue");
        setModel("Farari")
        setCar(previousData => {
            return { ...previousData, color: "red" }
        })
        setShowData(true)
    }
    return (
        <div>
            <h1>A new car {model} and his color is {color}</h1>
            <h1>A new Car {car.name} and his color is {car.color}. Its price is {car.price}.It made in {car.country}</h1>
            {showData && <h1>add condition with useState Hook</h1>}
            <button onClick={changingHandler}>changeing</button>
        </div>
    )
}
export default StateComponent;