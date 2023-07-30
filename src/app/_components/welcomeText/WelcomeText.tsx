'use client'
import { useCurrentEndpointText } from "../../../hooks/useCurrentEndpointText"

const WelcomeText = () => {
  const endpointText = useCurrentEndpointText()

  return (
    <>
      <p className='mb-8'>{`The app is currently working in ${endpointText} network`}</p>
    </>
  )
}

export { WelcomeText }
