import type { ComponentType, FC } from 'react'
import { useMemo } from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const useConnection = () => {
  return 'connection'
}

export const withStripe = <T extends object>(Component: ComponentType<T>): FC<T> => {
  const WithStripe: FC<T> = (props) => {
    const connection = useConnection()
    const stripePromise = useMemo(() => loadStripe(connection), [connection])

    return (
      <Elements stripe={stripePromise}>
        <Component {...props} stripePromise={stripePromise} />
      </Elements>
    )
  }

  return WithStripe
}
