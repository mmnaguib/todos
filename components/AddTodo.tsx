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
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
const AddTodo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus />
          New Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
          <DialogDescription>
            Make changes to your Todo here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name">Title</Label>
            <Input id="title" defaultValue="" className="col-span-12" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username">body</Label>
            <Input id="body" defaultValue="" className="col-span-12" />
          </div>
          <div className="flex">
            <Input type="checkbox" className="w-5 h-5 ml-1 mr-3 rounded-md" />
            Completed
          </div>
          <DialogDescription>
            your todo item will be published by default unless you uncheck it.
          </DialogDescription>
        </div>
        <DialogFooter>
          <Button type="submit">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodo;
