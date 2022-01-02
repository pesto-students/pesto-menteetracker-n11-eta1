const CracoLessPlugin = require('craco-less');

module.exports = {
	eslint: {
		enable: false,
	  },
	style: {
		postcss: {
			plugins: [require('tailwindcss'), require('autoprefixer')],
		},
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						javascriptEnabled: true,
					},
				},
			},
		},
	],
};
