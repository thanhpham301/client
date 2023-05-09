import Nav from "./nav"
import { Header } from "./header"

export const Layout = ({children}) => {
    return(
        <div className="flex">
            <Nav />
            <div className="w-full">
                <Header />
                {children}
            </div>
        </div>
    )
}