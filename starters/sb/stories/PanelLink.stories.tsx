import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PanelLink } from '@cieloazul310/gatsby-theme-aoi-components';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'PanelLink',
  component: PanelLink,
} as ComponentMeta<typeof PanelLink>;

export function Basic() {
  return (
    <Stack spacing={2}>
      <PanelLink href="/" disableMargin>
        Top
      </PanelLink>
      <PanelLink href="https://cieloazul310.github.io" disableMargin>
        External
      </PanelLink>
      <PanelLink
        href="https://cieloazul310.github.io"
        disableBorder
        disableMargin
      >
        Borderless
      </PanelLink>
      <PanelLink
        href="https://www4.targma.jp/jwatcher/2022/12/13/post10218/"
        disableMargin
      >
        【ニュース】Jリーグ、第４回社員総会及び実行委員会を開催。「どのエリアでもいい選手がまずは地元のクラブに魅力を感じてそこから世界のサッカーを見るというような、サッカーの世界では当たり前のことを日本国内でもしっかりと見せていけるようにしていかないといけないよね、という事をみんなで話をしました（野々村チェアマン）」
      </PanelLink>
      <PanelLink href="mailto:hoge@hoge.com" disableMargin>
        Mail
      </PanelLink>
      <PanelLink href="blob:hoge.png" download disableMargin>
        Download
      </PanelLink>
      <PanelLink href="#section" disableMargin>
        To section
      </PanelLink>
    </Stack>
  );
}
