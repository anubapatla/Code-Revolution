const Nav =()=>{
    const navItems =[
        {id:"1",link:"/articles",title:'Articles'},
        {id:"2",link:"/sports",title:'Sports'},
        {id:"3",link:"/games",title:'Games'},
        {id:"4",link:"/music",title:'Music'}
    ]
    return(
    <nav className="mainNav">
                <ul>
                    {navItems.map(item=>(
                        <li className="navItem" key={item.id}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
             

    </nav>
)
}
export default Nav;