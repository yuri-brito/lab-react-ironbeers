import {Navbar,NavbarBrand} from 'reactstrap'
import {Link} from 'react-router-dom'
import home from '../assets/home.png'

function MenuHome(){
    return(
        <header className='centralizar'>
            <Link to={'/'} style={{width:'100%'}}>
            
                <Navbar className="my-2" color="primary" dark>
                    <div className='botaoHome'>
                        <img alt="logo" src={home} style={{height: 40,width: 40}}/>       
                    </div>
                </Navbar>
            </Link>
        </header>
    )
}
export default MenuHome;