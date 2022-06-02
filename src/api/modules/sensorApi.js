'use strict'

import axios from '../apiWrapper'

export const getSensor = (page , device_id,time) => {
  return axios.get(`/user/aircondition/${page}/${device_id}/${time}`);
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
