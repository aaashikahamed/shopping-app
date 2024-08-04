function Login(){
    return(
        <form className="login">
            <input type="text" placeholder="Username" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login