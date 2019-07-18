//return constructed query string , where arg<<object>> contains the params
export const getQueryString = arg => {
  Object.keys(arg).forEach(key => arg[key] === undefined && delete arg[key]);

  const keys = Object.keys(arg);
  const values = Object.values(arg);

  let params = new URLSearchParams();

  keys.map((param, key) => {
    const value = values[key];
    if (value && Array.isArray(value)) {
      value.length > 0 &&
        value.map(value => params.append(`${param}`, `${value}`));
    } else if (value) {
      params.append(`${param}`, `${value}`);
    }
  });
  return params.toString();
};

export const handleRedirect = ({ location, history, match }) => {
  const params = new window.URLSearchParams(location.search);
  const page = params.get("page");
  const search = params.get("search");

  if (!page && search) {
    const params = { page: 1, search };
    const url = `${match.url}?${getQueryString(params)}`;
    history.push(url);
  } else if (!page) {
    const params = { page: 1 };
    const url = `${match.url}?${getQueryString(params)}`;
    history.push(url);
  }
};
