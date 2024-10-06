"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function RegisterForm() {
  return (
    <form className="space-y-4">
      <Input placeholder="Name" />
      <Input placeholder="No. Handphone" />
      <Input placeholder="Address" />
      <div className="w-fit mx-auto">
        <Button className="rounded-full px-6">Apply Now</Button>
      </div>
    </form>
  );
}
