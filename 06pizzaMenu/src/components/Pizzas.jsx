function Pizzas(props) {
  return (
    <div className={ props.soldOut ? "pizza sold-out":"pizza" }>
      <img src={props.url} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>    
    </div>
  );
}

export default Pizzas;
