import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'SAPPHIRE-WFTM LP',
	
    lpAddresses: {
      97: '',
      250: '0xC0BFf8416E83E410c38B859Ac92a3268DaDc5494',
    },
    tokenSymbol: 'SAPPHIRE',
    tokenAddresses: {
      97: '',
      250: '0xfa7d8c3CccC90c07c53feE45A7a333CEC40B441B',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BOO-WFTM LP',
	
    lpAddresses: {
      97: '',
      250: '0xEc7178F4C41f346b2721907F5cF7628E388A7a58',
    },
    tokenSymbol: 'BOO',
    tokenAddresses: {
      97: '',
      250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'WFTM-WETH LP',
	
    lpAddresses: {
      97: '',
      250: '0xf0702249F4D3A25cD3DED7859a165693685Ab577',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  {
    pid: 3,
    risk: 5,
    lpSymbol: 'WFTM-USDC LP',
	
    lpAddresses: {
      97: '',
      250: '0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'WFTM-SCREAM LP',
	
    lpAddresses: {
      97: '',
      250: '0x30872e4fc4edbFD7a352bFC2463eb4fAe9C09086',
    },
    tokenSymbol: 'SCREAM',
    tokenAddresses: {
      97: '',
      250: '0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475',
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
    tokenDecimals: 18,
  },
  // {
  //   pid: 2,
  //   risk: 5,
  //   lpSymbol: 'WETH-USDC',
  //   lpAddresses: {
  //     250: '0x905dfCD5649217c42684f23958568e533C711Aa3',
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     250: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SAPPHIRE',
	
    lpAddresses: {
      97: '',
      250: '0xC0BFf8416E83E410c38B859Ac92a3268DaDc5494', // SAPPHIRE-BUSD LP
    },
    tokenSymbol: 'SAPPHIRE',
    tokenAddresses: {
      97: '',
      250: '0xfa7d8c3CccC90c07c53feE45A7a333CEC40B441B',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 14,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'OLIVE',
	otherExchange: 'Partner',
	
    lpAddresses: {
      97: '',
      250: '0xf1d412010eda1bbf09a2bcc938bc8d9ebbdc5889', // SAPPHIRE-BUSD LP
    },
    tokenSymbol: 'OLIVE',
    tokenAddresses: {
      97: '',
      250: '0xA9937092c4E2B0277C16802Cc8778D252854688A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 15,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KAVIAN',
	otherExchange: 'Partner',
	
    lpAddresses: {
      97: '',
      250: '0x08997806467F6a6fC7F1e506D6fC51Cb00C1D0b9', // SAPPHIRE-BUSD LP
    },
    tokenSymbol: 'KAVIAN',
    tokenAddresses: {
      97: '',
      250: '0x16a9aaee145f288673a0a8a8c5c224708a5284b4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 16,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'KINS',
	otherExchange: 'Partner',
	
    lpAddresses: {
      97: '',
      250: '0x27A2c9CF757424142d262fc6A736C69aF62F1159', // SAPPHIRE-BUSD LP
    },
    tokenSymbol: 'KINS',
    tokenAddresses: {
      97: '',
      250: '0x6ECED8E16eDA61E65292f019B165542A5906ecD6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 17,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'COUGAR',
	otherExchange: 'Partner',
	
    lpAddresses: {
      97: '',
      250: '0x2b5965f901f8817da4d660c64051ba8adcdc495e', // SAPPHIRE-BUSD LP
    },
    tokenSymbol: 'COUGAR',
    tokenAddresses: {
      97: '',
      250: '0x5a2e451Fb1b46FDE7718315661013ae1aE68e28C',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 6,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WFTM',
	
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC',
	
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 6,
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
	
    lpAddresses: {
      250: '0xa572bdf049382f1f98f9a430788dadd51a303969',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 9,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
	
    lpAddresses: {
      250: '0xd92206379bd8203ac38225af006bb96bf1f12412',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 10,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DAI',
	
    lpAddresses: {
      250: '0x484237bc35ca671302d19694c66d617142fbc235',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'FUSDT',
	
    lpAddresses: {
      250: '0xfdef392adc84607135c24ca45de5452d77aa10de',
    },
    tokenSymbol: 'FUSDT',
    tokenAddresses: {
      250: '0x049d68029688eAbF473097a2fC38ef61633A3C7A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 6,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
	
    lpAddresses: {
      250: '0x30409563050c718fd083b646d8a07420e789cdb4',
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      250: '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 8,
  },
  {
    pid: 13,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BOO',
	
    lpAddresses: {
      250: '0xf8cb2980120469d79958151daa45eb937c6e1ed6',
    },
    tokenSymbol: 'BOO',
    tokenAddresses: {
      250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    tokenDecimals: 18,
  },
  // {
  //   pid: 5,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     250: '0x971413902FFfa517456279aaf9f646eE4B11A8D9',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     250: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   tokenDecimals: 6,
  // },
  // {
  //   pid: 6,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     250: '0xcb0e5bfa72bbb4d16ab5aa0c60601c438f04b4ad',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     250: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   tokenDecimals: 6,
  // },
  // {
  //   pid: 7,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBTC',
  //   lpAddresses: {
  //     250: '0xff13348778cc2ced614f6f73a8e488ac11292f25', //  WBTC/eth
  //   },
  //   tokenSymbol: 'WBTC',
  //   tokenAddresses: {
  //     250: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   tokenDecimals: 8,
  // },
]

export default farms
