// Jan.js (amero)
import { useState } from "react";
import ChatInterfaceAmero from "../components/ChatInterfaceAmero.js";

export function Jan() {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div>
      {showOverlay && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          flexDirection: "column",
          zIndex: 1000,
        }}>
          <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
            Amero knowledgebase v.2.0 kan findes på
            <br />
            <a href="https://chatgpt.com/g/g-67e64c8d7150819199f9fc74eeacdf2d-amero-ai-knowledge-database-v-2-0" 
               style={{ color: "#ffcc00", textDecoration: "underline" }}>
              denne side
            </a>
          </p>
          <button 
            onClick={() => setShowOverlay(false)} 
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#ffcc00",
              color: "black",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px"
            }}>
            Luk
          </button>
        </div>
      )}
      <ChatInterfaceAmero />
    </div>
  );
}
