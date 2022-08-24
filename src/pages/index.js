import {
  Box,
  Button,
  Flex,
  Input,
  SimpleGrid,
  Table,
  Tbody,
  Thead,
  Td,
  Th,
  Tr
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Produtos = () => {

  const [name,setName] = useState("");
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const db_products = localStorage.getItem('db_products')
    ? JSON.parse(localStorage.getItem('db_products'))
    : [];

    setListProducts(db_products)
  }, []);

  const handleNewProduct = () => {
    if(!name) return;
    if(verifyProductName()) {
      return alert('Produto já cadastrado!');
    }

    const id = Math.random().toString(36).substring(2);

    if (listProducts && listProducts.length) {
      localStorage.setItem('db_products', JSON.stringify([...listProducts, { id, name }])
      );

      setListProducts([...listProducts, { id, name }]);
    } else {
      localStorage.setItem('db_products', JSON.stringify([{ id, name }]));

      setListProducts([{ id, name }])
    }

    setName('');
  };
  
  // VERIFICANDO VALIDAÇÃO DE NOME //
  const verifyProductName = () => {
    return !!listProducts.find((prod) => prod.name === name);
  };


  // REMOVENDO PRODUTO //
  const removeProduct = (id) => {
    const db_stock_outputs = localStorage.getItem('db_stock_outputs')
    ? JSON.parse(localStorage.getItem('db_stock_outputs'))
    : [];

    const db_stock_entries = localStorage.getItem('db_stock_entries')
    ? JSON.parse(localStorage.getItem('db_stock_entries'))
    : [];

    const hasOutputs = db_stock_outputs.filter((item) => item.product_id === id
  ).lenght;

    const hasEntries = db_stock_entries.filter((item) => item.product_id === id
  ).lenght;

  if (hasEntries || hasOutputs) {
    alert('Esse produto possúi movimentações!');
    return;
  }

  const newArray = listProducts.filter((prod) => prod.id !== id);

  localStorage.setItem('db_products', JSON.stringify(newArray));

  setListProducts(newArray);
}

  return (
    <Flex h='100vh' flexDirection={'column'} my={4} mx={6}>
      <Header />

      <Flex w='100%' my='6' px='6' maxW={1920} mx='auto' h='100vh'>
        <Sidebar />

        <Box w='100%'>
          <SimpleGrid minChildWidth={240} h='fit-content' spacing={6}>
            <Input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder='Nome do produto' />

            <Button w='40' onClick={handleNewProduct}>
              CADASTRAR 
            </Button>
          </SimpleGrid>

          <Box overflowY='auto' height='80vh'>
            <Table mt='6'>
              <Thead>
                <Tr>
                  <Th fontWeight='bold' fontSize='14px'>
                    Nome
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {listProducts.map((item, i) => (
                  <Tr key={i}>
                    <Td fontSize={20} color='gray.500'>{item.name}</Td>
                    <Td textAlign='end'>
                      <Button
                        p='2'
                        h='auto'
                        fontSize={17}
                        color='red.500'
                        fontWeight='bold'
                        onClick={() => removeProduct(item.id)}
                      >
                        DELETAR
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Produtos;