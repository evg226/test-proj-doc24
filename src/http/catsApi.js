import axios from "axios";

export const queryCats = async () => {
    const {data} = await axios.get('https://cat-fact.herokuapp.com/facts');
    return data;
}
