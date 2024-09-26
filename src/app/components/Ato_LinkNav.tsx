import Link from "next/link";
import { SpanLink } from "./Ele_SpanLink"

type Props = {
    src: string;
    alt: string;
    span?: string;
    href: string;
}

export const LinkNav = ({src, alt, span="", href=""}: Props) => {
    return (
        <Link
            className='flex justify-end items-center h-16  hover: group'
            href={href}>
            <img
                className='w-7 mr-2 group-hover:rotate-360 transition-all duration-300 ease-in-out transform'
                src={src}
                alt={alt}
            />
            <SpanLink>{span}</SpanLink>
        </Link>
    )
}

