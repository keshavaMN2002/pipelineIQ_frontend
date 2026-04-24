function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-32 px-4">


      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Analyze your <br />
        <span className="text-blue-500">CI/CD</span> pipeline
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-400 max-w-xl">
        Paste your GitHub Actions or GitLab CI YAML and get instant insights,
        bottleneck detection, and an AI-optimized version.
      </p>

      {/* Card */}
      <div className="mt-10 w-full max-w-2xl 
        bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl">

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-4">
          <button className="flex-1 pb-2 text-blue-400 border-b-2 border-blue-500">
            Paste YAML
          </button>
          <button className="flex-1 pb-2 text-gray-400">
            Upload File
          </button>
        </div>

        {/* Textarea */}
        <textarea
          placeholder="# Paste your YAML here..."
          className="w-full h-40 p-4 rounded-lg bg-[#0f172a] border border-white/10 text-sm outline-none focus:border-blue-500"
        />

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">

          <button className="text-sm text-gray-400 hover:text-white">
            + Try Sample YAML
          </button>

          <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
            Analyze Pipeline →
          </button>

        </div>
      </div>
    </div>
  );
}