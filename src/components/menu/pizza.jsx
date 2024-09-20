function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null; // this called "early return"

  return (
    <li className={`pizza ${pizzaObj.soldOut && "pizza sold-out"}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
