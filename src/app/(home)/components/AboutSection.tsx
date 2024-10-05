import { Section } from "@/components/Section";

function About({ title, description }: { title: string; description: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <div className="w-[5px] h-[100px] bg-primary row-span-2 mr-10" />
      <h2 className="text-4xl text-gray-400 font-serif">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <Section title="About">
      <About
        title="Go Haji No Antri"
        description="Merupakan program Haji yang kami miliki sebagai solusi untuk para Jama'ah. Berangkat haji tanpa harus mengantri merupakan keistimewaan yang kami tawarkan kepada Anda dengan jaminan Aman, Amanah, dan Tanpa Kekhawatiran."
      />
      <About
        title="Mantap Umrah"
        description="Terdiri dari Umrah Reguler, Umrah Plus serta Umrah VIP yang memiliki pelayanan serta fasilitas yang mempu memberikan Anda kenyamanan dalam beribadah."
      />
      <About
        title="Halal Tour"
        description="Sebuah program Tour dengan nuansa yang berbeda. Melayani Tour Domestic maupun Tour International serta menyediakan layanan untuk pemesanan Tiket Pesawat yang memudahkan Anda dengan Harga yang dapat bersaing."
      />
    </Section>
  );
}
