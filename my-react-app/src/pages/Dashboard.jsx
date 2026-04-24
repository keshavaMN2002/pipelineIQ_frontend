import { useLocation } from "react-router-dom";
import SummaryCards from "../components/SummaryCards";
import JobsTable from "../components/JobsTable";
import Issues from "../components/Issues";
import Suggestions from "../components/Suggestions";

export default function Dashboard() {
  const { state } = useLocation();

  if (!state) return <div className="pt-32 text-center">No Data</div>;

  return (
    <div className="pt-28 px-6">

      <SummaryCards data={state} />

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <JobsTable jobs={state.jobs} />
        <Issues issues={state.issues} />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Suggestions title="Suggestions" data={state.suggestions} />
        <Suggestions title="AI Suggestions" data={state.ai_suggestions} />
      </div>

    </div>
  );
}