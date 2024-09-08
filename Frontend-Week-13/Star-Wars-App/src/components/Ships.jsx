import ShipCard from "./ShipCard";

function Ships({ships}) {
  return (
    <section className="ship-list">
      {ships?.map((ship) => {
        return <ShipCard key={ship.name} ship={ship} />;
      })}
    </section>
  )
}
export default Ships

