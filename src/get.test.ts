/* eslint-env node, jest */
import get from './get'
import commonJSModule = require('./get')

describe('index', () => {
	it('exports a CommonJS module for npm compatibility', () => {
		expect(commonJSModule).toBe(get)
	})

	it('has a circular default prop', () => {
		// @ts-ignore
		expect(get.default.default).toBe(get)
	})

	const collection = [
		{
			a: {
				b: {
					c: 'd',
				},
			},
		},
	]

	const data = { a: { b: { c: collection } } }

	it('gets a shallow value w/o modification', () => {
		const result = get(data, ['a'])

		expect(result).toBe(data.a)
	})

	it('gets a deep value w/o modification', () => {
		const result = get(data, ['a', 'b', 'c'])

		expect(result).toBe(collection)
	})

	it('gets a deep value, 11 levels deep', () => {
		expect(
			get(
				{
					a: {
						b: {
							c: {
								d: { e: { f: { g: { h: { i: { j: { k: 'l' } } } } } } },
							},
						},
					},
				},
				['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'],
			),
		).toBe('l')
	})

	it('navigates through a collection (number in path)', () => {
		const result = get(data, ['a', 'b', 'c', 0, 'a', 'b', 'c'])

		expect(result).toBe('d')
	})

	it('navigates through a collection at root', () => {
		const result = get(collection, [0, 'a', 'b', 'c'])

		expect(result).toBe('d')
	})

	it('navigates through a static property on a function', () => {
		function fn() {}
		fn.a = { b: 'c' }

		expect(get(fn, ['a', 'b'])).toBe('c')
	})

	it('does not work with dots', () => {
		expect(get(data, 'a.b' as any)).toBeUndefined()
	})

	it('accepts a TypeScript generic type', () => {
		expect(get<typeof data>(data, ['a'])).toBe(data.a)
	})

	describe('when providing default value', () => {
		const defaultValue = '__default__'

		it('returns a default value if no target is found', () => {
			const result = get(data, ['a', 'x' as any], defaultValue)

			expect(result).toBe('__default__')
		})

		it('returns an undefined value, even if options.default is specified', () => {
			const result = get({ a: undefined }, ['a'], defaultValue)

			expect(result).toBeUndefined()
		})
	})

	it('passes README examples verbatim', () => {
		const data = {
			a: {
				b: [{ c: 'd' }],
				e: undefined,
			},
		}

		expect(get(data, ['a', 'b', 0, 'c'])).toBe('d')
		expect(get(data, ['not-found' as any], 'defaultValue')).toBe(
			'defaultValue',
		)
		expect(get(data, ['a', 'e'], 'defaultValue')).toBeUndefined()
		expect(get(data, ['a', 'e']) || 'fallback').toBe('fallback')
	})
})
