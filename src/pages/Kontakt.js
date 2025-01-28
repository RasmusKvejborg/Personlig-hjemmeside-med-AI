import { FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar.js";

export function Kontakt() {
  return (
    <div className="min-h-screen py-4 px-4 sm:px-40 bg-[#202123]">
      <Navbar />
      <div className="sm:flex sm:items-start sm:justify-between">
        <div className="sm:flex-auto">
          <div className="mt-10">
            <h1 className="text-base font-semibold leading-6 text-white">
              Kontaktinfo
            </h1>
            <p className="mt-2 text-sm text-white">
              Jeg kan kontaktes på rasmuskvejborg+web@gmail.com eller på +45 81
              2000 72
              <span className="relative group">
                <span className="ml-2 text-blue-500 cursor-pointer">ℹ️</span>
                <span className="absolute left-0 bottom-full mb-2 hidden w-40 p-2 text-xs text-white bg-gray-700 rounded group-hover:block">
                  "+web" i mailen kan undlades, det er blot for at tracke hvor
                  mine mails kommer fra.
                </span>
              </span>
            </p>
            <br></br>
            <p className="mt-2 text-sm text-white">
              Jeg bor på Grønnegade inde i Århus. Jeg er altid klar på en kop kaffe og en snak.
            </p>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/rasmuskvejborg" // Replace with your LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-0 sm:ml-10">
          <img
            src="/rasmus.jpg"
            alt="Rasmus Kvejborg"
            className="w-64 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
