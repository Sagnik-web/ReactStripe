import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51JnFgQSCvEjGDAqSKcbaEgKbSvmu1bG8lNR8SoFxnq7ToRYK0WuHaWExZmNjcRVaygJ53ORZoESJvpId7kT4Fo87007zpx3MiG"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
