'use strict'

import axios from '../apiWrapper'

// 查询权限管理列表数据
export const login = (params) => {

  return axios.post(`api/login`,params);
}
