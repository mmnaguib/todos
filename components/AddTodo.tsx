"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Textarea } from "./ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TodoFormSchema, TodoFormValues } from "@/zodSchemas/addTodoSchema";
import { useForm } from "react-hook-form";
import { addTodo } from "@/actions/todoActions";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import Spinner from "./ui/Spinner";

const AddTodo = ({ userId }: { userId: string | null }) => {
  const defaultValues: Partial<TodoFormValues> = {
    title: "",
    body: "",
    isCompleted: false,
  };
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(TodoFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = async ({ title, body, isCompleted }: TodoFormValues) => {
    setLoading(true);
    await addTodo({
      title,
      body: body as string,
      isCompleted,
      userId: userId as string,
    });
    setLoading(false);
    setOpen(false);
    form.reset();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="text-right">
        <DialogTrigger asChild>
          <Button variant="default">
            <Plus />
            New Todo
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
          <DialogDescription>
            Make changes to your Todo here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-5">
              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Body</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none"
                        {...field}
                        name="body"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex mt-5">
              <FormField
                control={form.control}
                name="isCompleted"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        {...{ ...field, value: undefined }}
                      />
                    </FormControl>
                    <FormLabel className="ml-1">Completed</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogDescription>
              your todo item will be published by default unless you uncheck it.
            </DialogDescription>
            <DialogFooter>
              <Button disabled={loading} type="submit">
                {loading ? <Spinner /> : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodo;
