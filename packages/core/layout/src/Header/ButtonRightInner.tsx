import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  useSiteMetadata,
  useSocialShare,
} from '@cieloazul310/gatsby-theme-aoi-utils';

export type ButtonRightInnerProps = {
  title?: string;
};

function ButtonRightInner({ title }: ButtonRightInnerProps) {
  const { lang, social } = useSiteMetadata();
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  const github: (typeof social)[number] | undefined =
    social[social.map(({ name }) => name).indexOf('github')];
  return (
    <>
      <Tooltip title={lang === 'ja' ? 'Twitterでシェア' : 'Share On Twitter'}>
        <IconButton
          color="inherit"
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
          color="inherit"
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
            color="inherit"
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      ) : null}
    </>
  );
}

ButtonRightInner.defaultProps = {
  title: undefined,
};

export default ButtonRightInner;
