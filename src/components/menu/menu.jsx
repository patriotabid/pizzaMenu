import Pizza from "./pizza";
import pizzaData from "../../data.js";

function Menu() {
  const pizzasLength = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzasLength > 0 ? (
        <>
          <p>All from our stone oven, all organic, all delicious.</p>
          <ul className="pizzas">
            {pizzaData.map((pizzaObj) => (
              <Pizza pizzaObj={pizzaObj} key={pizzaObj.photoName} />
            ))}
          </ul>{" "}
        </>
      ) : (
        <p>All pizzas are sold :)</p>
      )}
    </main>
  );
}

export default Menu;
