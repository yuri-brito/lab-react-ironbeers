
import MenuHome from '../components/MenuHome'
import {Form, Button,Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';
function NewBeer(){
    const navigate=useNavigate();
    const initialBody={'name':'','tagline':'','description':'','first_brewed':'','brewers_tips':'','attenuation_level':0,'contributed_by':''}
    const[body,setBody]=useState(initialBody)
    function handleChange(e){
        if (e.target.name==='attenuation_level'){
            setBody({...body,[e.target.name]:Number(e.target.value)})
        }
        else{
            setBody({...body,[e.target.name]:e.target.value})
        }
        console.log(body)
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log(body)
        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',body)
            navigate('/beers')
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className='tudo'>
            <MenuHome/>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label for="exampleEmail" style={{marginTop:'5%',textAlign:'left',width:'95%'}}>
                        <b>Name</b>
                        </Form.Label>
                        <Form.Control
                        id="exampleEmail"
                        name="name"
                        placeholder="Nome da Cerveja"
                        type="text"
                        onChange={handleChange}
                        style={{borderRadius:'20px',width:'80%'}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="exampleEmail" style={{marginTop:'5%',textAlign:'left',width:'95%'}}>
                            <b>Tagline</b>
                        </Form.Label>
                        <Form.Control
                        id="exampleEmail"
                        name="tagline"
                        placeholder="TAGLINE"
                        type="text"
                        onChange={handleChange}
                        style={{borderRadius:'20px',width:'80%'}}
                        />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label for="exampleText" style={{marginTop:'5%',textAlign:'left',width:'95%'}}>
                        <b>Description</b>
                        </Form.Label>
                        <Form.Control
                        id="exampleText"
                        name="description"
                        placeholder='Descrição da cerveja'
                        as="textarea"
                        onChange={handleChange}
                        style={{borderRadius:'20px',width:'80%'}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label for="exampleEmail" style={{marginTop:'5%',textAlign:'left',width:'95%'}}>
                           <b>First Brewed</b> 
                        </Form.Label>
                        <Form.Control
                        id="exampleEmail"
                        name="first_brewed"
                        placeholder="First brewed"
                        type="text"
                        onChange={handleChange}
                        style={{borderRadius:'20px',width:'80%'}}
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label for="exampleEmail" style={{marginTop:'5%',textAlign:'left',width:'95%'}}>
                            <b>Brewers Tips</b>
                        </Form.Label>
                        <Form.Control
                        id="exampleEmail"
                        name="brewers_tips"
                        placeholder="Brewers tips"
                        type="text"
                        onChange={handleChange}
                        style={{borderRadius:'20px',width:'80%'}}
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label for="exampleEmail" style={{marginTop:'5%',textAlign:'left',width:'95%'}}>
                            <b>Attenuation Level</b> 
                        </Form.Label>
                        <Form.Control
                        id="exampleEmail"
                        name="attenuation_level"
                        placeholder="Attenuation level"
                        type="number"
                        onChange={handleChange}
                        style={{borderRadius:'20px',width:'80%'}}
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label for="exampleEmail" style={{marginTop:'5%',textAlign:'left',width:'95%'}}>
                            <b>Contributed By</b> 
                        </Form.Label>
                        <Form.Control
                        id="exampleEmail"
                        name="contributed_by"
                        placeholder="Contributed by"
                        type="text"
                        onChange={handleChange}
                        style={{borderRadius:'20px',width:'80%'}}
                        />
                    </Form.Group>
                    <Button className='bg-primary' type='submit' style={{margin:'1%'}}>
                        Adicionar
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
export default NewBeer;