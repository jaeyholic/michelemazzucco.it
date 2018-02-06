import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ src, alt, sources, className }) => {
  const renderSource = ({ media, srcset }, i) =>
    <source key={i} media={`(${media})`} srcSet={srcset.join(', ')} />

  return (
    <picture className={className}>
      {sources && sources.map(renderSource)}
      <img src={src} alt={alt} />
    </picture>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  sources: PropTypes.arrayOf(PropTypes.shape({
    media: PropTypes.string.isRequired,
    //srcset: PropTypes.arrayOf(PropTypes.string).isRequired
  }))
}

Image.defaultProps = {
  alt: ''
}

export default Image