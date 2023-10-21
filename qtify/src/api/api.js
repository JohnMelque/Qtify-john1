import axios from "axios";

export const BACKEND_POINT = 'https://qtify-backend-labs.crio.do'

export const featchNewAlbum = async () => {
  try {
    const res = await axios.get(`${BACKEND_POINT}/albums/new`);
  
    return res.data;
    
  } catch(e) {
    console.error(e)
  }
}

export const featchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_POINT}/songs`);
  
    return res.data;
    
  } catch(e) {
    console.error(e)
  }
}


export const featchTopAlbum = async () => {
  try {
    const res = await axios.get(`${BACKEND_POINT}/albums/top`);
  
    return res.data;
    
  } catch(e) {
    console.error(e)
  }
}
