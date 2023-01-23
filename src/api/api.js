export const api = {
    async search_users(searchstring) {
    const result = await fetch(`https://api.github.com/search/users?q=${searchstring}`)
    return await result.json()
  },
};
