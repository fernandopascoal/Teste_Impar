import axios from "axios";

export const climatempo = axios.create({
    baseURL: "http://apiadvisor.climatempo.com.br" 
  });