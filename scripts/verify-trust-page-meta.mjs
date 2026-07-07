// Verifies the 5 trust page meta lengths after manual editing.
import { readFile } from 'node:fs/promises';

const pages = [
  { name: 'About', path: 'app/about/page.tsx' },
  { name: 'Contact (layout)', path: 'app/contact/layout.tsx' },
  { name: 'Privacy Policy', path: 'app/privacy-policy/page.tsx' },
  { name: 'Terms of Service', path: 'app/terms-of-service/page.tsx' },
  { name: 'Disclaimer', path: 'app/disclaimer/page.tsx' },
];

for (const p of pages) {
  const raw = await readFile(p.path, 'utf8');
  const titleMatch = raw.match(/title:\s*"([^"]+)"/);
  const descMatch = raw.match(/description:\s*\n?\s*"([^"]+)"/);
  const title = titleMatch?.[1] ?? '';
  const desc = descMatch?.[1] ?? '';
  const tOk = title.length >= 50 && title.length <= 65;
  const dOk = desc.length >= 150 && desc.length <= 160;
  const dashCheck = !/[—–]/.test(title) && !/[—–]/.test(desc);
  console.log(p.name);
  console.log('  Title (' + title.length + ', ' + (tOk ? 'OK' : 'FAIL') + '): ' + title);
  console.log('  Desc  (' + desc.length + ', ' + (dOk ? 'OK' : 'FAIL') + '): ' + desc);
  console.log('  Em/en dash: ' + (dashCheck ? 'CLEAN' : 'FAIL'));
  console.log('');
}
