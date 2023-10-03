# 🦙 Obsidian Ollama FR

fork de https://github.com/hinterdupfinger/obsidian-ollama

This is a plugin for [Obsidian](https://obsidian.md) that allows you to use [Ollama](https://ollama.ai) within your notes.
There are different pre configured promts:
    - generate an image https://localai.io/features/image-generation/
    - Summarize selection
    - Explain selection
    - Expand selection
    - Rewrite selection (formal)
    - Rewrite selection (casual)
    - Rewrite selection (active voice)
    - Rewrite selection (bullet points)
    - Caption selection

But you can also configure your own prompts, specify their model and temperature. The plugin always passes the prompt and either selected text or full note to Ollama and inserts the result into your note at the cursor position.

This requires a local installation of [Ollama](https://ollama.ai) which can currently be installed as a [MacOS app](https://github.com/jmorganca/ollama#download). By default the plugin will connect to `http://localhost:11434` - the port of the MacOS app.

# must improve prompt 
https://github.com/Kaludii/Stable-Diffusion-Prompt-Generator

https://github.com/jordip/prompt-generator-api

https://itnext.io/how-i-built-a-stable-diffusion-prompt-optimizer-using-openais-api-and-nextjs-bbb87f5b8de9

https://stablediffusionapi.com/docs/stable-diffusion-api/text2img/


# run Local AI
docker-compose up

# install model

curl http://localhost:8080/models/apply -H "Content-Type: application/json" -d '{
  "url": "github:go-skynet/model-gallery/stablediffusion.yaml"
}'

# test

# 512x512 is supported too
curl http://localhost:8080/v1/images/generations -H "Content-Type: application/json" -d '{
  "prompt": "A cute baby sea otter",
  "size": "256x256"
}'

or 

curl http://localhost:8080/v1/images/generations -H "Content-Type: application/json" -d '{
  "prompt": "floating hair, portrait, ((loli)), ((one girl)), cute face, hidden hands, asymmetrical bangs, beautiful detailed eyes, eye shadow, hair ornament, ribbons, bowties, buttons, pleated skirt, (((masterpiece))), ((best quality)), colorful|((part of the head)), ((((mutated hands and fingers)))), deformed, blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, poorly drawn hands, missing limb, blurry, floating limbs, disconnected limbs, malformed hands, blur, out of focus, long neck, long body, Octane renderer, lowres, bad anatomy, bad hands, text",
  "size": "256x256"
}'


https://www.alphr.com/obsidian-how-to-add-images/

Settings / Fichiers et leins Emplacement Nom du sous-dossier


 A voir pour avoir des images locales https://github.com/Sergei-Korneev/obsidian-local-images-plus