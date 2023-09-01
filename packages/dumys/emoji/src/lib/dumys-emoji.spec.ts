import axios from 'axios';
import EmojiPlugin from './dumys-emoji';

jest.mock('axios');

describe('EmojiPlugin', () => {
  it('should retrieve emoji character', async () => {
    const mockApiResponse = {
      data: [
        {
          character: '👋',
        }
      ]
    };

    jest.spyOn(axios, 'get').mockResolvedValue(mockApiResponse);

    const plugin = new EmojiPlugin();

    const input = {
      key: 'your-api-key',
      slug: 'e0-6-waving-hand',
    };

    const output = await plugin.execute(input);

    expect(output.character).toBe(mockApiResponse.data[0].character);
  });

  it('should throw an error when key is missing', async () => {
    const plugin = new EmojiPlugin();

    const input = {
      key: '',
      slug: 'e0-6-waving-hand',
    };

    await expect(plugin.execute(input)).rejects.toThrow("Input 'key' is required.");
  });

  it('should throw an error when input is missing', async () => {
    const plugin = new EmojiPlugin();

    await expect(plugin.execute()).rejects.toThrow('Input is required.');
  });
});
