import { Card, Image,Button} from '@mantine/core';
import { Link } from 'react-router-dom';

const DepartmentCard = ({data}:any) => {


  const urlWithId = `/departments/${data.id}`;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Link to={urlWithId} className='no-underline'>
      <Button color="blue" fullWidth mt="md" radius="md">
        {data.name}
      </Button>
      </Link>
    </Card>
  );
}

export default DepartmentCard

