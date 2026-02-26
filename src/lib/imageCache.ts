// Global base64 cache for all product images
const cache = new Map<string, string>();

export async function cacheImage(url: string): Promise<void> {
  if (cache.has(url)) return;
  
  // Skip data URIs — already inline
  if (url.startsWith('data:')) {
    cache.set(url, url);
    return;
  }

  const isExternal = url.startsWith('http://') || url.startsWith('https://');

  // For local images, fetch directly (same origin, no CORS issues)
  if (!isExternal) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const blob = await res.blob();
        const b64 = await blobToBase64(blob);
        cache.set(url, b64);
        return;
      }
    } catch { /* fall through */ }
  }

  // For external images, use proxy to avoid CORS
  if (isExternal) {
    try {
      const res = await fetch('/api/proxy-image?url=' + encodeURIComponent(url));
      if (res.ok) {
        const blob = await res.blob();
        const b64 = await blobToBase64(blob);
        cache.set(url, b64);
        return;
      }
    } catch { /* fall through */ }
  }

  // Fallback: direct fetch
  try {
    const res = await fetch(url, { mode: 'cors' });
    if (res.ok) {
      const blob = await res.blob();
      const b64 = await blobToBase64(blob);
      cache.set(url, b64);
      return;
    }
  } catch { /* fall through */ }

  // Last resort: draw to canvas
  try {
    const b64 = await drawToCanvas(url);
    cache.set(url, b64);
  } catch { /* give up */ }
}

export function getCachedImage(url: string): string | undefined {
  return cache.get(url);
}

export function getAllCached(): Map<string, string> {
  return cache;
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function drawToCanvas(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.naturalWidth || 128;
      c.height = img.naturalHeight || 128;
      const ctx = c.getContext('2d');
      if (!ctx) return reject('no ctx');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, 0, 0);
      resolve(c.toDataURL('image/png'));
    };
    img.onerror = () => reject('load fail');
    img.src = url;
  });
}
