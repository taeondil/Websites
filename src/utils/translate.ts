export async function translateWord(word: string): Promise<string> {
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(word)}`
    );
    const data = await response.json();
    return data[0][0][0];
  } catch (error) {
    console.error('Translation error:', error);
    return word;
  }
}