import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import Background from "./components/Background";

function App() {
  //return <Button colorScheme="blue">Button</Button>;
  return (
    <>
      <Background>
        <Grid
          templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        >
          <GridItem area="nav"> </GridItem>
          <Show above="lg">
            <GridItem area="aside" bg="gold">
              {" "}
              ignore
            </GridItem>
          </Show>
          <GridItem area="main" bg="coral">
            {" "}
            ignore2
          </GridItem>
        </Grid>
      </Background>
    </>
  );
}

export default App;
