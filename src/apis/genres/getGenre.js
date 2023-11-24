import axios from "axios";

//genre별 VOD 리스트 가져오기
export const genreList = async (genre) => {
    const result = await axios.get(`http://0.0.0.0:8080/genres/${genre}`); //(`http://localhost:30/genres${genre}`)
    return result;
};