/*
 * @Author: lee
 * @Date: 2021-05-10 11:45:50
 * @LastEditors: lee
 * @LastEditTime: 2021-05-20 15:39:43
 * @Description: file content
 */
import Print from './printArea.js';
/**
 * @file 打印
 * 指令`v-print`,默认打印整个窗口
 * 传入参数`v-print="'#id'"` , 参数为需要打印局部的盒子标识.
 */
const addEvent = (element, type, callback) => {
	if (element.addEventListener) {
		element.addEventListener(type, callback, false);
	} else if (element.attachEvent) {
		element.attachEvent(`on${type}`, callback);
	} else {
		element[`on${type}`] = callback;
	}
};

export const localPrint = (options) => {
	new Print({
		ids: options.id, // * 局部打印必传入id
		vue: options.vue,
		url: options.url, // 打印指定的网址，这里不能跟id共存 如果共存id的优先级会比较高
		standard: '', // 文档类型，默认是html5，可选 html5，loose，strict
		extraHead: options.extraHead, // 附加在head标签上的额外标签,使用逗号分隔
		extraCss: options.extraCss, // 额外的css连接，多个逗号分开
		previewTitle: options.previewTitle || '打印预览', // 打印预览的标题
		zIndex: options.zIndex || 20002, // 预览窗口的z-index
		previewPrintBtnLabel: options.previewPrintBtnLabel || '打印', // 打印预览的标题
		popTitle: options.popTitle, // title的标题
		preview: options.preview || false, // 是否启动预览模式
		asyncUrl: options.asyncUrl,
		previewBeforeOpenCallback() {
			// 预览窗口打开之前的callback
			options.previewBeforeOpenCallback && options.previewBeforeOpenCallback(vue);
		},
		previewOpenCallback() {
			// 预览窗口打开之后的callback
			options.previewOpenCallback && options.previewOpenCallback(vue);
		},
		openCallback() {
			// 调用打印之后的回调事件
			options.openCallback && options.openCallback(vue);
		},
		closeCallback() {
			options.closeCallback && options.closeCallback(vue);
		},
		beforeOpenCallback() {
			options.beforeOpenCallback && options.beforeOpenCallback(vue);
		},
	});
};
