import { BLOCKS } from '@contentful/rich-text-types'
import React from 'react'

const renderEmbeddedAssetBlock = node => {
  const alt = node.data.target.fields.description['en-US']
  const { url } = node.data.target.fields.file['en-US']
  return <img alt={alt} src={url} className="embedded-image" />
}

export const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: renderEmbeddedAssetBlock,
  },
}
