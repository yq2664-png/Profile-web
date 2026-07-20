const BIO_ASSET_BASE = '/assets/BIo material';

export const biomaterialGalleryFiles = [
  'Bio yarn.jpg',
  'Bio plastic.jpg',
  'BIO Leather1.JPG',
  'BIO Leather2.JPG',
  'Material application.jpg',
  'ceramic1.JPG',
  'ceramic2.JPG',
];

export const biomaterialIndexRows = [
  {
    id: 'row-yarn-plastic',
    detailMode: 'tile',
    tiles: [
      { file: 'Bio yarn.jpg', tileId: 'bio-yarn' },
      { file: 'Bio plastic.jpg', tileId: 'bio-plastic' },
    ],
  },
  {
    id: 'row-leather-application',
    detailMode: 'row',
    detailCaption: {
      title: 'BIO LEATHER',
      materials: 'Agar · Gelatin · Glycerin · Water',
    },
    tiles: [
      { file: 'BIO Leather1.JPG' },
      { file: 'BIO Leather2.JPG' },
      { file: 'Material application.jpg' },
    ],
  },
  {
    id: 'row-ceramic',
    detailMode: 'row',
    detailCaption: {
      title: 'BIO CERAMIC',
      materials: 'Water · Gelatin · Eggshell powder',
    },
    tiles: [{ file: 'ceramic1.JPG' }, { file: 'ceramic2.JPG' }],
  },
];

export function biomaterialSrc(file) {
  return `${BIO_ASSET_BASE}/${encodeURIComponent(file)}`;
}

export function biomaterialDisplayName(file) {
  const baseName = file.replace(/\.[^.]+$/, '');
  const numberedMatch = baseName.match(/^(.+?)(\d+)$/);
  const bioPrefix = baseName.toLowerCase().startsWith('ceramic') ? 'Bio ' : '';

  if (numberedMatch) {
    return `${bioPrefix}${numberedMatch[1].trim()} · ${numberedMatch[2]}`.toUpperCase();
  }

  return `${bioPrefix}${baseName}`.toUpperCase();
}

export function biomaterialMaterials(file) {
  const materialsByFile = {
    'Bio yarn.jpg': 'Glycerin · Sodium alginate · Water · Calcium chloride',
    'Bio plastic.jpg':
      'Glycerin · Sodium alginate · Water\nSunflower oil · Calcium chloride',
    'BIO Leather1.JPG': 'Agar · Gelatin · Glycerin · Water',
    'BIO Leather2.JPG': 'Agar · Gelatin · Glycerin · Water',
    'Material application.jpg': 'Agar · Gelatin · Glycerin · Water',
    'ceramic1.JPG': 'Water · Gelatin · Eggshell powder',
    'ceramic2.JPG': 'Water · Gelatin · Eggshell powder',
  };

  return materialsByFile[file] ?? '';
}

export function biomaterialLightboxItems(tiles, sharedDetailCaption) {
  return tiles.map((tile) => {
    const title = biomaterialDisplayName(tile.file);
    const materials = sharedDetailCaption?.materials ?? biomaterialMaterials(tile.file);

    return {
      src: biomaterialSrc(tile.file),
      alt: title,
      caption: materials ? `${title}\n${materials}` : title,
    };
  });
}

export function getBiomaterialRowById(id) {
  return biomaterialIndexRows.find((row) => row.id === id) ?? null;
}

export function getBiomaterialDetailFromHash(hashId) {
  if (!hashId) {
    return null;
  }

  const rowDetail = biomaterialIndexRows.find((row) => row.id === hashId && row.detailMode === 'row');
  if (rowDetail) {
    return { row: rowDetail, tiles: rowDetail.tiles };
  }

  for (const row of biomaterialIndexRows) {
    if (row.detailMode !== 'tile') {
      continue;
    }

    const tile = row.tiles.find((item) => item.tileId === hashId);
    if (tile) {
      return { row, tiles: [tile] };
    }
  }

  return null;
}

export const biomaterialMarqueeImages = biomaterialGalleryFiles.map(biomaterialSrc);
