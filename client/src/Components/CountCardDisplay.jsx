import CountCard from "./CountCard";

function CountCardDisplay({ header, count, icon, isPercentage }) {
  return (
    <div className="card bg-greyish-100 shadow-xl h-24 w-48 border-b-8 border-greenish-100 flex items-center justify-between p-4">
      <figure>
        <img className="w-10 h-10" src={icon} alt="Icon" />
      </figure>
      <div className="text-right">
        <CountCard
          className="text-sm sm:text-base md:text-lg lg:text-xl"
          header={header}
          finalCount={count}
          isPercentage={isPercentage}
        />
      </div>
    </div>
  );
}

export default CountCardDisplay;
