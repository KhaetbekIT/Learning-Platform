export const useURLSearchParams = (search = window.location.search, name) => {
  return new URLSearchParams(search).get(name);
};
