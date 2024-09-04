import { defineType, defineField } from "sanity";

export const project = defineType({
    name : "project",
    title : "Project",
    type : "document",
    fields : [
        {
            name: "title",
            type: "string",
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
            name: "startdate",
            type: "date",
        },
        {
            name : "enddate",
            type : "date",
        },
        {
            name: "madeAt",
            type: "string",
        },
        {
            name: "tags",
            type: "array",
            of: [{type: "reference", to: [{type: "tag"}]}],
        },
        {
            name: "link",
            type: "url",	
        },
        defineField({
            name: 'content',
            type: 'blockContent',
          }),
        {
            name: "image",
            type: "image",
        },

        
    ]
});