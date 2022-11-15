
import beer from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import {Link} from 'react-router-dom'
import{Card,CardBody,CardTitle,CardText} from 'reactstrap'
function Home(){

    return(
        <div className='principal'>

            <Card
            style={{width: '50rem',margin:50,boxShadow:'0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'}}>
            <img
                alt="Sample"
                src={beer}
                />
                <CardBody>
                    <Link to={'/beers'} style={{textDecoration:'none',color:'black'}}>
                        <CardTitle tag="h2">
                        All Beers
                        </CardTitle>
                    </Link>
                    <CardText>
                        Pesquise todas as cervejas já cadastradas pelos cervejeiros ao redor do mundo.
                    </CardText>
                </CardBody>
            </Card>
            <Card style={{width: '50rem',margin:50,boxShadow:'0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'}}>
            <img alt="Sample" src={randomBeer}/>
                <CardBody>
                <Link to={'/random-beer'} style={{textDecoration:'none',color:'black'}}>
                    <CardTitle tag="h2">
                    Random Beer
                    </CardTitle>
                </Link>
                    <CardText>
                        Tome uma cerveja aleatória, para quebrar a rotina.
                    </CardText>
                </CardBody>
            </Card>
            <Card style={{width: '50rem',margin:50,boxShadow:'0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'}}>
            <img alt="Sample" src={newBeer}/>
                <CardBody>
                    <Link to={'/new-beer'} style={{textDecoration:'none',color:'black'}}>
                        <CardTitle tag="h2">
                        New Beer
                        </CardTitle>
                    </Link>
                    <CardText>
                        Cadastre uma cerveja especial para o seu paladar.
                    </CardText>
                </CardBody>
            </Card> 
        </div>
    )
}
export default Home;