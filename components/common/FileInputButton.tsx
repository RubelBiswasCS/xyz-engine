import React, { useRef } from 'react'
import PropTypes from 'prop-types'

// Import Components
import { Button, Tooltip } from 'antd'

const FileInputButton = ({ children, containerStyle, size, style, onChange, title, disabled, ...rest }: any) => {
  const fileInput: any = useRef()

  // On Change
  const _onChange = (e: any, file: any) => {
    onChange(e)
    file.current.value = ''
  }

  if (disabled) {
    return (
      <Tooltip placement='top' title={ `Disabled` }>
        <Button size={ size } disabled style={{ display: 'flex', height: style?.height ?? 'auto', width: style?.width ?? '100%' }}>
          { children || (title ?? '') }
        </Button>
      </Tooltip>
    )
  }

  return (
    <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', ...containerStyle }}
    >
      <Button
        // @ts-ignore
        onClick={ () => fileInput.current.click() }
        style={{ ...fileInputButtonStyles, width: '100%', ...style }}
        { ...rest }
      >
        { title }
      </Button>
      <input
        id='fileInput'
        ref={ fileInput }
        type="file"
        style={{ display: 'none' }}
        onChange={ (e) => _onChange(e, fileInput) }
      />
    </div>
  )
}

FileInputButton.propTypes = {
  style: PropTypes.object,
  onChange: PropTypes.func,
  title: PropTypes.string
}

FileInputButton.defaultProps = {
  style: {},
  onChange: () => null,
  title: 'Import'
}

// Jsx Styles
const fileInputButtonStyles = {
  background: "#02A66A",
  border: "1px solid #1890FF",
  boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
  borderRadius: "2px",
  color: "#FFFFFF"
}

export default FileInputButton
