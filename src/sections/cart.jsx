import {
    VStack,
    Heading,
    Divider,
    Text,
    Image,
    HStack,
    Stack,
    AspectRatio
} from "@chakra-ui/react";

const Cart = () => {
    return (
        <VStack
            w="full"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
            bg="gray.50"
        >
            <VStack
                spacing={3}
                alignItems="flex-start"
            >
                <Heading size="2xl">Your Cart</Heading>
                <Text>If price is too hard on your eyes, try changing the theme</Text>
            </VStack>
            <HStack spacing={6} w="full" alignItems="center">
                <AspectRatio ratio={1} w={24}>
                    <Image boxSize="100px" src="/images/skate.jpg" alt="skateboard" />
                </AspectRatio>
                <Stack w="full" direction="row" justifyContent="space-between" alignItems="center">
                    <VStack w="full" alignItems="flex-start" spacing={0}>
                        <Heading size="sm">Penny Board</Heading>
                        <Text>PNYCOMP27541</Text>
                    </VStack>
                    <Heading size="sm" textAlign="end">$119.00</Heading>
                </Stack>
            </HStack>
            <VStack w="full" spacing={4} alignItems="stretch">
                <HStack justifyContent="space-between">
                    <Text color="gray.600">Subtotal</Text>
                    <Heading size="sm">$119.00</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color="gray.600">Shipping</Text>
                    <Heading size="sm">$19.99</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color="gray.600">Taxes (estimated)</Text>
                    <Heading size="sm">$23.80</Heading>
                </HStack>
                <Divider />
                <HStack justifyContent="space-between">
                    <Text color="gray.600">Total</Text>
                    <Heading size="lg">$162.79</Heading>
                </HStack>
            </VStack>
        </VStack>
    );
}

export default Cart;