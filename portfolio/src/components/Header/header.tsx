import Button from "../Button/button";

function Header() {
    return (
        <>
            <header>
                <div>
                    <div>
                        <h1>AndréMaurilioDEV</h1>
                    </div>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    <div>
                        <Button>Contact me</Button>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;