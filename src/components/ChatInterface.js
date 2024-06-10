import React, { useState, useEffect, useRef } from "react";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);
  const [threadInitialized, setThreadInitialized] = useState(false);

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    // Call initThread only if thread isn't already initialized
    if (!threadInitialized) {
      console.log("ThREAD INIT");

      initializeThread();
    }
  }, [threadInitialized]); // Only run when threadInitialized changes

  async function initializeThread() {
    try {
      const response = await fetch("http://localhost:5000/api/initThread", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Thread initialized with ID:", data.threadId);
      setThreadInitialized(true);
    } catch (error) {
      console.error("Error initializing thread:", error);
    }
  }

  async function handleSend() {
    console.log("handlesend HER", JSON.stringify({ input }));
    if (input.trim() === "") return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input },
    ]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      console.log("Response from server:", data.response);

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Handle error, display error message to the user, etc.
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto  rounded-lg flex flex-col h-3/4">
      <div ref={chatBoxRef} className="flex-1 p-6 overflow-y-auto max-h-72">
        {/* {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 my-2 rounded-3xl ${
              msg.role === "user"
                ? "bg-[#2F2F2F] w-3/4 ml-auto"
                : "bg-transparent"
            }`}
          >
            {msg.content}
          </div>
        ))} */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start my-2 ${
              msg.role === "user" ? "justify-end" : ""
            }`}
          >
            {msg.role !== "user" && (
              <img
                src="/rasmus.jpg" // Replace with the actual path to the avatar image
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
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input box */}
      <div class="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#2F2F2F]">
        <div class="flex items-center gap-1.5 md:gap-2 min-w-0 flex-1">
          <input
            type="text"
            placeholder="Spørg min digtale kopi om noget..."
            class="resize-none w-full border-0 bg-transparent px-5 text-token-text-primary focus:ring-0 focus-visible:ring-0 max-h-[25dvh] max-h-52 h-10"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div class="flex flex-1 justify-end px-1">
            <button
              data-testid="fruitjuice-send-button"
              class="flex items-center justify-end h-8 w-8  rounded-full  text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary"
              onClick={handleSend}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
                class="icon-2xl "
              >
                {/* pil-ikonet */}
                <path
                  fill="#676767"
                  fill-rule="evenodd"
                  d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
