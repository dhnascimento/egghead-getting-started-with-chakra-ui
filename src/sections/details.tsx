import {
    FormControl,
    FormLabel,
    Input,
    VStack,
    Heading,
    Text,
    SimpleGrid,
    GridItem,
    Select,
    Checkbox,
    Button,
    useBreakpointValue
} from "@chakra-ui/react";

const Details = () => {
    const colsSpan = useBreakpointValue({ base: 2, md: 1 });
    return (
        <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
        >
            <VStack
                spacing={3}
                alignItems="flex-start"
            >
                <Heading size="2xl">Your Details</Heading>
                <Text>If you already have an account, click here to log in.</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={colsSpan}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colsSpan}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Doe" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="Blvd. Broken Dreams 21" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colsSpan}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="San Francisco" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colsSpan}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select >
                            <option value="usa">United States of America</option>
                            <option value="can">Canada</option>
                            <option value="brl">Brazil</option>
                            <option value="mex">Mexico</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Ship to billing address</Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button size="lg" w="full">Place Order</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
}

export default Details;