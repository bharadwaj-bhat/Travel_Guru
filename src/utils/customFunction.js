export const customFunction = (e, num, data, fun) => {
	const payload = data;
	payload[num] = e.target.checked;
	fun(payload);
};
export const customFunction_2 = (num, data, fun) => {
	const payload = data;
	payload[num] = !payload[num];
	fun(payload);
};
