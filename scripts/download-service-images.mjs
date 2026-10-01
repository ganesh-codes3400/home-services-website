import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const assetsDirectory = resolve(scriptDirectory, '../src/assets/services');
const photoIds = [
  '1502672260266-1c1ef2d93688',
  '1512917774080-9991f1c4c750',
  '1513694203232-719a280e022f',
  '1522708323590-d24dbb6b0267',
  '1545324418-cc1a3fa10c00',
  '1556909114-f6e7ad7d3136',
  '1558618666-fcd25c85cd64',
  '1560448204-e02f11c3d0e2',
  '1564013799919-ab600027ffc6',
  '1565608087341-404b25492fee',
  '1568605114967-8130f3a36994',
  '1570129477492-45c003edd2be',
  '1584622650111-993a426fbf0a',
  '1600210492486-724fe5c67fb0',
  '1600566753190-17f0baa2a6c3',
  '1600585154340-be6161a56a0c',
  '1600596542815-ffad4c1539a9',
  '1600607687939-ce8a6c25118c',
  '1613490493576-7fde63acd811',
  '1618221195710-dd6b41faaea6',
  '1621905251189-08b45d6a269e',
  '1621905252507-b35492cc74b4',
];

await mkdir(assetsDirectory, { recursive: true });

async function downloadAndOptimize(photoId) {
  const sourceUrl = `https://images.unsplash.com/photo-${photoId}?w=1920&q=90&fit=max&fm=jpg`;
  const response = await fetch(sourceUrl);

  if (!response.ok) {
    throw new Error(`Could not download Unsplash photo ${photoId}: HTTP ${response.status}`);
  }

  const source = Buffer.from(await response.arrayBuffer());
  const outputPath = resolve(assetsDirectory, `${photoId}.webp`);

  await sharp(source)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(outputPath);

  const { size } = await stat(outputPath);
  console.log(`${photoId}.webp (${Math.round(size / 1024)} KB)`);
}

for (let index = 0; index < photoIds.length; index += 4) {
  await Promise.all(photoIds.slice(index, index + 4).map(downloadAndOptimize));
}