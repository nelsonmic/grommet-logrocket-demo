import './main.css';
import { Box, Carousel, Image, Heading, Text, TextInput, FormField, Button } from 'grommet';
import { Google } from 'grommet-icons'

function App() {
  return (
    <div className="App">
      <Box
        direction='row'
        height="100vh"
      >
        <Box width="60%" >
          <Carousel controls={false} play={3000} height="100vh" >
            <Image fit="cover" src="https://images.unsplash.com/photo-1668063497279-7ecb0f0ffa8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            <Image fit="cover" src="https://images.unsplash.com/photo-1639332793139-32eed37bdc99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
            <Image fit="cover" src="https://images.unsplash.com/photo-1655742260938-82ab000acc2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
          </Carousel>
        </Box>

        <Box width="40%" height="100vh"  pad="xlarge" background="light-3" justify='center'>
          <Box width="80%" fill="horizontal" align='center' >
            <Box as="span" fill="horizontal">
              <Heading
                responsive={true}
                textAlign="start"
                size="xsmall"
                margin="none"
              >Create an account</Heading>
              <Text
                textAlign="start"
                size="14px"
                margin={{
                  vertical: "10px"
                }}
              >Let's get started with your 30 day free trial</Text>
            </Box>

            <Box margin={{
              vertical: "2em"
            }}
              fill="horizontal"
            >

              <FormField
                margin={{
                  vertical: ".5em"
                }}
              >
                <TextInput placeholder="Name" size="14px"/>
              </FormField>
              <FormField
                margin={{
                  vertical: ".5em"
                }}
              >
                <TextInput placeholder="Email" type="email" size="14px" />
              </FormField>
              <FormField
                margin={{
                  top: ".5em",
                  bottom:"2em"
                }}
     
              >
                <TextInput placeholder="Password" type="password" size="14px" />
              </FormField>

              <Button 
              primary 
              label="Create account"
                margin={{
                  vertical: ".5em",
                }}
                color="#101727"
                style={{padding:".5em", borderRadius:"8px", fontSize:"14px"}}
              />
              <Button 
              icon={ <Google />}  
              label="Sign up with Google"
                style={{ padding: ".5em", borderRadius: "8px", fontSize: "14px", borderColor:"#AEAFB860" }}
                margin={{
                  bottom: "1.5em",
                }}
              />

              <Box as ="span" >
                <Text size='14px' color="#AEAFB8" textAlign='center'>Already have an account? <Button href="/" style={{fontWeight:"900", color:"#01010180"}}>Log in</Button></Text>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
