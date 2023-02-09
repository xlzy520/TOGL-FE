import { ElMessage } from 'element-plus';

export const useMessage = (text = '', type = 'success') => {
	ElMessage({
		message: text,
		type,
		duration: 2 * 1000,
	});
};

export const useRuleRequired = (message = '', trigger = 'blur') => {
	return { required: true, message, trigger };
};
