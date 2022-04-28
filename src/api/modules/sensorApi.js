'use strict'

import axios from '../apiWrapper'

export const getSensor = (page) => {
  return axios.get(`/user/aircondition/page?page=${page}`);
}

export const postPost = (params) => {
  return axios.post(`api/user`,params);
}

export const putPost = (params) => {
  return axios.put(`api/user`,params);
}
export const deletePost = (params) => {
  return axios.delete(`api/user`,params);
}

export const getPostsOrderBy = (orderBy,params) => {
  return axios.get(`api/user/post/orderby${orderBy}`,params);
}
