import axios from "axios";

export const getListContributions = async () => {
    try {
        const { data } = await axios.get('https://dpg.gg/test/calendar.json');

        const convertedData = Object.entries(data).map(([date, score]) => ({
            date: new Date(date),
            score: score as number,
        }));
        console.log(convertedData);

        return {convertedData};
    }
    catch {
        return false;
    }
}