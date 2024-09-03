import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Total Employees",
          value: "20",
          text: "We have 12 with full privileges.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Todays Accesses",
          value: "30",
          text: "in more than 3 rooms",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Total rooms in the company ",
          value: "6",
          text: "Access Rooms during the day",
        }}
      />
    </section>
  );
};

export default AreaCards;
