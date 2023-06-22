import { useContext } from "react"
import { AuthContext } from "./AuthContext"

function SectionAuth({ children }) {
  const token = useContext(AuthContext).token

  if (!token) return

  return (
    <>
        { children }
    </>
  )
}

export default SectionAuth