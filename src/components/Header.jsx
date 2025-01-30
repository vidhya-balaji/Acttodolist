function Header(props) {
    return(
        <div className="p-5">
            <h1 className="text-3xl font-bold ">Hello {props.uname}!</h1>
            <p>I help you to manage your activities</p> 
       </div>
    )
}
export default Header;