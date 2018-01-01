all: hello

hello:
	@echo "HELLO"

get-angular:
	@curl https://code.angularjs.org/1.6.8/angular.min.js > dev/clientapp/test/angular.min.js
	@curl https://code.angularjs.org/1.6.8/angular-mocks.js > dev/clientapp/test/angular-mocks.js
test:
	@./node_modules/karma/bin/karma start dev/karma.conf.js
