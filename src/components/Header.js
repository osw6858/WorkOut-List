const Header = () => {
    return(<header className="bg-gray-800 text-white py-4 px-8">
    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl py-2 font-bold">WorkOut__Log</h1>
    <nav className="flex justify-center">
        <span className="text-gray-400 hover:text-white px-4 cursor-pointer">홈</span>
        <span className="text-gray-400 hover:text-white px-4 cursor-pointer">운동 기록</span>
    </nav>
</header>)
}

export default Header;