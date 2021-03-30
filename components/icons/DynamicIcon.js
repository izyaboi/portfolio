import React from 'react'
import Kotlin from './Kotlin'
import Android from './Android'
import Java from './Java'
import Jetpack from './Jetpack'

const Components = {
  'java': Java,
  'kotlin': Kotlin,
  'android': Android,
  'jetpack' : Jetpack
}

const DynamicIcon = ({ type }) => {
  if (typeof Components[type] !== 'undefined') {
    const Component = Components[type]
    return <Component />
  }
  return null
}

export default DynamicIcon
