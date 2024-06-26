import Pizzas from "./Pizzas";

export default function Menu() {
  return (
    <div>
      <div className="menu">
        <h2>our menu</h2>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
      </div>
      <div className="pizzas">
        <Pizzas
          name="Focaccia"
          url="./pizzas/focaccia.jpg"
          ingredients="Bread with italian olive oil and rosemary"
          price={6}
          soldOut={false}
        />

        <Pizzas
          name="Pizza Margherita"
          url="./pizzas/margherita.jpg"
          ingredients="Tomato and mozarella"
          price={10}
          soldOut={false}
        />

        <Pizzas
          name="Pizza Spinaci"
          url="./pizzas/spinaci.jpg"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price={12}
          soldOut={false}
        />

        <Pizzas
          name="Pizza Funghi"
          url="./pizzas/funghi.jpg"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
          soldOut={false}
        />

        <Pizzas
          name="Pizza Salamino"
          url="./pizzas/salamino.jpg"
          ingredients="Tomato, mozarella, and pepperoni"
          price={15}
          soldOut={true}
        />

        <Pizzas
          name="Pizza Prosciutto"
          url="./pizzas/prosciutto.jpg"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          soldOut={false}
        />
      </div>
    </div>
  );
}
