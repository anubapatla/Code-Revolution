const getTheYear = () =>{
  const newDate = new Date();
  return newDate.getFullYear();

} 
const Header =() =>(
    <div> the date is {getTheYear()}</div>
)
   
export default Header;