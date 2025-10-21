import { Mastra } from "@mastra/core/mastra";
import { weatherAgent } from "./agents/weather-agent";
 
export const mastra = new Mastra({
  agents: { weatherAgent },
  bundler: {
    externals: ['@mastra/loggers','@mastra/loggers/http', '@mastra/libsql']
  }
});
