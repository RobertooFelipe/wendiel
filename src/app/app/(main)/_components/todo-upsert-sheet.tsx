"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useRef } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Todo } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { upsertTodoSchema } from "../../schema";
import { upsertTodo } from "../../actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type TodoUpsertSheetProps = {
  children?: React.ReactNode;
  defaultValue?: Todo;
};

export function TodoUpsertSheet({
  children,
  defaultValue,
}: TodoUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(upsertTodoSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await upsertTodo(data);
    router.refresh();

    ref.current?.click();

    toast({
      title: "Success",
      description: "Your todo has been created.",
    });
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form
            onSubmit={onSubmit}
            className="space-y-8 h-screen flex flex-col"
          >
            <SheetHeader>
              <SheetTitle>Create Todo</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you &lsquo;
                re done.
              </SheetDescription>
            </SheetHeader>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your todo title" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public todo title.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
