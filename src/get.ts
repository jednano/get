export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1],
	K3 extends keyof T[K1][K2] = keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3] = keyof T[K1][K3],
	K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K3][K4][K5][K6],
	K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7] = keyof T[K1][K3][K4][K5][K6][K7],
	K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8] = keyof T[K1][K3][K4][K5][K6][K7][K8],
	K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] = keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9]
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10, ...string[]],
	defaultValue?: any,
): any

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1],
	K3 extends keyof T[K1][K2] = keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3] = keyof T[K1][K3],
	K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K3][K4][K5][K6],
	K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7] = keyof T[K1][K3][K4][K5][K6][K7],
	K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8] = keyof T[K1][K3][K4][K5][K6][K7][K8],
	K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] = keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9]
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6, K7, K8, K9, K10],
	defaultValue?: any,
): T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1],
	K3 extends keyof T[K1][K2] = keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3] = keyof T[K1][K3],
	K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K3][K4][K5][K6],
	K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7] = keyof T[K1][K3][K4][K5][K6][K7],
	K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8] = keyof T[K1][K3][K4][K5][K6][K7][K8]
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6, K7, K8, K9],
	defaultValue?: any,
): T[K1][K2][K3][K4][K5][K6][K7][K8][K9]

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1],
	K3 extends keyof T[K1][K2] = keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3] = keyof T[K1][K3],
	K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K3][K4][K5][K6],
	K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7] = keyof T[K1][K3][K4][K5][K6][K7]
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6, K7, K8],
	defaultValue?: any,
): T[K1][K2][K3][K4][K5][K6][K7][K8]

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1],
	K3 extends keyof T[K1][K2] = keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3] = keyof T[K1][K3],
	K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K3][K4][K5],
	K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K3][K4][K5][K6]
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6, K7],
	defaultValue?: any,
): T[K1][K2][K3][K4][K5][K6][K7]

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1],
	K3 extends keyof T[K1][K2] = keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3] = keyof T[K1][K3],
	K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K3][K4],
	K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K3][K4][K5]
>(
	object: T,
	path: [K1, K2, K3, K4, K5, K6],
	defaultValue?: any,
): T[K1][K2][K3][K4][K5][K6]

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1],
	K3 extends keyof T[K1][K2] = keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3] = keyof T[K1][K3],
	K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K3][K4]
>(
	object: T,
	path: [K1, K2, K3, K4, K5],
	defaultValue?: any,
): T[K1][K2][K3][K4][K5]

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1],
	K3 extends keyof T[K1][K2] = keyof T[K1][K2],
	K4 extends keyof T[K1][K2][K3] = keyof T[K1][K3]
>(object: T, path: [K1, K2, K3, K4], defaultValue?: any): T[K1][K2][K3][K4]

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1],
	K3 extends keyof T[K1][K2] = keyof T[K1][K2]
>(object: T, path: [K1, K2, K3], defaultValue?: any): T[K1][K2][K3]

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K1 extends keyof T = keyof T,
	K2 extends keyof T[K1] = keyof T[K1]
>(object: T, path: [K1, K2], defaultValue?: any): T[K1][K2]

export default function get<
	T extends { [K in keyof T]: T[K] } | any[],
	K extends keyof T = keyof T
>(object: T, path: [K], defaultValue?: any): T[K]

/**
 * Type-safe get function returns a nested value from an object. TypeScript
 * will preserve the types up to 10 levels deep.
 */
export default function get<T extends object | any[], K1 extends keyof T>(
	object: T,
	path: [K1, ...string[]],
	defaultValue?: any,
) {
	const key = path[0]
	if (!(key in object)) {
		return defaultValue
	}
	const target = object[key]
	return typeof target === 'object' && path.length > 1
		? get(target, path.slice(1) as any, defaultValue)
		: target
}

// @ts-ignore
module.exports = Object.assign(exports.default, exports)
