import { useCallback, useState } from '@lynx-js/react'

import './App.css'

export function App() {

  const [display, setDisplay] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [operand, setOperand] = useState<string | null>(null);

  const handleTap = useCallback((value: string) => {
    if (value === 'AC') {
      setDisplay('0');
      setOperator(null);
      setOperand(null);
      return;
    }
    
    if (value === '±') {
      setDisplay(display[0] === '-' ? display.slice(1) : '-' + display);
      return;
    }

    if (value === '%') {
      setDisplay((parseFloat(display) / 100).toString());
      return;
    }

    if (['÷', 'x', '-', '+'].includes(value)) {
      setOperator(value);
      setOperand(display);
      setDisplay('0');
      return;
    }

    if (value === '=') {
      if (operator && operand) {
        const num1 = parseFloat(operand);
        const num2 = parseFloat(display);
        let result = 0;
        switch (operator) {
          case '÷':
            result = num1 / num2;
            break;
          case 'x':
            result = num1 * num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '+':
            result = num1 + num2;
            break;
        }
        setDisplay(result.toString());
        setOperator(null);
        setOperand(null);
      }
      return;
    }

    if (value === '.') {
      if (!display.includes('.')) {
        setDisplay(display + value);
      }
      return;
    }

    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }

  }, [display, operator, operand]);

  return (
    <view className="body">
      <view className="calculator">
        <view className="display"><text>{display}</text></view>
        <view className="buttons">
          <view className="row">
            <view className="btn gray" bindtap={() => handleTap('AC')}><text>AC</text></view>
            <view className="btn gray" bindtap={() => handleTap('±')}><text>±</text></view>
            <view className="btn gray" bindtap={() => handleTap('%')}><text>%</text></view>
            <view className="btn orange" bindtap={() => handleTap('÷')}><text>÷</text></view>
          </view>
          <view className="row">
            <view className="btn" bindtap={() => handleTap('7')}><text>7</text></view>
            <view className="btn" bindtap={() => handleTap('8')}><text>8</text></view>
            <view className="btn" bindtap={() => handleTap('9')}><text>9</text></view>
            <view className="btn orange" bindtap={() => handleTap('x')}><text>x</text></view>
          </view>
          <view className="row">
            <view className="btn" bindtap={() => handleTap('4')}><text>4</text></view>
            <view className="btn" bindtap={() => handleTap('5')}><text>5</text></view>
            <view className="btn" bindtap={() => handleTap('6')}><text>6</text></view>
            <view className="btn orange" bindtap={() => handleTap('-')}><text>-</text></view>
          </view>
          <view className="row">
            <view className="btn" bindtap={() => handleTap('1')}><text>1</text></view>
            <view className="btn" bindtap={() => handleTap('2')}><text>2</text></view>
            <view className="btn" bindtap={() => handleTap('3')}><text>3</text></view>
            <view className="btn orange" bindtap={() => handleTap('+')}><text>+</text></view>
          </view>
          <view className="row">
            <view className="btn zero" bindtap={() => handleTap('0')}><text>0</text></view>
            <view className="btn" bindtap={() => handleTap('.')}><text>.</text></view>
            <view className="btn orange" bindtap={() => handleTap('=')}><text>=</text></view>
          </view>
        </view>
      </view>
    </view>
  )
}
