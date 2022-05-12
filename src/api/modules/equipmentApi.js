'use strict'

import axios from '../apiWrapper'

export const getDevice = (page) => {
  return axios.get(`/admin/deviceManage/deviceQuery/page?page=${page}`);
}

export const addDevice = (params) => {
 return axios.post(`/admin/deviceManage/deviceAdd`, params);
} 

export const putPost = (params) => {
  return axios.put(`api/user`,params);
}
export const delDevice = (device_id,params) => {
  return axios.delete(`/admin/deviceManage/deviceDel/device_id/${device_id}`,params);
}

export const getPostsOrderBy = (orderBy,params) => {
  return axios.get(`api/user/post/orderby${orderBy}`,params);
}
