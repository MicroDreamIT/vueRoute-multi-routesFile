# vue-Router for multiple routes files
vue route multiple routes file for large project


#Main entry file
```
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
```

### also check [FirstRoute.js](https://github.com/MicroDreamIT/vueRouter-multi-routesFile/blob/master/FirstRoute.js)
### also check [SecondRoute.js](https://github.com/MicroDreamIT/vueRouter-multi-routesFile/blob/master/SecondRoute.js)

###### developed and tested on [shapecss](https://shapecss.com)