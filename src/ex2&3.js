// 2.

import axios from 'axios';

export default class Exercicios {
  
  static async getUserFromGithub(user){
    try{
      const response = await axios.get(`https://api.github.com/users/${user}`);
  
      console.log(response.data);
    } catch (err) {
      console.log('Usuário não existe');
    }
  }

  static async getRepositories(repositorie){
    try {
      const response = await axios.get(`https://api.github.com/repos/${repositorie}`);

      console.log(response);
    } catch (err) {
      console.log('Repositório não existe');
    }
  }
}

