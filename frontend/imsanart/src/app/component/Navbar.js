const Navbar = () => {
  return (
    /* The contents of the navbar are the following
        1. The website name as a logo
        2. Signin / signup button
        3. Cart button in order to view the cart
    */
    <div className="container">
        
        <div id="logo"> ImsanArt </div>
        <button className="btn btn-primary ">SignIn</button>
        <button className="btn btn-primary">SignUp</button>
        <button className="btn btn-light">
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/shopping-cart.png" alt="shopping-cart"/>
        </button>


    </div>
  )
}

export default Navbar