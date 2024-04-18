const Room = ({ setIsModal, setIsStatus, number, status }) => {
  const handlePopupBooking = () => {
    setIsModal(true);
  };
  const handlePopupChangeStatus = (event) => {
    event.preventDefault();
    setIsStatus(true);
  };
  const renderColor = (status) => {
    return status == 0
      ? "#feffff"
      : status == 1
      ? "#1677fe"
      : status == 2
      ? "#fcdc2a"
      : "#d80032";
  };
  return (
    <>
      <div
        onClick={handlePopupBooking}
        onContextMenu={handlePopupChangeStatus}
        className="w-16 h-12 relative border-2 border-gray-950 rounded hover:cursor-pointer"
        style={{ backgroundColor: renderColor(status) }}
      >
        <div className="w-full ">
          <p className="text-xs right-1 absolute  font-mono text-gray-950 font-semibold">
            12:20
          </p>
        </div>
        <div className="flex justify-center items-center h-full  hover:rounded shadow-2xl  border rounded">
          <p className="text-xl  font-mono ">{number}</p>
        </div>
      </div>
    </>
  );
};

export default Room;
