export const getPix = async (query) => {
  const cached = localStorage.getItem(query);

  if (cached) {
    return JSON.parse(cached);
  }

  try {
    const url = `https://pixabay.com/api/?key=52395410-7bac2aabc55e9acf9ad5e8961&q=${encodeURIComponent(
      query
    )}&image_type=photo&per_page=50`;

    const response = await fetch(url);
    const data = await response.json();
    console.log("Total hits:", data.totalHits);

    localStorage.setItem(query, JSON.stringify(data.hits));
    return data.hits;
  } catch (error) {
    console.error("Error fetching from Pixabay:", error);
    return [];
  }
};
