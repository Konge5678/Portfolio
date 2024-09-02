import { defineType } from "sanity";

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
            name: "tags",
            type: "array",
            of: [{type: "reference", to: [{type: "tag"}]}],
        },
        
    ]
});