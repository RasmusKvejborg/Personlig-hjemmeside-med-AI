import { config } from "dotenv";
config();
import { OpenAI } from "openai";
import readline from "readline";

const openai = new OpenAI({ apiKey: process.env.API_KEY });
const assistantId = "asst_DmX0pcVFwjzOT6HSWN36vGxI";

//--------------------------------------------------------------------------------------------

let thread;
let messages = [];

async function initializeThread() {
  thread = await openai.beta.threads.create();
}
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();
userInterface.on("line", async (input) => {
  messages.push({ role: "user", content: input });
  const contextMessages = messages.slice(-4); // 4 user-assistant pairs for at spare tokens

  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: input,
  });

  const run = openai.beta.threads.runs
    .stream(thread.id, {
      assistant_id: assistantId,
    })
    .on("textCreated", (text) => process.stdout.write("\nassistant > "))
    .on("textDelta", (textDelta, snapshot) =>
      process.stdout.write(textDelta.value)
    ); // der var en masse on toolCallCreated etc også taget fra documentationen
  userInterface.prompt();
});

initializeThread().then(() => {
  userInterface.prompt();
});

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// det her er for at bruge API'et med den defaulte chat i terminalen
// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let messages = [];

// userInterface.prompt();
// userInterface.on("line", async (input) => {
//   messages.push({ role: "user", content: input });
//   const contextMessages = messages.slice(-4); // 4 user-assistant pairs for at spare tokens

//   const res = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: contextMessages,
//   });
//   const assistantMessage = res.choices[0].message.content;
//   console.log(assistantMessage);
//   messages.push({ role: "assistant", content: assistantMessage });
//   userInterface.prompt();
// });
