import Pizzas from "./Pizzas";

export default function Menu() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

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
        {/* <Pizzas
          name="Focaccia"
          photoName="./pizzas/focaccia.jpg"
          ingredients="Bread with italian olive oil and rosemary"
          price={6}
          soldOut={false}
        />

        <Pizzas
          name="Pizza Margherita"
          photoName="./pizzas/margherita.jpg"
          ingredients="Tomato and mozarella"
          price={10}
          soldOut={false}
        />

        <Pizzas
          name="Pizza Spinaci"
          photoName="./pizzas/spinaci.jpg"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price={12}
          soldOut={false}
        />

        <Pizzas
          name="Pizza Funghi"
          photoName="./pizzas/funghi.jpg"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
          soldOut={false}
        />

        <Pizzas
          name="Pizza Salamino"
          photoName="./pizzas/salamino.jpg"
          ingredients="Tomato, mozarella, and pepperoni"
          price={15}
          soldOut={true}
        />

        <Pizzas
          name="Pizza Prosciutto"
          photoName="./pizzas/prosciutto.jpg"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          soldOut={false}
        /> */}

          {pizzaData.map( (pizza) => <Pizzas name={pizza.name} photoName={pizza.photoName} ingredients={pizza.ingredients} price={pizza.price} soldOut={pizza.soldOut} key={pizza.name} /> )}

      </div>
    </div>
  );
}
