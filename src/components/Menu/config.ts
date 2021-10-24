import { MenuEntry } from '@pancakeswap-libs/uikit'


const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://spookyswap.finance/swap?outputCurrency=0xfa7d8c3CccC90c07c53feE45A7a333CEC40B441B',
      },
      {
        label: 'Liquidity',
        href: 'https://spookyswap.finance/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Chart',
    icon: 'InfoIcon',
    href: 'https://kek.tools/t/0xfa7d8c3CccC90c07c53feE45A7a333CEC40B441B',
  },
  {
    label: 'Buy Witcher',
    icon: 'IfoIcon',
    href: 'https://spookyswap.finance/swap?outputCurrency=0xfa7d8c3CccC90c07c53feE45A7a333CEC40B441B',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Documentation',
    icon: 'MoreIcon',
    href: 'https://defisapphire.gitbook.io/sapphire-defi/',
  },
  {
    label: 'Metamask Bridge',
    icon: 'NftIcon',
    href: 'https://defisapphire.gitbook.io/sapphire-defi/bridge/metamask',
  },
]

export default config
