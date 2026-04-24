export default function JobsTable({ jobs }) {
  return (
    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
      <h2 className="mb-3 font-semibold">Jobs</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-400">
            <th>Job</th>
            <th>Steps</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job, i) => (
            <tr key={i}>
              <td>{job.name}</td>
              <td>{job.steps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}