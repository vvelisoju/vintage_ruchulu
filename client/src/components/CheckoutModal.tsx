import { useEffect, useState } from "react";
import { MessageCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CartItem } from "../types/product";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { config } from "../config";
import { useToast } from "@/hooks/use-toast";

const customerDetailsSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"),
  address: z.string().optional(),
  notes: z.string().optional(),
});

type CustomerDetailsForm = z.infer<typeof customerDetailsSchema>;

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  cartTotal: number;
  onOrderComplete: () => void;
}

export function CheckoutModal({ open, onClose, cartItems, cartTotal, onOrderComplete }: CheckoutModalProps) {
  const { toast } = useToast();
  const [savedCustomerDetails, setSavedCustomerDetails] = useLocalStorage<CustomerDetailsForm | null>(
    "vintage-ruchulu-customer",
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappError, setWhatsappError] = useState(false);

  const form = useForm<CustomerDetailsForm>({
    resolver: zodResolver(customerDetailsSchema),
    defaultValues: {
      name: savedCustomerDetails?.name || "",
      phone: savedCustomerDetails?.phone || "",
      address: savedCustomerDetails?.address || "",
      notes: "",
    },
  });

  useEffect(() => {
    if (open && savedCustomerDetails) {
      form.reset({
        name: savedCustomerDetails.name || "",
        phone: savedCustomerDetails.phone || "",
        address: savedCustomerDetails.address || "",
        notes: "",
      });
    }
  }, [open, savedCustomerDetails, form]);

  const generateOrderId = () => {
    const date = new Date();
    const dateStr = date.toISOString().slice(0, 10).replace(/-/g, "");
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    return `${config.orderIdPrefix}-${dateStr}-${randomNum}`;
  };

  const onSubmit = (data: CustomerDetailsForm) => {
    setIsSubmitting(true);
    setWhatsappError(false);

    setSavedCustomerDetails({
      name: data.name,
      phone: data.phone,
      address: data.address,
    });

    const orderId = generateOrderId();
    const itemsList = cartItems
      .map((item) => `${item.quantity} x ${item.product.name} (${item.product.weight}) - ₹${item.product.price * item.quantity}`)
      .join("\n");

    const message = `${config.brand.name} (${config.brand.location}) - New Order

${itemsList}

Total: ₹${cartTotal}

Customer Details:
Name: ${data.name}
Phone: ${data.phone}
${data.address ? `Address: ${data.address}` : ""}
${data.notes ? `Notes: ${data.notes}` : ""}

Order ID: ${orderId}`;

    const whatsappUrl = `https://wa.me/${config.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;
    
    try {
      const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === "undefined") {
        setWhatsappError(true);
        toast({
          title: "Popup blocked",
          description: "Please allow popups for this site or copy the order details manually.",
          variant: "destructive",
        });
      } else {
        onOrderComplete();
        onClose();
        form.reset();
        toast({
          title: "Order sent!",
          description: "Your order has been sent via WhatsApp. We'll contact you soon!",
        });
      }
    } catch (error) {
      setWhatsappError(true);
      toast({
        title: "Error opening WhatsApp",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyOrderDetails = () => {
    const orderId = generateOrderId();
    const data = form.getValues();
    const itemsList = cartItems
      .map((item) => `${item.quantity} x ${item.product.name} (${item.product.weight}) - ₹${item.product.price * item.quantity}`)
      .join("\n");

    const message = `${config.brand.name} (${config.brand.location}) - New Order

${itemsList}

Total: ₹${cartTotal}

Customer Details:
Name: ${data.name}
Phone: ${data.phone}
${data.address ? `Address: ${data.address}` : ""}
${data.notes ? `Notes: ${data.notes}` : ""}

Order ID: ${orderId}`;

    navigator.clipboard.writeText(message).then(() => {
      toast({
        title: "Order details copied!",
        description: "You can now paste this in WhatsApp manually.",
      });
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md" data-testid="modal-checkout">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold" data-testid="text-checkout-title">
            Checkout
          </DialogTitle>
          <DialogDescription data-testid="text-checkout-description">
            Fill in your details to complete your order via WhatsApp
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            {whatsappError && (
              <Alert variant="destructive" data-testid="alert-whatsapp-error">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Unable to open WhatsApp. Please try again or use the "Copy Order" button below.
                </AlertDescription>
              </Alert>
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" data-testid="input-name" {...field} />
                  </FormControl>
                  <FormMessage data-testid="error-name" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone Number <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      data-testid="input-phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage data-testid="error-phone" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your delivery address"
                      rows={3}
                      data-testid="input-address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Notes (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any special instructions?"
                      rows={2}
                      data-testid="input-notes"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4 space-y-3 border-t border-border">
              <div className="flex items-center justify-between text-lg font-bold" data-testid="div-checkout-total">
                <span data-testid="text-total-label">Total:</span>
                <span data-testid="text-checkout-total">₹{cartTotal}</span>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base bg-[#25D366] hover:bg-[#25D366] text-white"
                disabled={isSubmitting}
                data-testid="button-send-whatsapp"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {isSubmitting ? "Sending..." : "Send Order via WhatsApp"}
              </Button>

              {whatsappError && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={copyOrderDetails}
                  className="w-full"
                  data-testid="button-copy-order"
                >
                  Copy Order Details
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
