import MenuHome from '../components/MenuHome'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {Card,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'

function SingleBeer(){
    const[Beer, setBeer]=useState([])
    const[loading, setLoading]=useState(true)
    let id = useParams();
    useEffect(()=>{
        async function fetchList(){
            try {
                const response= await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id.id}`);
                setBeer(response.data)
                setLoading(false)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchList();
    },[id])
    return(
        <div>  
            <MenuHome/>
            {loading?<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>:
            <div className='allbeers'>
                <Card body color="secondary" outline style={{ width: '25rem',margin:'10px',}}>
                <img src={Beer.image_url} alt='image' width={80}/> 
                <CardBody>
                    <div className='title'>
                        <CardTitle tag="h3">
                            {Beer.name}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h3">
                            {Beer.attenuation_level}
                        </CardSubtitle>
                    </div>
                    <div className='subtitle'>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            {Beer.tagline}
                        </CardSubtitle>
                        <CardTitle tag="h6">
                        <b> {Beer.first_brewed}</b>
                        </CardTitle>
                    </div>
                    <CardText>
                        {Beer.brewers_tips}
                    </CardText>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {Beer.contributed_by}
                    </CardSubtitle>
                </CardBody>
                </Card>
            </div>
            }          
        </div>
    )
}
export default SingleBeer;