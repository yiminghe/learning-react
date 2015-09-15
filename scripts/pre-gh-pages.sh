cp -r tutorial build/tutorial
./node_modules/.bin/replace '/node_modules/reveal.js/' 'https://a.alipayobjects.com/reveal/3.1.0/' build/tutorial -r --include="*.html"