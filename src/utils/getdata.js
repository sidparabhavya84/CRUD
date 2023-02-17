const GetForm = () => {
    const formdata = localStorage.getItem("crud")
    if (!formdata) {
        return [];
    } else {
        return JSON.parse(formdata)
    }
  }

  export default GetForm;