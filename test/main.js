define([
	'teststack!tdd',
	'teststack/chai!assert',
	'../main',
], function (test, assert, main) {

	test.suite('basic tests', function () {
		test.test('test main', function () {
			assert(main());
		});
	});

});