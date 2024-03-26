import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://gateway-arbitrum.network.thegraph.com/api/faf32119514c16725e3d69d66605eb18/subgraphs/id/4FYn49PVmNeSpbW9QUX9QX9ZTx1qcB3YHfHA3Sa8ESr9E',
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
