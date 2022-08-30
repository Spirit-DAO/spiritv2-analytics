import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowLeft } from 'react-feather'
import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
// import Logo from '../../assets/logo.png'
import LogoMobile from '../../assets/logo-mobile.png'
import Wordmark from '../../assets/wordmark_white.svg'

import { BasicLink } from '../Link'
import { useMedia } from 'react-use'

const TitleWrapper = styled.div`
  text-decoration: none;
  z-index: 10;
  width: 100%;
`

const UniIcon = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  & > img {
    width: 50px;
  }
  :hover {
    transform: rotate(-5deg);
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    span {
      display: none;
    }
  }
`
const BackIcon = styled(ArrowLeft)`
  color: ${({ theme }) => theme.text6};
  :hover {
    cursor: pointer;
    background-color: gray;
    border-radius: 25px;
  }
`
const ExternalLink = styled.a``

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText }) => (activeText ? 1 : 0.6)};
  color: ${({ theme }) => theme.text1};
  display: flex;
  margin-left: 12px;
  :hover {
    opacity: 1;
  }
`

export default function Title() {
  const history = useHistory()
  const below1080 = useMedia('(max-width: 1080px)')
  const below480 = useMedia('(max-width: 480px)')
  const logoWidth = below480 ? '48px' : '150px'

  return (
    <TitleWrapper>
      <Flex alignItems="center" style={{ justifyContent: 'space-between' }}>
        <RowFixed>
          <ExternalLink target="blank" href="https://beta.spiritswap.finance/home">
            <BackIcon size={30} />
          </ExternalLink>

          <UniIcon id="link" onClick={() => history.push('/')} width={logoWidth}>
            <img src={LogoMobile} alt="logo" />

            <span style={{ color: '#52D784', fontSize: '18px' }}>
              Spirit<span style={{ color: '#60D5DC' }}>Swap</span>
            </span>
          </UniIcon>
        </RowFixed>
        {below1080 && (
          <RowFixed style={{ alignItems: 'flex-end', margin: '0 20px 0 0' }}>
            <BasicLink to="/home">
              <Option activeText={history.location.pathname === '/home' ?? undefined}>Overview</Option>
            </BasicLink>
            <BasicLink to="/tokens">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'tokens' ||
                    history.location.pathname.split('/')[1] === 'token') ??
                  undefined
                }
              >
                Tokens
              </Option>
            </BasicLink>
            <BasicLink to="/pairs">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'pairs' ||
                    history.location.pathname.split('/')[1] === 'pair') ??
                  undefined
                }
              >
                Pairs
              </Option>
            </BasicLink>
            {1 == 0 && (
              <BasicLink to="/accounts">
                <Option
                  activeText={
                    (history.location.pathname.split('/')[1] === 'accounts' ||
                      history.location.pathname.split('/')[1] === 'account') ??
                    undefined
                  }
                >
                  Accounts
                </Option>
              </BasicLink>
            )}
          </RowFixed>
        )}
      </Flex>
    </TitleWrapper>
  )
}
