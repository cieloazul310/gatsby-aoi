import * as React from 'react';
import Button from '@mui/material/Button';
import {
  Layout,
  Article,
  Section,
  SectionDivider,
  H3,
  Paragraph,
} from '@cieloazul310/gatsby-theme-aoi';
import {
  useAppState,
  useDispatch,
} from '../@cieloazul310/gatsby-theme-aoi-top-layout/utils/AppStateContext';

function Page2() {
  const { count } = useAppState();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({ type: 'INCREMENT' });
  };
  return (
    <Layout title="Page 2">
      <article>
        <Article>
          <Section>
            <H3>Page 2</H3>
            <Paragraph>This is Gatsby Aoi Theme Demo Page 2.</Paragraph>
          </Section>
          <SectionDivider />
          <Section>
            <Paragraph>Count is {count}</Paragraph>
            <Button variant="contained" onClick={onClick}>
              Inremenet
            </Button>
          </Section>
        </Article>
      </article>
    </Layout>
  );
}

export default Page2;
