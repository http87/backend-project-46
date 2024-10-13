# Makefile

install: 
	npm ci

publish:
	npm publish --dry-run

link:
	npm link

link-sudo:
	sudo npm link	

lint:
	npx eslint .