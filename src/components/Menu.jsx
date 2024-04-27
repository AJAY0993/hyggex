function Menu() {
  return (
    <div className="w-[34rem] mx-auto">
      <ul className="list-none flex justify-between px-2 mt-14">
        <MenuItem active={true}>study</MenuItem>
        <MenuItem>quiz</MenuItem>
        <MenuItem>test</MenuItem>
        <MenuItem>game</MenuItem>
        <MenuItem>others</MenuItem>
      </ul>
    </div>
  )
}

function MenuItem({ children, active }) {
  if (active) {
    return (
      <li className="text-[20px] text-left text-blue-menu-active capitalize font-bold underline">
        {children}
      </li>
    )
  }
  return (
    <li className="text-[20px] text-left text-gray-500 font-medium capitalize">
      {children}
    </li>
  )
}
export default Menu
