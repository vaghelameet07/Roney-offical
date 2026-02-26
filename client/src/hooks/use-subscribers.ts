import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

type SubscribeInput = z.infer<typeof api.subscribers.create.input>;

export function useSubscribe() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: SubscribeInput) => {
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || "Failed to subscribe");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "SUCCESS!",
        description: "You've successfully joined the squad.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "CONNECTION FAILED",
        description: error.message || "Failed to subscribe. Try again.",
        variant: "destructive",
      });
    },
  });
}
