"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alex Rivera",
    avatar: "AR",
    title: "Software Engineer",
    description: "Sovrix AI has completely changed how I write code. The code generation is incredible.",
  },
  {
    name: "Samantha Lee",
    avatar: "SL",
    title: "Content Creator",
    description: "I use it every day for generating marketing copy and images. Saves me hours each week.",
  },
  {
    name: "Jordan Kim",
    avatar: "JK",
    title: "Product Manager",
    description: "The conversation feature is so natural. It feels like talking to a brilliant colleague.",
  },
  {
    name: "Maria Santos",
    avatar: "MS",
    title: "Graphic Designer",
    description: "The image generation quality is stunning. My clients love the creative concepts we produce.",
  },
];

export function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-sm font-bold">
                    {item.avatar}
                  </div>
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 font-normal text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
