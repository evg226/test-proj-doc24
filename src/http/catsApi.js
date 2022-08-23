import axios from "axios";

export const queryCats = async () => {
    const {data} = await axios.get('http://localhost:5000/cats');
    return data;
}
