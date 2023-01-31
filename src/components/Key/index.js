import React from 'react'
import {KeyContainer, BulletPoint} from './style'

function Key() {
  return (
    <KeyContainer role = 'list'>
        <BulletPoint role='listItem'>
            Not completed
        </BulletPoint>
        <BulletPoint role='listItem'>
             Completed
        </BulletPoint>
    </KeyContainer>
  )
}

export default Key