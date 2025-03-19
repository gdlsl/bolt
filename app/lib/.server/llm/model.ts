import { createOpenAI } from '@ai-sdk/openai';
 

export function getModel(env: Env) {
  const openai = createOpenAI({
    baseUrl: env.REACT_APP_LLM_BASE_URL,
    apiKey: env.REACT_APP_LLM_API_KEY,
  });
  return openai(env.REACT_APP_LLM_MODEL_NAME);
}