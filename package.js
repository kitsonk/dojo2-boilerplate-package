var profile = (function () {
	var testResourceRe = /^dojo2-boilerplate-package\/test\//,

		copyOnly = function (filename, mid) {
			var list = {
				'dojo2-boilerplate-package/package': 1,
				'dojo2-boilerplate-package/package.json': 1,
				'dojo2-boilerplate-package/test': 1,
				'dojo2-boilerplate-package/doc': 1
			};
			return (mid in list) ||
				(/^dojo2-boilerplate-package\/resources\//.test(mid) && !/\.css$/.test(filename)) ||
				/(png|jpg|jpeg|gif|tiff)$/.test(filename);
		};

	return {
		resourceTags: {
			test: function (filename, mid) {
				return testResourceRe.test(mid);
			},

			copyOnly: function (filename, mid) {
				return copyOnly(filename, mid);
			},

			amd: function (filename, mid) {
				return !testResourceRe.test(mid) && !copyOnly(filename, mid) && /\.js$/.test(filename);
			}
		}
	};
})();