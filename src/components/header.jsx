const Header =() =>{
    const handleChange = () =>{
        console.log('I was changed')
    }
    return(
        <header >
            <div className="logo"> Logo</div>
            <input onChange={handleChange}/>
        </header>
    )
}
   
   
export default Header;