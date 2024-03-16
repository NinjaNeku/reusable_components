import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({to, children, className, activeClassName}){
    const { Navigate, currentPath } = useNavigation();

    const classes = classNames(
        'text-blue-500', 
        className,
        currentPath === to && activeClassName
        );

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey ){
            return;
        }
        
        event.preventDefault();

        Navigate(to);
    };
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;