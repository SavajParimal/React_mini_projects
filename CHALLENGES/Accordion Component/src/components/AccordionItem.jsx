function AccordionItem({ title, i, text, curOpen, setSeter }) {
  const seter = i === curOpen;

  return (
    <>
      <div
        className={seter ? "item open" : "item"}
        onClick={() => setSeter(seter ? null : i)}
      >
        <div className="number">{i + 1}</div>
        <div className="title">{title}</div>
        <div className="icon">{seter ? "-" : "+"}</div>
        {seter ? <div className="content-box">{text}</div> : <div></div>}
      </div>
    </>
  );
}

export default AccordionItem;
