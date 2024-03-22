import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Container, SimpleGrid, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaMusic, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  const tourDates = [
    { date: "June 15", city: "New York, NY", venue: "Madison Square Garden" },
    { date: "June 20", city: "Los Angeles, CA", venue: "Staples Center" },
    { date: "June 25", city: "Chicago, IL", venue: "United Center" },
    { date: "June 30", city: "Houston, TX", venue: "Toyota Center" },
  ];

  return (
    <Box>
      <Box bg="black" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" color="white" textAlign="center">
            The Rockstars World Tour
          </Heading>
          <Text fontSize="xl" color="gray.300" textAlign="center" mt={4}>
            Get ready for an unforgettable musical experience!
          </Text>
          <Stack direction="row" spacing={4} justify="center" mt={8}>
            <Button leftIcon={<FaTicketAlt />} colorScheme="purple" size="lg">
              Buy Tickets
            </Button>
            <Button leftIcon={<FaMusic />} colorScheme="teal" size="lg">
              Listen Now
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box py={16}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={8}>
            Upcoming Tour Dates
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {tourDates.map((date, index) => (
              <Box key={index} bg="gray.100" p={6} rounded="md">
                <Heading as="h3" size="lg">
                  {date.city}
                </Heading>
                <Text fontSize="xl" fontWeight="bold" mt={2}>
                  {date.date}
                </Text>
                <Text mt={2}>{date.venue}</Text>
                <Button colorScheme="purple" size="md" mt={4}>
                  Get Tickets
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box>
        <Image src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBvbiUyMHN0YWdlfGVufDB8fHx8MTcxMTEwODM0OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Photo" />
      </Box>

      <Box bg="black" py={8}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" color="white" mb={8}>
            Connect with Us
          </Heading>
          <Stack direction="row" spacing={8} justify="center">
            <Link href="#" isExternal>
              <FaInstagram size={32} color="white" />
            </Link>
            <Link href="#" isExternal>
              <FaTwitter size={32} color="white" />
            </Link>
            <Link href="#" isExternal>
              <FaFacebook size={32} color="white" />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
