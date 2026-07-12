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
    tiles: [
      { file: 'BIO Leather1.JPG' },
      { file: 'BIO Leather2.JPG' },
      { file: 'Material application.jpg' },
    ],
  },
  {
    id: 'row-ceramic',
    detailMode: 'row',
    tiles: [{ file: 'ceramic1.JPG' }, { file: 'ceramic2.JPG' }],
  },
];

export function biomaterialSrc(file) {
  return `${BIO_ASSET_BASE}/${encodeURIComponent(file)}`;
}

export function biomaterialDisplayName(file) {
  return file.replace(/\.[^.]+$/, '').toUpperCase();
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
