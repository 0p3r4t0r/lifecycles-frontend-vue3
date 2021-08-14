import styles from "./index.module.scss"
import { navbarRoutes } from "@/router"

type LinkProps = {
    path: string,
    name: string,
}

const Link = (props: LinkProps) => {
    return (<router-link to={props.path}>{props.name}</router-link>)
}

const Navbar = () => {
    const pickLinkProps = ({ path, name }: LinkProps): LinkProps => ({ path, name });
    return (
        <div class={styles.navbarWrapper}>
            {navbarRoutes.map(route => <Link {...pickLinkProps(route)} />)}
        </div>
    )
}

export default Navbar