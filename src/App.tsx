import { useCallback, useEffect, useState } from '@lynx-js/react'

import './App.css'
import arrow from './assets/arrow.png'
import lynxLogo from './assets/lynx-logo.png'
import reactLynxLogo from './assets/react-logo.png'

export function App() {
  const [alterLogo, setAlterLogo] = useState(false)

  useEffect(() => {
    console.info('Hello, ReactLynx')
  }, [])

  const onTap = useCallback(() => {
    'background only'
    setAlterLogo(!alterLogo)
  }, [alterLogo])

  return (
    <view className="body">
      <view className="calculator">
        <view className="display"><text>0</text></view>
        <view className="buttons">
          <view className="row">
            <view className="btn gray"><text>AC</text></view>
            <view className="btn gray"><text>±</text></view>
            <view className="btn gray"><text>%</text></view>
            <view className="btn orange"><text>÷</text></view>
          </view>
          <view className="row">
            <view className="btn"><text>7</text></view>
            <view className="btn"><text>8</text></view>
            <view className="btn"><text>9</text></view>
            <view className="btn orange"><text>x</text></view>
          </view>
          <view className="row">
            <view className="btn"><text>4</text></view>
            <view className="btn"><text>5</text></view>
            <view className="btn"><text>6</text></view>
            <view className="btn orange"><text>-</text></view>
          </view>
          <view className="row">
            <view className="btn"><text>1</text></view>
            <view className="btn"><text>2</text></view>
            <view className="btn"><text>3</text></view>
            <view className="btn orange"><text>+</text></view>
          </view>
          <view className="row">
            <view className="btn zero"><text>0</text></view>
            <view className="btn"><text>.</text></view>
            <view className="btn orange"><text>=</text></view>
          </view>
        </view>
      </view>
    </view>
  )
}
