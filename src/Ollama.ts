import { kebabCase } from "service/kebabCase";
import { Editor, Notice, Plugin, requestUrl } from "obsidian";
import { OllamaSettingTab } from "OllamaSettingTab";
import { DEFAULT_SETTINGS } from "data/defaultSettings";
import { OllamaSettings } from "model/OllamaSettings";

export class Ollama extends Plugin {
  settings: OllamaSettings;

  async onload() {
    await this.loadSettings();
    this.addPromptCommands();
    this.addSettingTab(new OllamaSettingTab(this.app, this));
  }

  private addPromptCommands() {
    this.settings.commands.forEach((command) => {
      this.addCommand({
        id: kebabCase(command.name),
        name: command.name,
        editorCallback: (editor: Editor) => {
          const selection = editor.getSelection();
          const text = selection ? selection : editor.getValue();

          const cursorPosition = editor.getCursor();

          editor.replaceRange("✍️", cursorPosition);
          const headers = {
            "Content-Type": "application/json"
          }
          requestUrl({
            method: "POST",
            //url: `${this.settings.ollamaUrl}/api/generate`,
            url: "http://localhost:8080/v1/images/generations",
            body: JSON.stringify({
              prompt: text,
              size: "256x256"
              //  prompt: command.prompt + "\n\n" + text,
              // model: command.model,
              // options: {
              //   temperature: command.temperature || 0.2,
              // },
            }),
            headers: headers
          })
            .then((response) => {
              console.log("LocalAI response", response)

              const json = response.json

              console.log("json",json)
              const data = json.data
              console.log("data",data)
              const zero = data[0]
              console.log("zero", zero)
              const replacement = /*text +*/ '\n![' + text + '](' + zero.url + ')\n'
              console.log(replacement)
              // const steps = response.text
              //   .split("\n")
              //   .filter((step) => step && step.length > 0)
              //   .map((step) => JSON.parse(step));

              // editor.replaceRange(
              //   steps
              //     .map((step) => step.response)
              //     .join("")
              //     .trim(),
              //   cursorPosition,
              editor.replaceRange(
                replacement,
                // steps
                //   .map((step) => step.response)
                //   .join("")
                //   .trim(),
                cursorPosition,
                {
                  ch: cursorPosition.ch + 1,
                  line: cursorPosition.line,
                }
              );
            })
            .catch((error) => {
              new Notice(`Error while generating text: ${error.message}`);
              editor.replaceRange("", cursorPosition, {
                ch: cursorPosition.ch + 1,
                line: cursorPosition.line,
              });
            });
        },
      });
    });
  }

  onunload() { }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
