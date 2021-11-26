import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './feature-card.module.css'

const FeatureCard = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <h5 className={` ${styles['text']} ${projectStyles['headline5']} `}>
        {props.title}
      </h5>
    </div>
  )
}

FeatureCard.defaultProps = {
  title: 'Title',
  image_src: '/playground_assets/01.svg',
  image_alt: 'image',
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard
