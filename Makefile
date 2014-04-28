
build: components index.js
				@component build --dev

dist: components
				@component build --standalone oz-text --name oz-text --out dist
				@uglifyjs dist/oz-text.js -o dist/oz-text.min.js

components: component.json
				@component install --dev

clean:
				rm -fr build components template.js dist

test: build
				component-test phantom

.PHONY: clean oz-text test
