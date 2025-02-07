'use server'
import stripe from "@/app/lib/stripe";
import Stripe from "stripe";

export interface Metadata {
  customerNumber: number;
  orderNumber: string;
  customerEmail: string;
}

export interface CartItem {
  product: {
    id: string;
    name: string;
    price: number;
    image?: string;
    description?: string;
    _id?: string;
    images?: string[];
  };
  quantity: number;
}

export async function createCheckoutSession(
  items: CartItem[],
  metadata: Metadata
): Promise<string> {
  try {
    
    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });

    const customerId = customers.data.length > 0 ? customers.data[0].id : undefined;

    // Stripe Checkout Session 
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item) => ({
        price_data: {
          currency: "pkr",
          unit_amount: Math.round(item.product.price * 100), 
          product_data: {
            name: item.product.name,
            description: item.product.description ,
            images: item.product.images && item.product.images.length > 0
              ? [item.product.images[0]]
              : undefined,
          },
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      metadata: {
        orderNumber: metadata.orderNumber,
        customerEmail: metadata.customerEmail,
      },
      invoice_creation: { enabled: true },
    };

    
    if (customerId) {
      sessionParams.customer = customerId;
    } else {
      sessionParams.customer_email = metadata.customerEmail;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return session.url!;
  } catch (error) {
    console.error("Checkout session not defined", error);
    throw error;
  }
}
