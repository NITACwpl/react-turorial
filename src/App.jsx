function Square({ value }) {
  return <button className="square">1</button>;
}

export default function Board() {
  return (
    <>
      <div className="border-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="border-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="border-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}