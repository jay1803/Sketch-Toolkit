[![Board Status](https://dev.azure.com/max0454/40514dc6-8dd6-4bc2-b077-098cc1233900/d6be7807-3b44-4b7c-8f18-3ca2802fc8c4/_apis/work/boardbadge/42b1f98d-f5b0-4a32-b548-efccfe2a12bf)](https://dev.azure.com/max0454/40514dc6-8dd6-4bc2-b077-098cc1233900/_boards/board/t/d6be7807-3b44-4b7c-8f18-3ca2802fc8c4/Microsoft.RequirementCategory)
# Sketch Toolkit

Sketch 官方的 API 稀烂的情况下，最终查阅很多网络资料来整理一些基本的方法，虽然这个插件有一些可能用的命令，但其主要目的在于 Fuctions，也就是将 Sketch API 写成更简单直观的方法。

介于 Sketch/dom 似乎才是最优解，因此在 dom 完善之后，这里的方法可能并不如 dom 更直观了。

如果你对编写 Sketch 插件感兴趣，倒是可以考虑用用看，一些常用的方法都在 functions.js 当中。

## 测试软件

```
sketchplugin identify_name --without-activating
# 测试颜色
sketchplugin generate_color_value --without-activating
```

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

## Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

## Custom Configuration

### Babel

To customize Babel, you have two options:

* You may create a [`.babelrc`](https://babeljs.io/docs/usage/babelrc) file in your project's root directory. Any settings you define here will overwrite matching config-keys within skpm preset. For example, if you pass a "presets" object, it will replace & reset all Babel presets that skpm defaults to.

* If you'd like to modify or add to the existing Babel config, you must use a `webpack.skpm.config.js` file. Visit the [Webpack](#webpack) section for more info.

### Webpack

To customize webpack create `webpack.skpm.config.js` file which exports function that will change webpack's config.

```js
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - whether the config is for a plugin command or a resource
 **/
module.exports = function(config, isPluginCommand) {
  /** you can change config here **/
}
```

## Debugging

To view the output of your `console.log`, you have a few different options:

* Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
* Open `Console.app` and look for the sketch logs
* Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file

Skpm provides a convenient way to do the latter:

```bash
skpm log
```

The `-f` option causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input

## Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

You will need to specify a `repository` in the `package.json`:

```diff
...
+ "repository" : {
+   "type": "git",
+   "url": "git+https://github.com/ORG/NAME.git"
+  }
...
```
