import axios from 'axios';

export async function fetchTransaction(tx: string) {
  try {
    const response = await axios.get('https://api.solscan.io/v2/transaction-v2', {
      params: {
        tx: tx
      },
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'zh-CN,zh;q=0.9,zh-HK;q=0.8',
        'If-None-Match': 'W/"638e-cDkJvbmYyp5Ov8C+E+voODNN9sg"',
        'Origin': 'https://solscan.io',
        'Referer': 'https://solscan.io/',
        'Sec-Ch-Ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Sol-Aut': 'ClfB9dls0fKA0AzZlEQP5vHzF6N7N4Ll86XVbzlT',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(`请求失败: ${error}`);
  }
}
