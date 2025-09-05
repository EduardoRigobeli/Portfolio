import Link from "next/link";

export interface NavItemProps {
    url: string;
    label: string;
}

export default function NavItem(props: NavItemProps) {
    return (
        <li className="cursor-pointer">
            <Link href={props.url}>
                {props.label}
            </Link>
        </li>
    )
}