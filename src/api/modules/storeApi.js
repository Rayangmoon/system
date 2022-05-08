'use strict'

import axios from '../apiWrapper'

export const getStore = (page) => {
  return axios.get(`admin/storeMange/storeQuery/page?page=${page}`);
}

export const addStore = (params) => {
 return axios.post(`/admin/storeManage/storeAdd`, params);
} 

export const delStore = (params) => {
  return axios.delete(`/admin/storeManage/storeDel/device_id`,params);
}


export const putPost = (params) => {
    return axios.put(`api/user`,params);
}

export const getPostsOrderBy = (orderBy,params) => {
  return axios.get(`api/user/post/orderby${orderBy}`,params);
}
