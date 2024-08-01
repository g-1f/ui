import { BaseMessage, HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import { Message } from "@/app/action";

// Simulated system prompt
const systemPrompt = "You are a helpful AI assistant specializing in finance.";

// Simulated response generation
function generateSimulatedResponse(input: string): string {
  // This is a very basic simulation. In a real scenario, you'd want more sophisticated logic here.
  const responses = [
    "Based on recent market trends, the stock you mentioned has shown volatility.",
    "It's important to consider multiple factors when analyzing stock performance.",
    "Historical data suggests that this sector has been growing steadily.",
    "Remember to diversify your portfolio to manage risk effectively.",
    "Recent news about the company might impact its stock price in the short term."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

export async function runAgent(messages: BaseMessage[]) {
  const lastMessage = messages[messages.length - 1];
  const response = generateSimulatedResponse(lastMessage.content);

  // Simulate an event stream
  const eventStream = [
    { event: "on_llm_start", data: { name: "Simulated LLM" } },
    { event: "on_llm_stream", data: { chunk: { message: { content: response } } } },
    { event: "on_llm_end", data: { output: response } }
  ];

  // Return an async generator to mimic the original function's behavior
  return (async function* () {
    for (const event of eventStream) {
      yield event;
    }
  })();
}

// Convert messages to the format expected by the frontend
export const convertMessages = (messages: Message[]): BaseMessage[] => {
  return messages.map((message) => {
    switch (message.role) {
      case "system":
        return new SystemMessage(message.content);
      case "user":
        return new HumanMessage(message.content);
      case "assistant":
        return new AIMessage(message.content);
      default:
        throw new Error(`Unsupported message role: ${message.role}`);
    }
  });
};