import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink   = ({text, href}) => {

const {asPath} = useRouter()

    const style = {
        color: '#0070f3',
        textDecoration: 'underline'

    }
    return ( 
        <div>
        <Link href={href} style= {asPath === href ? style : null}>
          {text}
           </Link>
        </div>);
}
 
export default ActiveLink  ;