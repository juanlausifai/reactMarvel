export async function getHeroes(startIndex = 0, amount = 20, searchText = "") {
    let postFix = "";
    if (searchText) {
      postFix = `&nameStartsWith=${searchText}`;
    }
  
    return fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=1f8617b0107bd7fb18974d1d05c648df&offset=${startIndex}&limit=${amount}${postFix}`
    )
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .catch((e) => console.error(e));
  }