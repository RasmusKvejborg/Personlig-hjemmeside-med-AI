const apiKey = require("./apikey.js");
const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
const port = process.env.PORT || 5000;

const openai = new OpenAI({ apiKey: apiKey });
let threadId; // Store the thread ID globally

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!!!! :)");
});

const assistantId = "asst_DmX0pcVFwjzOT6HSWN36vGxI";

// Endpoint to initialize a thread
app.post("/api/initThread", async (req, res) => {
  try {
    const thread = await openai.beta.threads.create();
    threadId = thread.id;
    res.json({ threadId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to initialize thread" });
  }
});

// Endpoint to send a message
app.post("/api/sendMessage", async (req, res) => {
  const { input } = req.body;

  if (!threadId) {
    return res.status(400).json({ error: "Thread ID is not available" });
  }

  try {
    // Add the user's input message to the thread
    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: input,
    });

    let assistantResponse = "";

    const run = openai.beta.threads.runs.stream(threadId, {
      assistant_id: assistantId,
    });

    run.on("textCreated", (text) => {
      // console.log("assistant >", text.value);
      // assistantResponse = text.value;
    });

    run.on("textDelta", (textDelta) => {
      assistantResponse += textDelta.value;
    });

    run.on("end", () => {
      1;
      res.json({ response: assistantResponse });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

//------------------------------------------------

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
