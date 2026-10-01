const imageUrls = import.meta.glob('../assets/services/*.webp', {
  eager: true,
  import: 'default',
  query: '?url',
});

export function getServiceImage(photoId) {
  const imagePath = `../assets/services/${photoId}.webp`;
  const imageUrl = imageUrls[imagePath];

  if (!imageUrl) {
    throw new Error(`Missing local service image: ${photoId}.webp`);
  }

  return imageUrl;
}