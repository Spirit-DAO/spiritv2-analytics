import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gateway.thegraph.com/api/dc01828428d23395fcb920aec70a7c01/subgraphs/id/Ep5zE5UYH2ShGPt1wMJkhySw7KKsn3wxXtq2hHpK4VU9',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
    //uri: 'https://ftmhlth.hyperswap.fi/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

/*
export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
    //uri: 'https://api.thegraph.com/subgraphs/name/eerieeight/spookyswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})
*/
export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    //uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
    uri: 'https://api.thegraph.com/subgraphs/name/matthewlilley/fantom-blocks',
    //uri: 'https://ftmgraph.hyperswap.fi/subgraphs/name/ftm-blocks',
  }),
  cache: new InMemoryCache(),
})
