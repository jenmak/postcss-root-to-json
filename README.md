# PostCSS Root To Json

[PostCSS] plugin Exports all root declarations to json.

[PostCSS]: https://github.com/postcss/postcss

```css
:root {
    --custom-color: #fff;
}

:root {
    --custom-size: 2em;
}
```

```json
{ 
  "--custom-color": "#fff",
  "--custom-size": "2em"
}
```

## Usage

Add the output path as an option: `{ output: \'output.json\' }`

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-root-to-json'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
