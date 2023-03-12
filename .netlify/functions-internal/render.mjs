import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ded4dff6.mjs","imports":["_app/immutable/entry/start.ded4dff6.mjs","_app/immutable/chunks/index.7f166287.mjs","_app/immutable/chunks/singletons.367b470c.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e1a560c9.mjs","imports":["_app/immutable/entry/app.e1a560c9.mjs","_app/immutable/chunks/index.7f166287.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
