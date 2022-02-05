import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

import {
  useSiteMetadata,
  useSocialShare,
} from '@cieloazul310/gatsby-theme-aoi-utils';

type Props = {
  title?: string;
} & Partial<Pick<IconButtonProps, 'color'>>;

function ShareButtons({ title, color = 'default' }: Props) {
  const { lang, social } = useSiteMetadata();
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  const github: typeof social[number] | undefined =
    social[social.map(({ name }) => name).indexOf('github')];
  return (
    <div>
      <Tooltip title={lang === 'ja' ? 'Twitterでシェア' : 'Share On Twitter'}>
        <IconButton
          color={color}
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={lang === 'ja' ? 'Facebookで共有' : 'Share on Facebook'}>
        <IconButton
          color={color}
          href={fbUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      {github ? (
        <Tooltip title="GitHub">
          <IconButton
            color={color}
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </div>
  );
}

ShareButtons.defaultProps = {
  title: undefined,
};

export default ShareButtons;
