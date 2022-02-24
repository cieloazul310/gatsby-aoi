# Gatsby Theme Aoi Layout API

Gatsby Theme Aoi Layout は Gatsby Theme Aoi のためのレイアウトパッケージです。

[![npm version](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-layout.svg)](https://badge.fury.io/js/@cieloazul310%2Fgatsby-theme-aoi-layout)

## Import

```tsx
import { Layout } from '@cieloazul310/gatsby-theme-aoi';
```

レイアウトは `@cieloazul310/gatsby-theme-aoi` からインポートできます。

### Getting Started

```tsx
import { Layout } from '@cieloazul310/gatsby-theme-aoi';

function Page() {
  return (
    <Layout title="Page Title">
      {...children}
    </Layout>
  );
}
```

### Props

| name                  | type              | default | description |
|-----------------------|-------------------|---------|-------------|
| `children`            | `React.ReactNode`             | **Required**|
| `title?`              | `string`                      | `undefiend` | title for `Header` and `SEO` |
| `description?`        | `string`                      | `undefiend` | for `SEO` |
| `keywords?`           | `string[]`                    | `undefiend` | for `SEO` |
| `image?`              | `string`                      | `undefiend` | for `SEO` |
| `loading?`            | `boolean`                     | `false` | display `LinearProgress` |
| `componentViewports?` | `Partial<ComponentViewports>` | |
| `drawerWidth?`        | `number`                      | `280` |
| `tabSticky?`          | `boolean`                     | `false` |
| `drawerContents?`     | `React.ReactNode`             | `undefined` | Insert contents on the top of `Drawer` |
| `tabs?`               | `React.ReactNode`             | `undefiend` | `Tab` components |
| `bottomNavigation?`   | `React.ReactNode`             | `undefiend` | Insert your `bottomNavigation` |
| `fab?`                | `React.ReactNode`             | `undefiend` | Insert your `fab` |

#### Component Viewports

`PermanentDrawer` `SwipeableDrawer` `Fab` `BottomNav` の表示を制御する

```tsx
const defaultComponentViewports = {
  permanentDrawer: 'mdUp',
  swipeableDrawer: 'smDown',
  fab: 'smDown',
  bottomNav: 'xsDown',
};
```

### Example Code

#### Full width layout Example  

```tsx
<Layout 
  componentViewports={{
    permanentDrawer: false,
    swipeableDrawer: true,
    fab: true,
  }}
>
  {...children}
</Layout>
```

<https://cieloazul310.github.io/gatsby-aoi/without-drawer/>

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/starters/gatsby-starter-aoi-theme/src/pages/without-drawer.tsx>

#### Tab layout Example  

```tsx
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Layout, TabPane } from '@cieloazul310/gatsby-theme-aoi';

function TabPage() {
  const [tab, setTab] = React.useState(0);
  const handleTab = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  const handleTabIndex = (index: number) => () => {
    setTab(index);
  };
  return (
    <Layout 
      tabSticky
      tabs={
        <Tabs value={tab} onChange={handleTab}>
          <Tab label="Tab1" />
          <Tab label="Tab2" />
          <Tab label="Tab3" />
        </Tabs>
      }
    >
      <TabPane index={0} currentTab={tab}>
        {...children}
      </TabPane>
      <TabPane index={1} currentTab={tab}>
        {...children}
      </TabPane>
      <TabPane index={2} currentTab={tab}>
        {...children}
      </TabPane>
    </Layout>
  );
}
```

<https://cieloazul310.github.io/gatsby-aoi/tab-page/>

Source: <https://github.com/cieloazul310/gatsby-aoi/blob/main/starters/gatsby-starter-aoi-theme/src/pages/tab-page.tsx>

### Shadowing

```shell
mkdir -p src/@cieloazul310/gatsby-theme-aoi-layout
```

```txt
.
├── gatsby-config.js
├── package.json
└── src
    ├── @cieloazul310
    │   └── gatsby-theme-aoi-layout
    │       ├── bottomnav-menu.tsx
    │       ├── menu.tsx
    │       └── DrawerInner
    │           └── DrawerFooter.tsx
    └── pages
        ├── 404.tsx
        ├── index.tsx
        └── page-2.tsx
```

#### Setting menu

```shell
cp node_modules/@cieloazul310/gatsby-theme-aoi-layout/src/menu.tsx src/@cieloazul310/gatsby-theme-aoi-layout/
```

```tsx
// src/@cieloazul310/gatsby-theme-aoi-layout/menu.tsx

const menu = [
  {
    title: 'Top',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Page 2',
    path: '/page-2/',
    icon: <SubjectIcon />,
  },
];

export default menu;
```

#### Setting bottomnav-menu

```shell
cp node_modules/@cieloazul310/gatsby-theme-aoi-layout/src/bottomnav-menu.tsx src/@cieloazul310/gatsby-theme-aoi-layout/
```

```tsx
// src/@cieloazul310/gatsby-theme-aoi-layout/bottomnav-menu.tsx

const bottomNavMenu = [
  { title: 'Top', path: '/', icon: <HomeIcon /> },
  { title: 'Page 2', path: '/page-2/', icon: <SportsHandballIcon /> },
];

export default bottomNavMenu;
```

#### Shadowing components

Example of `<DrawerFooter>` in `<DrawerInner>`

```shell
mkdir src/@cieloazul310/gatsby-theme-aoi-layout/DrawerInner

cp node_modules/@cieloazul310/gatsby-theme-aoi-layout/DrawerInner/DrawerFooter.tsx src/@cieloazul310/gatsby-theme-aoi-layout/DrawerInner/DrawerFooter.tsx
```

```tsx
// src/@cieloazul310/gatsby-theme-aoi-layout/DrawerInner/DrawerFooter.tsx

function DrawerFooter() {
  return (
    <Box>
      {...your contents}
    </Box>
  );
}

export default DrawerFooter;
```
