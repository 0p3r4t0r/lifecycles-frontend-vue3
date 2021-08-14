import styles from "./index.module.scss"

type LinkProps = {
    to: string,
    text: string,
}

const Link = (props: LinkProps) => {
    return (<router-link to={props.to}>{props.text}</router-link>)
}

export type NavbarProps = {
    links: Array<LinkProps>
}

const Navbar = (props: NavbarProps) => {
    return (
        <div class={styles.navbarWrapper}>
            {props.links.map(linkProps => <Link {...linkProps} />)}
        </div>
    )
}

export default Navbar