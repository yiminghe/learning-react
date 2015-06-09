rm -rf build
webpack
rm -rf dist
mkdir dist
cp -r build dist/build
cp -r example dist/example
gh-pages -d dist