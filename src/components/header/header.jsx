import Nav from "./nav"
const Header =() =>{
    const handleChange = (event) =>{
        console.log(event)
    }
    return(
        <header >
            <div 
            className="logo"> Awesome newss</div>
             <input onChange={handleChange}/>
            <Nav/>
            
        </header>
    )
}
   
   
export default Header;