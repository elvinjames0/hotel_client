import dynamic from "next/dynamic";
const CalendarDynamic = dynamic(() => import("../components/calendar"), {
  ssr: false,
});
const Calendar = () => {
  return (
    <div className="p-5">
      <CalendarDynamic />
    </div>
  );
};

export default Calendar;
