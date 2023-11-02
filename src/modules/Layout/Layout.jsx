import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

const Layout = ({children}) => {
      return ( <div>
            <Nav/>
            <Header/>
            <section>
                  {children}
            </section>
      </div> );
}
 
export default Layout;