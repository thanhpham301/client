export const menuService = async() => {
    const response = await fetch("http://localhost:8080/api/v1/menu")
    const { data } = await response.json();
    return data;
}