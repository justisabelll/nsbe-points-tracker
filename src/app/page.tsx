export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 ">
        <div className="pb-6">
          <h1 className="text-5xl font-bold">PV NSBE Points Tracker</h1>
          <a
            href="/login"
            className=" text-sm font-medium leading-none hover:underline hover:text-purple-600"
          >
            E-Board Login
          </a>
        </div>
        <div className="pt-4 flex flex-col ">
          <a
            href="/point-viewer"
            className=" scroll-m-20 text-4xl   lg:text-5xl hover:underline hover:text-purple-600"
          >
            View Your Points
          </a>
          <a
            href="/sumbission"
            className=" text-4xl lg:text-5xl hover:underline hover:text-purple-600"
          >
            Event Code Submission
          </a>
        </div>
      </div>
    </div>
  );
}
