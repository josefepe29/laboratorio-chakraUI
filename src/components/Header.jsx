import { Box, Button, Image, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box
        boxSize="xl"
        bgImage="https://img.freepik.com/fotos-premium/banner-universal-linkedin-paisaje-montana-al-atardecer_198208-832.jpg?w=2000"
        color="white"
        height="300px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Text
            textAlign="center"
            fontSize="30px"
            fontFamily="Montserrat"
            fontWeight="lighter"
          >
            DOMINA EL TERRENO
          </Text>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={6}
          >
            <Button
              padding="10px"
              background="none"
              color="white"
              border="1px solid white"
              cursor="pointer"
              _hover={{
                bgColor: "white",
                color: "black",
              }}
            >
              VER DETALLES
            </Button>
            <Button
              padding="10px"
              background="none"
              color="white"
              border="1px solid white"
              cursor="pointer"
              _hover={{
                bgColor: "white",
                color: "black",
              }}
            >
              VER VIDEO
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
