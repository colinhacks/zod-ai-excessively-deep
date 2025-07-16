import { tool } from "ai";
import { z } from "zod";

const classifyAccount = tool({
  description: "Analyze account",
  inputSchema: z.object({
    projectProbability: z.number().min(0).max(1).describe("test"),
    humanProbability: z.number().min(0).max(1).describe("test"),
    reason: z.string().describe("test"),
  }),
});
