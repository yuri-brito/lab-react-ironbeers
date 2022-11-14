
import MenuHome from '../components/MenuHome'
import {useState,useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {Card,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'

import axios from 'axios'
function Beer(){
    const[listBeer, setListBeer]=useState([])
    const[loading, setLoading]=useState(true)
    useEffect(()=>{
        async function fetchList(){
            try {
                const response= await axios.get('https://ih-beers-api2.herokuapp.com/beers');
                setListBeer(response.data)
                setLoading(false)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchList();

    },[])
    console.log(listBeer)
    return(
        <div>  
            <MenuHome/>
            {loading?<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>:
            listBeer.map((obj)=><div className='allbeers' key={listBeer.indexOf(obj)}><img src={obj.image_url} width={90}/>
                <Card
                body
                color="secondary"
                outline
                style={{
                    width: '18rem'
                }}
                >
                <CardBody>
                    <CardTitle tag="h5">
                    {obj.name}
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    {obj.tagline}
                    </CardSubtitle>
                    <CardText>
                        Created by:
                    {obj.contributed_by}
                    </CardText>
                </CardBody>
                </Card>
            </div>    
            )}
        </div>
    )
}
export default Beer;