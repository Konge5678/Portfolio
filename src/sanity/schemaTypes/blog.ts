import { defineType, defineField } from "sanity";

export const blog = defineType({
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        {
            name: "title",  
            type: "string",
        }, 
        {
            name: "date",
            type: "date",
        },
        {
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "author",
            type: "string",
        },
        {
            name: "tags",
            type: "array",
            of: [{type: "reference", to: [{type: "tag"}]}],
        },
        {
            name: "image",
            type: "image",
        },
        
        defineField({
            name: 'content',
            type: 'blockContent',
          }),
  
        
    ]
});