import { OllamaSettings } from "model/OllamaSettings";

export const DEFAULT_SETTINGS: OllamaSettings = {
  ollamaUrl: "http://localhost:8080/v1/images/generations",
  commands: [
    {
      name: "Generate an image",
      prompt:
        "A cute baby sea otter.",
      model: "stablediffusion", // not used by localai
      size: "256x256"
    },
    {
      name: "Summarize selection",
      prompt:
        "Act as a writer. Summarize the text in a view sentences highlighting the key takeaways. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2",
    },
    {
      name: "Explain selection",
      prompt:
        "Act as a writer. Explain the text in simple and concise terms keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2",
    },
    {
      name: "Expand selection",
      prompt:
        "Act as a writer. Expand the text by adding more details while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2",
    },
    {
      name: "Rewrite selection (formal)",
      prompt:
        "Act as a writer. Rewrite the text in a more formal style while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2",
    },
    {
      name: "Rewrite selection (casual)",
      prompt:
        "Act as a writer. Rewrite the text in a more casual style while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2",
    },
    {
      name: "Rewrite selection (active voice)",
      prompt:
        "Act as a writer. Rewrite the text in with an active voice while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2",
    },
    {
      name: "Rewrite selection (bullet points)",
      prompt:
        "Act as a writer. Rewrite the text into bullet points while keeping the same meaning. Output only the text and nothing else, do not chat, no preamble, get to the point.",
      model: "llama2",
    },
    {
      name: "Caption selection",
      prompt:
        "Act as a writer. Create only one single heading for the whole text that is giving a good understanding of what the reader can expect. Output only the caption and nothing else, do not chat, no preamble, get to the point. Your format should be ## Caption.",
      model: "llama2",
    },
  ],
};
