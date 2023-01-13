import {defineField, defineType} from 'sanity'

export default defineType({
   name: 'restaurant',
   title: 'Restaurant',
   type: 'document',
   fields: [
      defineField({
         name: "name",
         title: "Restaurant Name",
         type: "string",
         validation: (Rule) => Rule.required()
      }),
      defineField({
         name: "short_description",
         title: "Short Description",
         type: "string",
         validation: (Rule) => Rule.max(200)
      }),
      defineField({
         name: "image",
         title: "Image of restaurant",
         type: "image"
      }),
      defineField({
         name: "lat",
         title: "Latitude of the restaurant",
         type: "number",
      }),
      defineField({
         name: "long",
         title: "Longitude of the restaurant",
         type: "number"
      }),
      defineField({
         name: "address",
         title: "Restaurant address",
         type: "string",
         validation: (Rule) => Rule.required()
      }),
      defineField({
         name: "rating",
         title: "Enter a Rating from (1-5 Starts)",
         type: "number",
         validation: (Rule) => 
            Rule.required()
               .min(1)
               .max(5)
               .error("Please enter a value between 1 and 5")
      }),
      defineField({
         name: "type",
         title: "Category",
         validation: (Rule) => Rule.required(),
         type: "reference",
         to: [{type: "category"}]
      }),
      defineField({
         name: "dishes",
         type: "array",
         title: "Dishes",
         of: [{type: "reference", to: [{type: "dish"}]}]
      })
   ],
})
