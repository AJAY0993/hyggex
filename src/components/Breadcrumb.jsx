import { GoHome } from "react-icons/go"
import LessThan from "./LessThan"

function Breadcrumb() {
  return (
    <nav className="flex items-center my-8">
      <GoHome className=" aspect-square h-5" />
      <ul className="flex gap-2">
        <BreadCrumbLink>Flashcard</BreadCrumbLink>
        <BreadCrumbLink>Flashcard</BreadCrumbLink>
        <BreadCrumbLink type="bold">Relation and Functions</BreadCrumbLink>
      </ul>
    </nav>
  )
}

function BreadCrumbLink({ type = "normal", children }) {
  if (type === "normal") {
    return (
      <li className="text-lg flex items-center">
        <LessThan />
        {children}
      </li>
    )
  }
  if (type === "bold") {
    return (
      <li className="text-lg  font-medium flex items-center">
        <LessThan />
        {children}
      </li>
    )
  }
}

export default Breadcrumb
