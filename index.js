window.Vue = require('vue');

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { default as profileRoutes } from './FirstRoute.js';
import {default as JobsRoutes} from './SecondRoute.js';

let routeFiles=[];

const routes = routeFiles.concat(profileRoutes, JobsRoutes);

const router = new VueRouter({
    routes,
    linkActiveClass: 'is-active',
    mode: 'history'
});