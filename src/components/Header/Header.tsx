import classes from'./Header.module.css';

function Header(){
    return(
        <header>
            <img className={classes.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/1200px-Vk_Logo.svg.png"></img>
        </header>
    )
}
export default Header;