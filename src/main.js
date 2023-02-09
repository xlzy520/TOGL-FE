import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from './router/index';
import { pinia } from './store';
import './permission.js';

import './styles/index.css';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/display.css';
import 'nprogress/nprogress.css';

import 'virtual:svg-icons-register';
import registerComp from '~/components/index';
import * as ElIcons from '@element-plus/icons-vue';
import ElementPro from 'element-pro-components';

import './styles/custom.scss'; // 最后放

const app = createApp(App);
registerComp(app);
app.use(ElementPlus);
app.use(ElementPro);
app.use(router);
app.use(pinia);

const ElIconsData = ElIcons;
for (const iconName in ElIconsData) {
	app.component(`Icon${iconName}`, ElIconsData[iconName]);
}

app.mount('#app');
