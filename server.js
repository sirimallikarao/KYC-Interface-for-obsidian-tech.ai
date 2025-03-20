import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = createServer(async (req, res) => {
  try {
    let filePath;
    if (req.url === '/') {
      filePath = 'index.html';
    } else {
      filePath = req.url.slice(1);
    }

    const contentType = filePath.endsWith('.js') ? 'text/javascript' : 'text/html';
    const content = await readFile(join(__dirname, filePath), 'utf-8');
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    res.writeHead(500);
    res.end('Internal Server Error');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});