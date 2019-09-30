'use strict';

const utility = require('./utility');
const ts = require('typescript');
const externals = require('./rollup-externals');

const currentPath = process.argv[1].slice(0, process.argv[1].lastIndexOf('/'));
const tscES5OutDir = `/lib`;
const tscES6OutDir = `/lib-esm`;
const packageInfo = require(`${currentPath}/package`);

async function buildRollUp() {
	console.log(`Building Roll up bundle file under ${currentPath}`);
	const rollup = require('rollup');
	const resolve = require('rollup-plugin-node-resolve');
	const sourceMaps = require('rollup-plugin-sourcemaps');
	const json = require('rollup-plugin-json');

	const input = `${currentPath}${tscES5OutDir}/index.js`;
	const file = `${currentPath}${packageInfo.main.slice(
		packageInfo.main.indexOf('/')
	)}`;
	const onwarn = warning => {
		if (warning.code === 'THIS_IS_UNDEFINED') {
			return;
		}
		console.warn(warning.message);
	};

	const inputOptions = {
		input,
		plugins: [json(), resolve({ extensions: ['.js', '.json'] }), sourceMaps()],
		external: externals[packageInfo.name],
		onwarn,
	};

	const outputOptions = {
		file,
		format: 'cjs',
		name: 'index',
		sourcemap: true,
		exports: 'named',
	};

	console.log(`Using the rollup configuration:`);
	console.log(inputOptions);
	console.log(outputOptions);

	try {
		const bundle = await rollup.rollup(inputOptions);
		await bundle.write(outputOptions);
	} catch (e) {
		console.log(e);
	}
}

function tsc(fileNames, options) {
    let program = ts.createProgram(fileNames, options);
    let emitResult = program.emit();
    console.log(emitResult);
    let exitCode = emitResult.emitSkipped ? 1 : 0;
    console.log(`Process exiting with code '${exitCode}'.`);
    process.exit(exitCode);
}

async function buildES5() {
	const jsx = packageInfo.name === 'aws-amplify-react' ? 'react' : undefined;
	const allowJs = packageInfo.name === 'aws-amplify-react' ? true : false;
	// tsconfig for ES5 generating
	let compilerOptions = {
		noImplicitAny: false,
		lib: ['dom', 'es2017', 'esnext.asynciterable'],
		jsx: jsx,
		sourceMap: true,
		target: 'es5',
		module: 'commonjs',
		moduleResolution: 'node',
		allowJs: allowJs,
		declaration: true,
		typeRoots: [
			`${currentPath}/node_modules/@types`,
			`${__dirname.slice(0, __dirname.lastIndexOf('/'))}/node_modules/@types`,
		],
		// temporary fix
		types: ['node'],
		outDir: `${currentPath}${tscES5OutDir}`,
	};

	compilerOptions = ts.convertCompilerOptionsFromJson(compilerOptions);
	const include = [`${currentPath}/src`];
	console.log(`Using the typescript compiler options:`);
	console.log(compilerOptions);

	let fileList = [];
	Promise.all(
		include.map(async source => {
			const list = await utility.iterateFiles(source);
			return (fileList = fileList.concat(list));
		})
	).then(() => {
		console.log('Files to be transpiled by tsc:');
		console.log(fileList);
		tsc(fileList, compilerOptions.options);
	});
}

function buildES6() {
<<<<<<< HEAD
    const jsx = packageInfo.name === 'aws-amplify-react'? 'react':undefined;
    const allowJs = packageInfo.name === 'aws-amplify-react' ? true : false;
    // tsconfig for ESM generating
    let compilerOptions = {
        "noImplicitAny": false,
        "lib": [
            "dom",
            "es2017",
            "esnext.asynciterable"
        ],
        "jsx": jsx,
        "sourceMap": true,
        "target": "es5",
        "module": "es2015",
        "moduleResolution": "node",
        "allowJs": allowJs,
        "declaration": true,
        "typeRoots": [
            `${currentPath}/node_modules/@types`,
            `${__dirname.slice(0, __dirname.lastIndexOf('/'))}/node_modules/@types`
        ],
        // temporary fix
        "types": ["node"],
        "outDir": `${currentPath}${tscES6OutDir}`,
        "extendedDiagnostics": true
    }
    
    compilerOptions = ts.convertCompilerOptionsFromJson(compilerOptions);
    const include = [`${currentPath}/src`];
    console.log(`Using the typescript compiler options:`);
    console.log(compilerOptions);

    let fileList = [];
    Promise.all(include.map(async (source) => {
        const list = await utility.iterateFiles(source);
        return fileList = fileList.concat(list);
    })).then(() => {
        console.log("Files to be transpiled by tsc:");
        console.log(fileList);
        tsc(fileList, compilerOptions.options);
    });
=======
	const jsx = packageInfo.name === 'aws-amplify-react' ? 'react' : undefined;
	const allowJs = packageInfo.name === 'aws-amplify-react' ? true : false;
	// tsconfig for ESM generating
	let compilerOptions = {
		noImplicitAny: false,
		lib: ['dom', 'es2017', 'esnext.asynciterable'],
		jsx: jsx,
		sourceMap: true,
		target: 'es5',
		module: 'es2015',
		moduleResolution: 'node',
		allowJs: allowJs,
		declaration: true,
		typeRoots: [
			`${currentPath}/node_modules/@types`,
			`${__dirname.slice(0, __dirname.lastIndexOf('/'))}/node_modules/@types`,
		],
		// temporary fix
		types: ['node'],
		outDir: `${currentPath}${tscES6OutDir}`,
	};

	compilerOptions = ts.convertCompilerOptionsFromJson(compilerOptions);
	const include = [`${currentPath}/src`];
	console.log(`Using the typescript compiler options:`);
	console.log(compilerOptions);

	let fileList = [];
	Promise.all(
		include.map(async source => {
			const list = await utility.iterateFiles(source);
			return (fileList = fileList.concat(list));
		})
	).then(() => {
		console.log('Files to be transpiled by tsc:');
		console.log(fileList);
		tsc(fileList, compilerOptions.options);
	});
>>>>>>> modularization-AWS_SDK_V3
}

function build(type) {
	if (type === 'rollup') buildRollUp();
	if (type === 'es5') buildES5();
	if (type === 'es6') buildES6();
}

module.exports = build;
