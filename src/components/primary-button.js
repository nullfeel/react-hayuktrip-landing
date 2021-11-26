import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './primary-button.module.css'

const PrimaryButton = (props) => {
  return (
    <div className={styles['container']}>
      <button
        href="https://github.com/nullfeel/hayuktrip_app"
        className={` ${styles['button']} ${projectStyles['mediumLabel']} ${projectStyles['button']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  button: 'Button',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryButton
