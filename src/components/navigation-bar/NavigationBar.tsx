import "./NavigationBar.css";

function NavigationBar({links}: {links: {
    label: string;
    url: string;
}[]}) {
    return (
        <nav>
            {
                links.map(
                    (
                        link: {label: string, url: string}, 
                        index: number
                    ) => <a key={index} href={link.url}>{link.label}</a>
                )
            }
        </nav>
    );
};

export default NavigationBar;
