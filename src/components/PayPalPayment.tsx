import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PayPalPaymentProps {
  amount: number;
  currency?: string;
  description: string;
  onSuccess: (details: any) => void;
  onError: (error: any) => void;
  onCancel?: () => void;
  disabled?: boolean;
}

const PayPalButtonWrapper: React.FC<PayPalPaymentProps> = ({
  amount,
  currency = 'USD',
  description,
  onSuccess,
  onError,
  onCancel,
  disabled = false
}) => {
  const [{ isPending }] = usePayPalScriptReducer();
  const [isProcessing, setIsProcessing] = useState(false);

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount.toString(),
          },
          description: description,
        },
      ],
    });
  };

  const onApprove = async (data: any, actions: any) => {
    setIsProcessing(true);
    try {
      const details = await actions.order.capture();
      onSuccess(details);
    } catch (error) {
      onError(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const onErrorHandler = (error: any) => {
    console.error('PayPal error:', error);
    onError(error);
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="ml-2 text-muted-foreground">Loading PayPal...</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onErrorHandler}
        onCancel={onCancel}
        disabled={disabled || isProcessing}
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
          height: 50,
        }}
      />
      {isProcessing && (
        <div className="flex items-center justify-center mt-4 p-4 bg-primary/10 rounded-lg">
          <Loader2 className="w-5 h-5 animate-spin text-primary mr-2" />
          <span className="text-sm text-primary">Processing payment...</span>
        </div>
      )}
    </div>
  );
};

const PayPalPayment: React.FC<PayPalPaymentProps> = (props) => {
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  const { toast } = useToast();

  if (!clientId) {
    return (
      <div className="p-6 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
        <XCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-muted-foreground mb-2">
          PayPal Not Configured
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Please add your PayPal Client ID to the environment variables.
        </p>
        <Button 
          onClick={() => {
            toast({
              title: "PayPal Setup Required",
              description: "Contact your developer to configure PayPal integration.",
              variant: "destructive"
            });
          }}
          variant="outline"
        >
          Contact Support
        </Button>
      </div>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId: clientId,
        currency: props.currency || 'USD',
        intent: 'capture',
        components: 'buttons',
      }}
    >
      <PayPalButtonWrapper {...props} />
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
