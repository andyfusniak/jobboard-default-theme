#!/bin/bash

npm run --silent tw:prod

# make the build directory and get the version from the manifest file
# to generate the theme zip file path.
mkdir -p build
ZIPFILE=build/jobboard-default-theme-`cat manifest.json | jq .version | tr -d '"'`.zip

zip -rq $ZIPFILE manifest.json
zip -rq $ZIPFILE templates -i \*.html \*.txt
zip -rq $ZIPFILE public -i \*.html \*.css \*.woff2 \*.js \*.ico \*.png
