const Header =() =>{
    const handleChange = (event) =>{
        console.log(event.target.value)
    }
    return(
        <header >
            <div
             className="logo"> Awesome newss</div>
             <input onChange={handleChange}/>
             <nav className="mainNav">
                <ul>
                    <li className="navItem"><a href="#">articles</a></li>
                    <li className="navItem"><a href="#">sports</a></li>
                    <li className="navItem"><a href="#">games</a></li>
                    <li className="navItem"><a href="#">music</a></li>
                </ul>
             </nav>
            
        </header>
    )
}
   
   
export default Header;