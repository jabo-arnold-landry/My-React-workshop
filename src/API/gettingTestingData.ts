async function fetchingData<T>(
  url: string,
  abortSignal: AbortController,
): Promise<T> {
  const response = await fetch(url, { signal: abortSignal.signal });
  const data = await response.json();
  return data;
}

export default fetchingData;
