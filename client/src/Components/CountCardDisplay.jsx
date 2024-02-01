import CountCard from "./CountCard";

function CountCardDisplay({ header, count, icon, isPercentage }) {
    return (
        <div className="card bg-greyish-100 shadow-xl h-64 border-b-8 border-greenish-100">
            <figure>
                <div className="flex flex-col items-center justify-center h-screen">
                    <img className="w-10 h-10" src={icon}></img>
                    {/* TODO: Completed Data Count */}
                    <CountCard
                        className="text-sm sm:text-base md:text-lg lg:text-xl"
                        header={header}
                        finalCount={count}
                        isPercentage={isPercentage}
                    />
                </div>
            </figure>
        </div>
    );
}

export default CountCardDisplay;
