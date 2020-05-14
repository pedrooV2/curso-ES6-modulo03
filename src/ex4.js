import axios from 'axios';

export const getUser = async (user) => {
  try{
    const response = await axios.get(`https://api.github.com/users/${user}`);

    console.log(response);
  } catch (err){
    console.log('User not found');
  }
}