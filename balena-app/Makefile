include ./.env

.PHONY: build
build:
	cd server; npm run build
	cd client; npm run build

.PHONE: deploy-dev
live: build
	balena push -g ${DEV_IP} --debug