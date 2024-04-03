#docker-compose run --rm --entrypoint node npm-gateway-js $@
docker-compose run --rm --entrypoint node npm-gateway-js -e "require('grunt').cli();"
