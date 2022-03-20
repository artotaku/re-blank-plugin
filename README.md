RE Blank Plugin - TypeScript To Lua Show Case
=============================================

This is a fork of pongasoft´s https://github.com/pongasoft/re-blank-plugin and adds a show case for using TypeScriptToLua(https://github.com/TypeScriptToLua/TypeScriptToLua) to generate custom display lua file from TypesScript.

Custom Displays (https://developer.reasonstudios.com/documentation/rack-extension-sdk/4.3.0/jukebox-scripting-specification#display) are special widgets in Rack Extensions and implemented in LUA using an API from the Rack Extension SDK in a file named `display.lua`.

TypeScriptToLua (tstl) is node module that allows to write TypeScript code that is transpiled into LUA code.

This project showcases a TypeScript file (`display.ts`) that is transpiled to `display.ts` and then installed in a Rack Extension which can be tested using the Reason Recon developer version.

The TypeScript code uses the types declarations for Custom Display API available from https://www.npmjs.com/package/jbox-lua-types to handle drawing and gestures on the custom display.

The project is based on Rack Extension SDK 4.3.0 and Reason Recon 12.

Requirements
------------
- See https://github.com/pongasoft/re-blank-plugin#requirements
- An installation of npm/node https://nodejs.org/en/download/

Quick Starting guide
--------------------
### Step 1 - Checkout
Go to directory where you want to checkout the project
```
> git clone https://github.com/artotaku/re-blank-plugin.git
```
### Step 2 - Configure cmake
Follow the instructions in https://github.com/pongasoft/re-blank-plugin/blob/master/README.md#quick-starting-guide.

You can also build and deploy the RE to Reason Recon since the display.lua is already generated and checked in.

### Step 3 - Setup TypeScriptToLua
This will install all required node modules to run TypeScriptToLua.
```
> cd re-blank-plugin
> npm i
```
### Step 4 - Regenerate `display.lua` from `display.ts`
```
> npm run build
```

How does it work?
-----------------
The TypeScript code is available in `src/ts/display.ts`. As you can see the registration of any callback handlers for drawing and gestures works just like in the LUA side in display.lua.

The callback handler function names match the configurations for the custom display in `GUI2D/hdgui_2D.lua`.

Custom display API functions `jbox.*` and `jbox_display.*` are available as expected but extended by typing for parameters.

If you click on the custom display you will see log output in Reason Recon.

The tstl transpiler transpiles one or more TypeScript files to one lua output file. We use the bundle configuration of tstl here since the Rack Extension SDK expects just one single LUA file that must be named `display.lua`.

The transpiler also adds the equivalents of TypeScript language functions such like string and table, etc operations to the LUA output file. This will increase the file size noticeably.
Unfortunately, up to now there is no tree shaking of unused functions. 

Caveats
-------
If you have no other module imports in `display.ts` you don´t need to declare the global scope (`_G` in LUA). This is how it is currently done in display.ts.

If you want to import other modules you have to redeclare `_G` and assign the format version and callback handler functions to `_G`.
```
declare let _G: any;

_G.format_version = '1.0';

_G.drawCustomDisplay: jbox_display.draw = (...) => {
	...
};
...

```
