export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '55304762d6mshb4544cccced84a6p17f0b7jsn16a0ba68844e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '55304762d6mshb4544cccced84a6p17f0b7jsn16a0ba68844e',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
