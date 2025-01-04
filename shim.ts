// shim.ts
// [issue](https://github.com/oven-sh/bun/issues/13522#issuecomment-2311173485)
const bin = Bun.file('dist/k-ink.js')
let content = await new Response(bin).text()

// Replace createRequire(import.meta.url) with require
content = content.replace(/createRequire\(import\.meta\.url\)/g, 'require')

// Replace $(import.meta.url) where $ is "createRequire as something"
const createRequireAsRegex = /(?<=createRequire as )(.+?)(\w*)(?=\})/g
const matches = content.match(createRequireAsRegex)

if (!matches?.length) {
	throw new Error('No matches found')
}

for (const match of matches) {
	const pattern = `${match}(import.meta.url)`
	content = content.replaceAll(pattern, 'require')
}

await Bun.write('dist/k-ink.js', content)
console.log('Successfully shimmed dist/k-ink.js')
