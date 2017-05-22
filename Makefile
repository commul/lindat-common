.PHONY: build

VERSION=$(shell perl adjust-commul-version.pl)

build:
				@npm run build

install:
				@npm install

run:
				@echo "**************************************************"
				@echo "* open http://localhost:8080/webpack-dev-server/ *"
				@echo "**************************************************"
				@npm start

commul-release:
				@./node_modules/.bin/mversion $(VERSION)

release:
				@./node_modules/.bin/mversion patch

release-minor:
				@./node_modules/.bin/mversion minor

release-major:
				@./node_modules/.bin/mversion major
