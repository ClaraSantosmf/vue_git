export const api = {
  async search_repo(username, page) {
    if (!page) {
        page = 1;
    }
    const result = await fetch(
      `https://api.github.com/users/${username}/repos?page=${page}`
    );
    return await result.json();
  },
  async search_users(searchstring) {
    const result = await fetch(
      `https://api.github.com/search/users?q=${searchstring}`
    );
    return await result.json();
  },
};
