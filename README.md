# @cylution/mongoose-plugin-object-id-to-string

Simple mongoose plugin that auto convert ObjectId to string

## Getting started

### Install

`npm i @cylution/mongoose-plugin-object-id-to-string`

or

`yarn add @cylution/mongoose-plugin-object-id-to-string`

### Usage

> This plugin will add `toObject: { getters: true }` to mongoose schema options
> 
> If you don't want to modify a schema, just add `toObject: {}` to options
```js
const demoSchema = new Schema({
  name: String
}, {
  toObject: {}, // will ignore toObject in global usecase
  toJSON: {}, // will ignore toJSON in global usecase
})
```

#### Typescript
```ts
import { mongoosePluginObjectIdToString } from '@cylution/mongoose-plugin-object-id-to-string'
import { plugin, Schema } from 'mongoose'
```

#### Javascript
```js
const { mongoosePluginObjectIdToString } = require('@cylution/mongoose-plugin-object-id-to-string')
const { plugin } = require('mongoose')
```

```js
const pluginObjectIdToString = mongoosePluginObjectIdToString() // don't forget this

// global
plugin(pluginObjectIdToString)

// or schema
const userSchema = new Schema({
  //
}, {
  timestamps: true,
})

userSchema.plugin(pluginObjectIdToString)
```
### License

This project is licensed under the [MIT License](LICENSE.md).
