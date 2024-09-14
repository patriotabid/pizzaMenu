import Pizza from "./pizza";
import pizzaData from "../../data.js";

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <>
        <p></p>

        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza data={pizza} key={pizza.photoName} />
          ))}
        </ul>
      </>
    </main>
  );
}

export default Menu;
