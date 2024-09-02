import { defineType } from "sanity";

export const landingPage = defineType({
    name : "landingPage",
    title : "Landing Page",
    type : "document",
    fields : [
        {name : "title", title : "Title", type : "string"},
        {
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
          }
    ]
})