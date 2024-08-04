function Header(){
    return(
        <nav style={{display:'flex', justifyContent:'space-between',padding:'10px'}}>
            <ul style={{display:'flex',listStyleType:'none'}}>
                <li style={{marginRight:'10px'}}>Home</li>
                <li style={{marginRight:'10px'}}>Cart</li>
                <li style={{marginRight:'10px'}}>Product Category</li>
                <li>Product List</li>
            </ul>
        </nav>
    )
}

export default Header