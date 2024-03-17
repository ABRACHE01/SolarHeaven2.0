import { Card, Group, Text, Image, Button ,  SimpleGrid } from '@mantine/core';


import { Link } from 'react-router-dom';

const ServiceCard = ({data}:any) => {

  const urlWithId = `/services/${data.id}`;
  const images = [
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  ];

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
       <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text  fw={500}>{data.name}</Text>
        </Group>
      </Card.Section>
      <Text mt="sm" c="dimmed" size="sm">
        <Text span inherit c="var(--mantine-color-anchor)">
          category
        </Text>
        <Text>
        {data.description}
        </Text>
      </Text>

      <Card.Section mt="sm">
        <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
      
      <Link to={urlWithId} className='no-underline'>
      <Button color="blue" mt="md" fullWidth radius="md">
        Book service
      </Button>
      </Link>
    </Card>
    )
}

export default ServiceCard
