import React from 'react'
import styled, { withTheme } from 'styled-components'
import { BarLoader, FadeLoader } from 'react-spinners'


const Loader = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const override = {
  width: "300px ",
  marginInline: "12px",
  borderRadius: "7px",
}

const LoadingBox = (props) => {
  return (
    <Loader height={props.height} >
      {props.bar ? <BarLoader color={props.theme.tertiary} height={10} cssOverride={override} />
      : <FadeLoader
          color={props.theme.tertiary}
          height={15}
          width={5}
          radius={2}
          margin={1}
          speedMultiplier="0.8"
        />
    }
    </Loader>
  )
}

export default withTheme(LoadingBox)