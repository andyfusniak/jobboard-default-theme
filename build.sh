#!/bin/bash

zip -r theme manifest.json
zip -r theme templates -i \*.html \*.txt
zip -r theme public -i \*.html \*.css \*.woff2 \*.js \*.ico \*.png
