import {Navbar,NavbarBrand} from 'reactstrap'
import {Link} from 'react-router-dom'
import home from '../assets/home.png'

function MenuHome(){
    return(
        <header className='centralizar'>
                <Link to={'/'}>
                    <Navbar
                        className="my-2"
                        color="primary"
                        dark>
                                <img
                                    alt="logo"
                                    src={home}
                                    style={{
                                        height: 40,
                                        width: 40
                                    }}/>

                    </Navbar>
                </Link>
            </header>
    )
}
export default MenuHome;