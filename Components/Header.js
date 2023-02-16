import React from "react"
export default React.memo(function Header() {
    console.log("header rendered")
    return (
        <header>HEADER</header>
    )
})