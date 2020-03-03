import React from 'react'

import Button from './Button'

export default class ButtonSet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { id, property, set, value, handleValueChange } = this.props
    let buttons = []

    set.map((option, i) => {
      buttons.push(
        <Button
          id={id}
          property={property}
          option={option}
          current={value}
          handleClick={handleValueChange}
          key={i}
        />
      )
    })

    return <div className="ButtonSet">{buttons}</div>
  }
}
