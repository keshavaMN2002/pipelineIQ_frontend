export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 px-6 mt-4">
      <div className="flex justify-between items-center px-6 py-3 
        bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg">

        <div className="flex items-center gap-2 font-semibold">
          PipelineIQ
        </div>

        <div className="px-4 py-1 text-sm rounded-full bg-blue-500/10 border border-blue-500/20">
          CI/CD Optimizer
        </div>
      </div>
    </div>
  );
}