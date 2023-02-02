// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  result: string[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let words: string[] = ["大親友", "パスタ", "連れ", "彼女", "俺", "女", "タイプ"];
  const randomized: string[] = getWordArray(words);
  const message: string[] = [randomized[0] + "の" + randomized[1] + "の" + randomized[2], "美味しい" + randomized[3] + "作ったお前", "家庭的な" + randomized[4] + "が" + randomized[5] + "の" + randomized[6] + "　一目惚れ"]
  res.status(200).json({ result: message })
}

function getWordArray(words: string[]): string[] {
  for (let i = words.length - 1; i > 0; i--) {
    let j: number = Math.floor(Math.random() * (i + 1));
    let temp: string = words[i];
    words[i] = words[j];
    words[j] = temp;
  }
  
  return words;
}