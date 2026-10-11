import { spawn } from 'node:child_process';
import http from 'node:http';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 9222;

async function run() {
  const chromeProcess = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--disable-gpu',
    '--no-sandbox',
    'about:blank'
  ]);

  let versionData = null;
  for (let i = 0; i < 30; i++) {
    try {
      versionData = await new Promise((resolve, reject) => {
        const req = http.get(`http://127.0.0.1:${PORT}/json/version`, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(JSON.parse(data)));
        });
        req.on('error', reject);
      });
      break;
    } catch (e) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const testUrls = [
    '/budget-planner-template/',
    '/budget-templates/',
    '/zh/templates/'
  ];

  const viewports = [320, 360, 375, 390, 412, 492, 768, 1024, 1440];
  let overallPassed = true;

  for (const urlPath of testUrls) {
    console.log(`\n========================================`);
    console.log(`Testing page: ${urlPath}`);
    console.log(`========================================`);

    const newPageData = await new Promise((resolve, reject) => {
      const req = http.request(`http://127.0.0.1:${PORT}/json/new?http://localhost:4321${urlPath}`, { method: 'PUT' }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      });
      req.on('error', reject);
      req.end();
    });

    const ws = new WebSocket(newPageData.webSocketDebuggerUrl);
    let msgId = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && callbacks.has(data.id)) {
        const { resolve, reject } = callbacks.get(data.id);
        callbacks.delete(data.id);
        if (data.error) reject(data.error);
        else resolve(data.result);
      }
    };

    await new Promise(resolve => ws.onopen = resolve);

    function send(method, params = {}) {
      const id = msgId++;
      return new Promise((resolve, reject) => {
        callbacks.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await new Promise(r => setTimeout(r, 2000));

    for (const width of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width,
        height: 900,
        deviceScaleFactor: 1,
        mobile: width < 768
      });

      await new Promise(r => setTimeout(r, 250));

      const evalResult = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const clientWidth = document.documentElement.clientWidth;
            const scrollWidth = document.documentElement.scrollWidth;

            const overflowing = [];
            for (const el of document.querySelectorAll('*')) {
              const rect = el.getBoundingClientRect();
              if (el.tagName === 'PRE') continue;
              if (rect.right > clientWidth + 0.5) {
                overflowing.push({
                  tag: el.tagName,
                  id: el.id,
                  right: Math.round(rect.right),
                  width: Math.round(rect.width),
                  text: (el.textContent || '').slice(0, 30).trim().replace(/\\s+/g, ' ')
                });
              }
            }

            return {
              clientWidth,
              scrollWidth,
              hasOverflow: scrollWidth > clientWidth,
              overflowing
            };
          })()
        `,
        returnByValue: true
      });

      const res = evalResult.result.value;
      const passed = !res.hasOverflow && res.overflowing.length === 0;
      if (!passed) overallPassed = false;

      console.log(`  Viewport ${width}px: clientWidth=${res.clientWidth}px, scrollWidth=${res.scrollWidth}px -> ${passed ? '✓ PASS' : '✗ FAIL'}`);
      if (res.overflowing && res.overflowing.length > 0) {
        for (const item of res.overflowing.slice(0, 3)) {
          console.log(`    overflow element: <${item.tag} id="${item.id}"> right:${item.right} w:${item.width} text:"${item.text}"`);
        }
      }
    }

    ws.close();
  }

  chromeProcess.kill();
  console.log(`\nOVERALL STATUS: ${overallPassed ? 'ALL PAGES & VIEWPORTS PASSED!' : 'FAILURES OCCURRED'}`);
  process.exit(overallPassed ? 0 : 1);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
