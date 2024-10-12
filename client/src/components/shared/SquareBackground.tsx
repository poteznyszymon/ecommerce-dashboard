const SquareBackground = () => {
  return (
    <div
      className="absolute inset-0 bg-repeat bg-center"
      style={{
        backgroundImage: `
    linear-gradient(to right, rgba(199, 210, 254, 0.1) 2px, transparent 2px),
    linear-gradient(to bottom, rgba(199, 210, 254, 0.1) 2px, transparent 2px)
  `,
        backgroundSize: "20px 20px",
      }}
    />
  );
};

export default SquareBackground;
