import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/LoginUsers.vue'

import Home from 'home/index'

import SensorDataDevice from 'sensor/data/Device'
import SensorMain from 'sensor/main/index'

import EquipMain from 'equipment/main/index'
import EquipAccount from 'equipment/account/index'
import Analysis from 'equipment/analysis/index'
import Maintain from 'equipment/maintain/index'

import EnergyMain from 'energy/main/index'
import EnergyConsumption from 'energy/consumption/index'
import EnergyCustomer from 'energy/customer/index'
import EnergyDevice from 'energy/device/index'
import EnergyElectricity from 'energy/electricity/index'
import EnergyTem_hum from 'energy/tem_hum/index'

Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path:'/Main',
        name:'Main',
        component: () => import('../views/Main.vue'),
        children:[
            {
                name:'home',
                path:'/home',
                component:Home
            },
            // 传感器模块
            {
                name:'sensor',
                path:'/sensor',
                component:{render: (e) => e("router-view")},
                children:[
                    {
                        name:'sensor_main',
                        path:'main',
                        component:SensorMain
                    },
                    {
                        name:'sensor_data',
                        path:'data',
                        component:{render: (e) => e("router-view")},
                        children:[
                            {
                                name:'sensor_data_device',
                                path:'device',
                                component:SensorDataDevice
                            },
                        ]
                    },

                ]
            },
            // 设备模块
            {
                name:'equip',
                path:'/equip',
                component:{render: (e) => e("router-view")},
                children:[
                    {
                        name:'equip_main',
                        path:'main',
                        component:EquipMain,
                    },
                    {
                        name:'equip_account',
                        path:'account',
                        component:{render: (e) => e("router-view")},
                        children:[
                            {
                                name:'equip_index',
                                path:'index',
                                component:EquipAccount
                            },
                        ]
                    },
                    {
                        name:'equip_maintain',
                        path:'maintain',
                        component:{render: (e) => e("router-view")},
                        children:[
                            {
                                name:'equip_maintain_index',
                                path:'index',
                                component:Maintain
                            },
                        ]
                    },
                    {
                        name:'equip_analysis',
                        path:'analysis',
                        component:{render: (e) => e("router-view")},
                        children:[
                            {
                                name:'equip_analysis_index',
                                path:'index',
                                component:Analysis
                            },
                        ]
                    },
                ]
            },
            // 能源模块
            {
                name:'energy',
                path:'/energy',
                component:{render: (e) => e("router-view")},
                children:[
                    {
                        name:'energy_main',
                        path:'main',
                        component:EnergyMain,
                    },
                    {
                        name:'energy_elec',
                        path:'electricity',
                        component:{render: (e) => e("router-view")},
                        children:[
                            {
                                name:'energy_elec_index',
                                path:'index',
                                component:EnergyElectricity
                            },
                        ]
                    },
                    {
                        name:'energy_tem_hum',
                        path:'tem_hum',
                        component:{render: (e) => e("router-view")},
                        children:[
                            {
                                name:'energy_tem_hum_index',
                                path:'index',
                                component:EnergyTem_hum
                            },
                        ]
                    },
                    {
                        name:'energy_customer',
                        path:'customer',
                        component:{render: (e) => e("router-view")},
                        children:[
                            {
                                name:'energy_customer_index',
                                path:'index',
                                component:EnergyCustomer
                            },
                        ]
                    },
                    {
                        name:'energy_consumption',
                        path:'consumption',
                        component:{render: (e) => e("router-view")},
                        children:[
                            {
                                name:'energy_consumption_index',
                                path:'index',
                                component:EnergyConsumption
                            },
                        ]
                    },
                    {
                        name:'energy_device',
                        path:'device',
                        component:{render: (e) => e("router-view")},
                        children:[
                            {
                                name:'energy_device_index',
                                path:'index',
                                component:EnergyDevice
                            },
                        ]
                    },
                ]
            }
        ]
    },


]
const router = new VueRouter({
    mode:'history',
    routes

})
export default router
