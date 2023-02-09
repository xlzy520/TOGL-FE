import type { App } from 'vue';

// import SvgIcon from './SvnIcon/index.vue';
import DepartmentSelect from './Selects/DepartmentSelect.vue';
import ProcedureSelect from './Selects/ProcedureSelect.vue';
import UserSelect from './Selects/UserSelect.vue';
import MaterialSelect from './Selects/MaterialSelect.vue';
import ScrollTips from './ScrollTips.vue';

export default (app: App<Element>): void => {
	// app.component('SvgIcon', SvgIcon);
	app.component('DepartmentSelect', DepartmentSelect);
	app.component('ProcedureSelect', ProcedureSelect);
	app.component('UserSelect', UserSelect);
	app.component('MaterialSelect', MaterialSelect);
	app.component('ScrollTips', ScrollTips);
};
