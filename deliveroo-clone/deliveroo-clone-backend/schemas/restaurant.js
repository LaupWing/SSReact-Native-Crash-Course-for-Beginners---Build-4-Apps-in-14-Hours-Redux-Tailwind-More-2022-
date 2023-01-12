import {defineField, defineType} from 'sanity'

export default defineType({
   name: 'restaurant',
   title: 'Restaurant',
   type: 'document',
   fields: [
      defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
      }),
   ],
})
