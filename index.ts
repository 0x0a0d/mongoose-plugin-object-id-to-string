import { Schema } from 'mongoose'

export const mongoosePluginObjectIdToString = () => {
  // default mongoose ObjectId to string
  Schema.Types.ObjectId.get(v => v != null ? v.toString() : v)

  const optionKeys = [
    'toObject',
    'toJSON',
  ]

  return (schema: Schema) => {
    optionKeys.forEach(optionKey => {
      if (schema.get(optionKey) == null) {
        schema.set(optionKey, {
          getters: true,
        })
      }
    })
  }
}
