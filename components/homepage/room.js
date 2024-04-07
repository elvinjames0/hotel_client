const Room = ({ setIsModal, setIsStatus }) => {
  const handlePopupBooking = () => {
    setIsModal(true);
  };
  const handlePopupChangeStatus = (event) => {
    event.preventDefault();
    setIsStatus(true);
  };
  return (
    <>
      <div
        onClick={handlePopupBooking}
        onContextMenu={handlePopupChangeStatus}
        className="w-16 h-12 relative border-2 border-gray-950 rounded hover:cursor-pointer"
        style={{ backgroundColor: "#1677ff" }}
      >
        <div className="w-full ">
          <p className="text-xs right-1 absolute  font-mono text-gray-950 font-semibold">
            12:20
          </p>
        </div>
        <div className="flex justify-center items-center h-full hover:bg-blue-800 hover:rounded shadow-2xl border-blue-900 border rounded">
          <p className="text-xl  font-mono text-white">101</p>
        </div>
      </div>
    </>
  );
};

export default Room;
