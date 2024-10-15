interface InfoTilesSkeleton {
  numberOfTiles: number;
}

const InfoTilesSkeleton = ({ numberOfTiles }: InfoTilesSkeleton) => {
  const listToIterateOver = new Array(numberOfTiles).fill(0);

  return (
    <>
      {listToIterateOver.map((_, idx) => (
        <div
          key={idx}
          className="bg-background h-40 border shadow-sm p-5 flex flex-col justify-between animate-pulse"
        >
          <div className="flex justify-between">
            <div className="w-24 h-4 bg-secondary" />
            <div className="size-4 rounded-full bg-secondary" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-16 h-4 bg-secondary" />
            <div className="w-28 h-4 bg-secondary" />
          </div>
        </div>
      ))}
    </>
  );
};

export default InfoTilesSkeleton;
