import type { SanityBlockContent } from "@/types/root.types";
import { PortableText as NativePortableText } from "@portabletext/react";
import CodeBlock from "./CodeBlock";
import type { CodeBlock as CodeBlockType } from "@/types/blocks.types";
import { urlFor } from "@/sanity/lib/image";

export default function PortableText({ value }: { value: SanityBlockContent }) {
    return (
        <NativePortableText
            value={value}
            components={{
                types: {
                    code: ({ value }: { value: CodeBlockType }) => {
                        return <CodeBlock {...value} />;
                    },
                    image: ({ value }: { value: any }) => {
                        return (
                            <img
                                src={urlFor(value).url()}
                                alt={value.alt || "Image"}
                                className="my-4"
                            />
                        );
                    },
                },
                marks: {
                    code: ({ children }: { children: React.ReactNode }) => {
                        return <code className="code-tag">{children}</code>;
                    },
                },
            }}
        />
    );
}