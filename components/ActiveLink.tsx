import Link from "next/link";
import { useRouter } from "next/router";
import { FC, CSSProperties } from 'react';

interface Props{
    text: string;
    href: string;
}

const ActiveLink: FC<Props>   = ({text, href}) => {

const {asPath} = useRouter()

    const style: CSSProperties = {
        color: '#0070f3',
        textDecoration: 'underline'

    }
    return ( 
        <div>
        <Link href={href} style= {asPath === href ? style : undefined}>
          {text}
           </Link>
        </div>);
}
 
export default ActiveLink  ;