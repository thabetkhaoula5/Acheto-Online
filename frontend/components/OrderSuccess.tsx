import { CheckCircleIcon } from './Icons'

interface OrderSuccessProps {
  order: any
  onContinue: () => void
}

export function OrderSuccess({ order, onContinue }: OrderSuccessProps) {
  const deliveryDate = new Date()
  deliveryDate.setDate(deliveryDate.getDate() + 7)

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-12 px-6 text-center max-w-md mx-auto">
      <CheckCircleIcon className="w-20 h-20" />

      <h2 className="text-2xl font-medium text-acheto-dark animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
        Order confirmed!
      </h2>

      <p className="text-sm text-acheto-muted leading-relaxed animate-fade-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
        Thank you for your purchase. Your order has been placed successfully and will be delivered within 3–5 business days.
      </p>

      <div className="bg-white rounded-xl border border-acheto-dark/10 p-5 min-w-[280px] animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
        <div className="flex justify-between py-1 text-[13px]">
          <span className="text-acheto-muted">Order number</span>
          <span className="font-medium text-acheto-dark">{order.order_number}</span>
        </div>
        <div className="flex justify-between py-1 text-[13px]">
          <span className="text-acheto-muted">Total paid</span>
          <span className="font-medium text-acheto-dark">${order.total}</span>
        </div>
        <div className="flex justify-between py-1 text-[13px]">
          <span className="text-acheto-muted">Delivery to</span>
          <span className="font-medium text-acheto-dark">{order.customer?.city || 'Tunis'}</span>
        </div>
        <div className="flex justify-between py-1 text-[13px]">
          <span className="text-acheto-muted">Estimated delivery</span>
          <span className="font-medium text-acheto-dark">{deliveryDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap justify-center animate-fade-up [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
        <button
          onClick={onContinue}
          className="bg-acheto-red text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-acheto-red-2"
        >
          Continue shopping
        </button>
        <button
          onClick={() => window.open(`/track/${order.order_number}`, '_blank')}
          className="bg-white text-acheto-dark border border-acheto-dark/18 px-6 py-2.5 rounded-lg text-sm transition-all hover:border-acheto-dark"
        >
          Track order ↗
        </button>
      </div>
    </div>
  )
}