import Navbar from "../components/Navbar.js";


export function Home() {
  return (
    <div>
      <div className="py-5 min-h-screen">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
        <Navbar />
        <br></br>
        <p className="text-lg text-gray-600">
              Softwareudvikler & AI-entusiast bosiddende i Århus
            </p>
          {/* <div className="flex justify-center py-10">
            <img
              src="/rasmus.jpg"
              alt="Rasmus Kvejborg"
              className="w-64 h-auto"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
