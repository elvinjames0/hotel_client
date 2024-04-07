import Room from "./room";

const TypeRoom = ({ type, price, quantity, setIsModal, setIsStatus }) => {
  const handleRender = (number) => {
    const rooms = [];
    for (let i = 0; i < number; i++) {
      rooms.push(<Room setIsModal={setIsModal} setIsStatus={setIsStatus} />);
    }
    return rooms;
  };
  return (
    <div>
      <h1 className="text-xl font-bold font-sans">
        {type} ( {price} )
      </h1>
      <div className=" grid grid-cols-10 gap-5 mt-3">
        {handleRender(quantity)}
      </div>
    </div>
  );
};

export default TypeRoom;
