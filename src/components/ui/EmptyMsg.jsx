import { Button } from "./Buttotn";

const EmptyMsg = ({ onClick, filter }) => {
  let title = "No tasks yet";
  let subtitle =
    "Create your fist task to get started with organizing your work";
  let icon = "📄";

  if (filter && filter == "completed") {
    title = "There is no compelted tasks yet";
    subtitle = "Create your fist task and start completing trip";
    icon = "📄";
  } else if (filter && filter == "active") {
    title = "There is no active tasks yet";
    subtitle = "Create your fist task to activate it";
    icon = "📄";
  }
  return (
    <div className="bg-white/90 text-center py-10 px-20 rounded-2xl border-2 shadow-2xl border-gray-300 border-dashed  flex flex-col items-center">
      <span className="text-7xl ">{icon}</span>
      <p className="text-3xl py-4 font-semibold text-gray-800">{title}</p>
      <p className="text-gray-400 text-lg font-normal mb-4">{subtitle}</p>
      <div className="pb-6">
        <Button title={"Create New Task"} icon={"➕"} onClick={onClick} />
      </div>
    </div>
  );
};

export default EmptyMsg;
