export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-lg font-semibold text-gray-200">Loading ...</p>
      </div>
    </div>
  );
}
