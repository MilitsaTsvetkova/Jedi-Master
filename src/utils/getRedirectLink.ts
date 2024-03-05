export const getRedirectLink = (url: string) => {
  return url.replace('https://swapi.dev/api', '').slice(0, -1)
}
