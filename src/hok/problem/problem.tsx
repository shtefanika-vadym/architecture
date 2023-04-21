import type { ComponentType, FC } from 'react'
import { cloneElement, useMemo } from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const useConnection = () => {
  return 'connection'
}

interface IProps {
  props: any
  children: JSX.Element
}

const StripeProvider: FC<IProps> = ({ children, props }) => {
  const connection = useConnection()
  const stripePromise = useMemo(() => loadStripe(connection), [connection])

  return (
    <Elements stripe={stripePromise}>
      {cloneElement(children, { ...props, stripePromise })}
    </Elements>
  )
}

export default StripeProvider