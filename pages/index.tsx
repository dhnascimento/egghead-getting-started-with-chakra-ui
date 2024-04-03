import { Container, Flex, VStack } from "@chakra-ui/react";
import Details from "../src/sections/details.jsx";
import Cart from "../src/sections/cart.jsx";

const IndexPage = () => (
    <Container maxW="container.xl" p={0}>
        <Flex h="100vh" py={20}>
            <Details />
            <Cart />
        </Flex>
    </Container>
);

export default IndexPage;
