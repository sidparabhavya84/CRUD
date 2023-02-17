const GetData = () => {
    const Data = localStorage.getItem("crud")
    if (!Data) {
        return [];
    } else {
        return JSON.parse(Data)
    }
}

export default GetData;