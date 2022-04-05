import Header from './Header';
import Footer from './Footer';
import './layout.css';

const Layout = ({children}) => {
    return(
        <>
            <Header />
                <p>Content</p>
                {children}
            <Footer />
        </>
    )
}

export default Layout;