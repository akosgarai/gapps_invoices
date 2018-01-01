all: hello

hello:
	@echo "HELLO"

test:
	@./node_modules/karma/bin/karma start dev/karma.conf.js
