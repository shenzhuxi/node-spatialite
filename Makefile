all: build

build:
	node-gyp build

clean:
	node-gyp clean

test:
	node test

.PHONY: build clean test
