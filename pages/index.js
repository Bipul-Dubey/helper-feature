import Page from '@/components/common/Page';
import ToolCard from '@/components/Tools/ToolCard';
import { TOOL_List } from '@/constant/tools';
import { Card, Container, Grid, Paper, Stack, Typography } from '@mui/material';

export default function Home() {
  const tools = [
    { name: 'Hammer', description: 'A tool for driving nails.', price: '$10' },
    {
      name: 'Screwdriver',
      description: 'A tool for driving screws.',
      price: '$8',
    },
    {
      name: 'Wrench',
      description: 'A tool for gripping and turning.',
      price: '$15',
    },
    { name: 'Drill', description: 'A tool for making holes.', price: '$50' },
  ];
  return (
    <Page>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            color: '#7D7D7D',
            gap: 1,
          }}
        >
          <Typography variant="h4" align="center" lineHeight={1}>
            All the tools you need in one place
          </Typography>
          <Typography align="center" variant="h6" lineHeight={1}>
            Simplify your tasks with ease! Whether it's converting, organizing,
            or managing, we've got you covered with fast and free solutions.
          </Typography>
        </Stack>

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {TOOL_List.map((tool, index) => (
              <ToolCard tool={tool} />
            ))}
          </Grid>
        </Container>
      </Stack>
    </Page>
  );
}
