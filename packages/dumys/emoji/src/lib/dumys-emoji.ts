import axios from 'axios';

const DEFAULT_SLUG = 'e0-6-waving-hand';

class EmojiPlugin implements PluginInstance<EmojiInputs, EmojiOutputs> {
  async execute(input?: EmojiInputs): Promise<EmojiOutputs> {
    if (!input) {
      throw new Error("Input is required.");
    }

    const { key, slug } = input;

    if(!key || !key.length){
      throw new Error("Input 'key' is required.")
    }

    const response = await axios.get<ApiResponse[]>(`https://emoji-api.com/emojis/${slug ?? DEFAULT_SLUG}?access_key=${key}`);

    if (!response.data || response.data.length === 0) {
      throw new Error("Emoji data not found.");
    }

    return { character: response.data[0].character };
  }
}

interface PluginInstance<InputType = unknown, OutputType = unknown> {
  execute(input?: InputType): Promise<OutputType>;
}

interface EmojiInputs {
  key: string;
  slug?: string;
}

interface EmojiOutputs {
  character: string;
}

interface ApiResponse {
  character: string;
}

export default EmojiPlugin;
