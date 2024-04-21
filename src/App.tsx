import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";

function App() {
  //return <Button colorScheme="blue">Button</Button>;
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        {" "}
        <NavigationBar />
      </GridItem>
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
  );
}

export default App;
