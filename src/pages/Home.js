import ChatInterface from "../components/ChatInterface.js";

export function Home() {
  return (
    <div>
      <div className="py-5 min-h-screen">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
          <div className="mx-auto lg:mx-0">
            <p className="mb-8 text-lg text-center">
              Her er min digitale kopi. Spørg løs.
            </p>
          </div>
          <ChatInterface></ChatInterface>
          <p className="text-sm text-center mt-4 text-gray-400">
            NB! Den godtager kun specifikke spørgsmål om sig selv, og svarer
            ikke altid korrekt.
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
