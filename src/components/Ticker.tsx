import TickerItem, { TickerItemProps } from "./TickerItem";

interface TickerProps {
  tickers: TickerItemProps[];
}

const Ticker: React.FC<TickerProps> = ({ tickers }) => {
  return (
    <section className="bg-primary">
      <div className="flex overflow-x-auto flex-row mx-auto items-center justify-center py-4">
        {tickers.map((ticker, index) => (
          <TickerItem key={index} {...ticker} />
        ))}
      </div>
    </section>
  );
};

export default Ticker;
