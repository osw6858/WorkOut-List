const Header = () => {
    return(<header className="bg-gray-800 text-white py-4 px-8">
    <h1 className="text-3xl py-2 font-bold">WorkOut__Log</h1>
    <nav className="flex justify-center">
        <span className="text-gray-400 hover:text-white px-4 cursor-pointer">Home</span>
        <span className="text-gray-400 hover:text-white px-4 cursor-pointer">View Logs</span>
        <span className="text-gray-400 hover:text-white px-4 cursor-pointer">About</span>
    </nav>
</header>)
}

export default Header;