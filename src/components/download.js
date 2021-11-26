import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './download.module.css'

const Download = (props) => {
  return (
    <div className={styles['StoreBanner']}>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className={` ${styles['image']} ${projectStyles['button']} `}
      />
    </div>
  )
}

Download.defaultProps = {
  image_alt1: 'image',
  image_src1: '/playground_assets/google-play-badge-200h.png',
}

Download.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Download
