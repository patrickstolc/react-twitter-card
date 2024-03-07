const useQueryParams = (key: string) => {
    const search = window.location.search;
    const params = new URLSearchParams(search);

    return params.get(key);
}
export default useQueryParams