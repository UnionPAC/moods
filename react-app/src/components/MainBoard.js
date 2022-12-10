import Pin from "./Pin";

const MainBoard = ({ pins }) => {
  return (
    <div className="flex w-full h-full mt-[15px] justify-center">
      <div className="text-center mx-auto max-w-[80%] h-full columns-1 xsm:columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6">
        {pins.map((pin, index) => {
          let {
            urls: { regular },
          } = pin;
          return <Pin key={index} urls={regular} />;
        })}
      </div>
    </div>
  );
};

export default MainBoard;
