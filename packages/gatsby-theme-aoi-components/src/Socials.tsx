/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import MuiLink from '@mui/material/Link';
import { SvgIconProps } from '@mui/material/SVGIcon';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function SocialIcon({
  name,
  ...props
}: { name: string } & SvgIconProps) {
  if (name === 'email') return <EmailIcon {...props} />;
  if (name === 'twitter') return <TwitterIcon {...props} />;
  if (name === 'facebook') return <FacebookIcon {...props} />;
  if (name === 'github') return <GitHubIcon {...props} />;
  if (name === 'instagram') return <InstagramIcon {...props} />;
  if (name === 'youtube') return <YouTubeIcon {...props} />;
  if (name === 'linkedin') return <LinkedInIcon {...props} />;
  return <AccountCircleIcon {...props} />;
}

export function SocialLink({
  name,
  url,
  ...props
}: { name: string; url: string } & SvgIconProps) {
  return (
    <MuiLink
      color="text.secondary"
      href={name === 'email' ? `mailto:${url}` : url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      sx={{
        '&:hover': {
          color: 'secondary.main',
        },
      }}
    >
      <SocialIcon name={name} {...props} />
    </MuiLink>
  );
}
