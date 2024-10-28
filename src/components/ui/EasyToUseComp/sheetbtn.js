"use client"


import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [fileFormat, setFileFormat] = useState("");
  const [deadline, setDeadline] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display confirmation message
    setConfirmationMessage("Order submitted! You will receive a confirmation email, and work will begin shortly.");

    // Clear form fields
    setName("");
    setEmail("");
    setOrderDetails("");
    setQuantity(1);
    setPrice(5);
    setImage(null);
    setFileFormat("");
    setDeadline("");
  };

  // Hide confirmation message after 5 seconds
  useEffect(() => {
    if (confirmationMessage) {
      const timer = setTimeout(() => setConfirmationMessage(""), 5000);
      return () => clearTimeout(timer); // Clear timer on component unmount
    }
  }, [confirmationMessage]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-black text-white" variant="outline">Custom order</Button>
      </SheetTrigger>
      <SheetContent className="h-screen flex flex-col">
        <SheetHeader>
          <SheetTitle>Custom Order Request</SheetTitle>
          <SheetDescription>
            Please fill out the details below to request a custom order.
          </SheetDescription>
        </SheetHeader>

        <form
          className="flex-grow overflow-y-auto grid gap-4 py-4"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" placeholder="Your name" required />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" placeholder="Your email" required />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="orderDetails" className="text-right">Order Details</Label>
            <textarea id="orderDetails" value={orderDetails} onChange={(e) => setOrderDetails(e.target.value)} className="col-span-3 border rounded p-2" placeholder="Describe your custom order" rows="4" required />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">Quantity</Label>
            <Input id="quantity" type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="col-span-3" placeholder="1" required />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">Price ($)</Label>
            <Input id="price" placeholder="+5$"  type="number" min="5" value={price} 
            onChange={(e) => setPrice(e.target.value >= `+5$` ? e.target.value : 5)} className="col-span-3" required />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="referenceImage" className="text-right">Reference Image</Label>
            <Input id="referenceImage" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fileFormat" className="text-right">File Format</Label>
            <select id="fileFormat" value={fileFormat} onChange={(e) => setFileFormat(e.target.value)} className="col-span-3 border rounded p-2" required>
              <option value="">Select format</option>
              <option value="svg">SVG</option>
              <option value="png">PNG</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deadline" className="text-right">Deadline</Label>
            <Input id="deadline" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="col-span-3" required />
          </div>
        </form>

        <SheetFooter className="sticky bottom-0 bg-white">
          <Button type="submit" onClick={handleSubmit}>Submit Order</Button>
        </SheetFooter>

        {confirmationMessage && (
          <div className="p-4 text-center text-green-600 font-semibold">{confirmationMessage}</div>
        )}
      </SheetContent>
    </Sheet>
  );
}
