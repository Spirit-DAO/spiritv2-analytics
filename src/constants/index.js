//export const FACTORY_ADDRESS = '0x991152411A7B5A14A8CF0cDDE8439435328070dF'
export const FACTORY_ADDRESS = '0x9d3591719038752db0c8bEEe2040FfcC3B2c6B9c'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  //THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = ['https://tokens.hyperswap.fi/ftmswap.json']

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0x222d13dceb7820ae1e928a8c527c4f8e4c0ffa8b',
  '0xd46e7f33f8788f87d6017074dc4e4d781d3df91e',
  '0x223b53b64aa5f87d2de194a15701fc0bc7474a31',
]

// pair blacklist
export const PAIR_BLACKLIST = ['0xdb740f15629d07086b13fab14e49a674721199ff']

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = []
