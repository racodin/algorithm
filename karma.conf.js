// karma.conf.js  --  karma configuration

// if you import your existing 'webpack.config.js' setup here,
// be sure to read the note about 'entry' below.

module.exports = function(config) {
	config.set({
		// ... normal karma configuration
    browsers: ['Chrome'],
    reporters: ['mocha'],
    frameworks: ['mocha'],
		files: [
			// all files ending in "_test"
			'test/*.test.js',
			'test/**/*.test.js'
			// each file acts as entry point for the webpack configuration
		],

    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter'
    ],

		preprocessors: {
			// add webpack as preprocessor
			'test/*.test.js': ['webpack', 'sourcemap'],
			'test/**/*.test.js': ['webpack', 'sourcemap']
		},

    coverageReporter: {
      type: 'html',
      dir: 'coverage'
    },

		webpack: {
      mode: 'development',
			// you don't need to specify the entry option because
			// karma watches the test entry points
			// webpack watches dependencies

			// ... remainder of webpack configuration (or import)
		},

		webpackMiddleware: {
			// webpack-dev-middleware configuration
			// i.e.
			noInfo: true,
			// and use stats to turn off verbose output
			stats: {
				// options i.e. 
				chunks: false
			}
		},
	});
};