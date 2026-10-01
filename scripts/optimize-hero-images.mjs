import sharp from 'sharp';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const assetsDirectory = resolve(scriptDirectory, '../src/assets');
const bannerFiles = [
  'waterprroftoproofbanner.png',
  'houseinteriorandexteriorbanner.png',
  'electricalbanner.png',
  'housemarblesbanner.png',
  'dryimage.png',
  'dryimage1.png',
  'dryimage2.png',
  'waterproofabout1.png',
  'aboutinteriorandexterior.png',
  'aboutelectricalimage.png',
  'abouthousetailsandstonesimage.png',
  'allmiximage.png',
];

await Promise.all(
  bannerFiles.map(async (fileName) => {
    const inputPath = resolve(assetsDirectory, fileName);
    const outputPath = resolve(assetsDirectory, fileName.replace(/\.png$/i, '.webp'));

    await sharp(inputPath)
      .rotate()
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(outputPath);
  }),
);