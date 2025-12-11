export async function fetchPhrase() {
  try {
    // Use a relative path so the dev server proxy (vite) can forward the request
    // to the external API and avoid CORS while developing.
    const res = await fetch('/api/phrase');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    // Try to detect if the response is JSON, otherwise return text
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const json = await res.json();
      // Expect json to be { phrase: '...', author: '...' } or similar
      return json;
    }

    // Fallback: text response. The API might sometimes return a JSON-like string.
    const txt = (await res.text()).trim();
    if (txt.startsWith('{')) {
      try {
        return JSON.parse(txt);
      } catch (_) {
        // invalid JSON — return raw string
      }
    }
    return { phrase: txt, author: null };
  } catch (err) {
    console.error('fetchPhrase error', err);
    return null;
  }
}
