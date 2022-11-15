
import MenuHome from '../components/MenuHome'
import {useState,useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Form,FormGroup,Label,Input} from 'reactstrap'
import {Link} from 'react-router-dom'

import axios from 'axios'
function Beer(){
    const[listBeer, setListBeer]=useState([])
    const[loading, setLoading]=useState(true)
    const[input, setInput]=useState('')
    useEffect(()=>{
        async function fetchList(){
            try {
                const response= await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${input}`);
                setListBeer(response.data)
                setLoading(false)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchList();
    },[input])
    function pesquisa(e){
        console.log(e.target.value)
        setInput(e.target.value)
    }
    return(
        <div className='tudo'>  
            <MenuHome/>
            <Form>
            <FormGroup>
                <Label for="exampleSearch">
                    Search
                </Label>
                <Input id="exampleSearch" onChange={pesquisa}  name="search" placeholder="Pesquise uma cerveja" type="search" />
            </FormGroup>
            </Form>
            {loading?<Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>:
            listBeer.map((obj)=><div className='allbeers' key={listBeer.indexOf(obj)}><Link to={`/${obj._id}`} style={{textDecoration:'none',color:'black'}}>
                <Card body color="secondary" outline style={{ width: '50rem',margin:'10px',}}>
                <div className='insideCard'>
                <img src={obj.image_url} alt='beer' width={80}/> 
                <div className='cardb'>
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
                </div>   
                </div>
                </Card>
            </Link>
            </div>    
            )}
        </div>
    )
}
export default Beer;