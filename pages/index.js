import HeadingSubheading from '@/components/common/HeadingSubheading';
import Page from '@/components/common/Page';
import ToolCard from '@/components/Tools/ToolCard';
import { TOOL_List } from '@/constant/tools';
import { Container, Grid, Stack } from '@mui/material';

export default function Home() {
  return (
    <Page>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HeadingSubheading
          title="All the tools you need in one place"
          subtitle={`Simplify your tasks with ease! Whether it's converting, organizing, or
        managing, we've got you covered with fast and free solutions.`}
        />
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
