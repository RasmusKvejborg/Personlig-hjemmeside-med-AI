// ChatinterfaceAmero.js
import React, { useState, useEffect, useRef } from "react";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  // Scroll automatisk til bunden af beskedboksen, når beskeder opdateres
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  // Funktion til at sende besked til API'et
  async function handleSend() {
    if (input.trim() === "") return; // Undgå at sende tomme beskeder

    // Tilføj brugerens besked til chatten
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input },
    ]);

    const userInput = input; // Gem inputtet
    setInput(""); // Ryd input-feltet
    setLoading(true); // Start loading


    try {
      // Send brugerens besked til API'et
      const response = await fetch(
        "https://aws-rag-app-928714419274.us-central1.run.app/submit_query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query_text: userInput }),
        }
      );

      if (!response.ok) {
        throw new Error("Fejl ved kontakt til API'et");
      }

      const data = await response.json();
      console.log(data)

      // Tilføj API'ets svar til chatten
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: data.answer_text }, // Brug API'ets svar
      ]);
    } catch (error) {
      console.error("Fejl ved afsendelse:", error);

      // Tilføj fejlbesked til chatten
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: "Der opstod en fejl. Prøv igen senere.",
        },
      ]);
    } finally {
      setLoading(false); // Stop loading, når API'et har svar
    }
  }

  // Håndter Enter-tastens tryk
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
      {/* Chat box */}
      <div
        ref={chatBoxRef}
        className="flex-1 p-6 overflow-y-auto mb-4"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start my-2 ${
              msg.role === "user" ? "justify-end" : ""
            }`}
          >
            {msg.role !== "user" && (
              <img
                src="/amero.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full mr-1 mt-1"
              />
            )}
            <div
              className={`p-3 rounded-3xl ${
                msg.role === "user"
                  ? "bg-[#2F2F2F] w-3/4 ml-auto"
                  : "bg-transparent"
              }`}
              style={{ whiteSpace: "pre-line" }} // Bevar linjeskift
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input field */}
      <div className="sticky bottom-0 flex flex-col gap-1.5 rounded-[26px] p-1.5 bg-[#2F2F2F] mb-6">
        <div className="flex items-center gap-1.5 min-w-0">
          <input
            type="text"
            placeholder="Skriv et problem f.eks 'Betalingsterminalen svarer ikke...'"
            className="resize-none w-full border-0 bg-transparent px-5 text-white focus:ring-0 focus-visible:ring-0 max-h-[25dvh] h-10"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="flex flex-1 justify-end px-1">
            <button
              className={`flex items-center justify-end h-8 w-8 rounded-full text-white ${
                loading ? '' : 'transition-colors hover:opacity-70'
              }`}              
              onClick={handleSend}
              disabled={loading} // Deaktiver knappen, når loading

            >
{loading ? (
      <svg
        className="animate-spin h-8 w-8 text-white"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M16 4a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm0 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 0 32 32"
        className="icon-2xl"
      >
        <path
          fill="#676767"
          fillRule="evenodd"
          d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
          clipRule="evenodd"
        ></path>
      </svg>
    )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}